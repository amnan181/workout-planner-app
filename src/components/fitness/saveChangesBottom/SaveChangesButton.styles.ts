import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 100,
    padding: 8,

    shadowColor: '#00000026',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 6.5,
    position: 'absolute',
    bottom: 150,
    alignSelf: 'center',
  },
  buttonContainer: {
    backgroundColor: '#F3F2F7',
    paddingVertical: 16,
    flex: 1,
    borderRadius: 100,
    alignItems: 'center',
  },
});

export default styles;
