import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
  },
  replaceButton: {
    backgroundColor: '#FFE74C',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  imageContainer: {
    backgroundColor: '#F3F2F7',
    borderRadius: 12,
    marginVertical: 16,
  },
  typeContainer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
});

export default styles;
