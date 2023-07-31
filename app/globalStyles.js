import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  // Global text styles
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  caption: {
    fontSize: 12,
    color: '#888',
  },

  // Global container styles
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },

  // Global layout styles
  row: {
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  justifyContentBetween: {
    justifyContent: 'space-between'
  },

  // Global spacing styles
  padding: {
    padding: 16,
  },
  paddingHorizontal: {
    paddingHorizontal: 16,
  },
  paddingVertical: {
    paddingVertical: 16,
  },
  margin: {
    margin: 16,
  },
  marginHorizontal: {
    marginHorizontal: 16,
  },
  marginVertical: {
    marginVertical: 16,
  },

  // Global button styles
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default globalStyles;
