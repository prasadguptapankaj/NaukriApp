import { FlatList, StyleSheet, Text, View, useWindowDimensions, Animated } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import CarouselItem from './CarouselItem';

const Paginator = ({ data, scrollX }) => {
  const width = useWindowDimensions().width;
  return (
    <View style={{flexDirection: 'row', height: 10, marginLeft: 5}}>
      {data.map((_, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return <Animated.View style={[styles.paginationDot, { width: dotWidth, opacity }]} key={index.toString()} />;
      })}
    </View>
  );
};

const CustomCarousel = () => {
  const data = [
    {
      id: '1',
      title: 'Boot 8%',
      content: "Let recruiters know more about your job",
      titleIcon: 'account',
      buttonLabel: 'Add job profile',
      buttonLink: 'https://example.com/button1',
    },
    {
      id: '2',
      title: 'Boot 10%',
      content: 'Recruiters prefer contacting verified numbers',
      titleIcon: 'bell',
      buttonLabel: 'Verify mobile',
      buttonLink: 'https://example.com/button2',
    },
  ];
  

  const { width } = useWindowDimensions();
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const numItems = data.length;
    const scroll = (index) => {
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({
          offset: index * width,
          animated: true,
        });
      }
    };

    const handleScrollEnd = (event) => {
      const index = Math.round(event.nativeEvent.contentOffset.x / width);
      scroll(index);
    };

    // Automatically scroll every 3 seconds
    const timer = setInterval(() => {
      const nextIndex = Math.round(scrollX._value / width) + 1;
      scroll(nextIndex < numItems ? nextIndex : 0);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [data, width, scrollX]);

  return (
    <View style={{backgroundColor: 'white', paddingVertical: 20}}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CarouselItem item={item} width={width} />}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={16}
        ref={flatListRef}
      />
      <Paginator data={data} scrollX={scrollX}/>
    </View>
  );
};

export default CustomCarousel;

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 8,
    alignSelf: 'center',
  },
  paginationDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'blue',
    marginHorizontal: 4,
  },
  activePaginationDot: {
    backgroundColor: '#007AFF', // Use your theme color for the active item dot
  },
  
});
