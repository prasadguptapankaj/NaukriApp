import * as React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  jobs: FirstRoute,
  chat: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'jobs', title: 'Jobs' },
    { key: 'chat', title: 'Chat' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'darkorange' }}
      style={{ backgroundColor: 'white' }}
      labelStyle={{ color: 'black' }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'white', // Change the background color to white
},
tabView: {
    flex: 1,
    backgroundColor: 'white'
},
tabBar: {
    backgroundColor: 'white', // Change the tabBar background color to white
    flexDirection: 'row', // This will make the design dense
    justifyContent: 'space-around', // You can adjust this as per your preference
    alignItems: 'center',
},
sceneContainer: {
    backgroundColor: 'white', // Change the scene background color to white
},
// Your custom tabBar styles go here (if you have any)
});
  