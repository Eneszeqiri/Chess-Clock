import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  half: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  upperHalf: {
    backgroundColor: '#f5f5f5',
  },
  lowerHalf: {
    backgroundColor: '#1E1E2E',
    borderBottomWidth: 0,
  },
  upperNumber: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#333',
  },
  lowerNumber: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#fff',
  },
  centerButtonRow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    flexDirection: 'row',
    transform: [{ translateX: -90 }, { translateY: -25 }], // for three 60px buttons + 2*10px gap
    zIndex: 10,
  },
  centerButton: {
    width: 60,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginRight: 10,
  },
  centerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  centerButton2: {
    width: 70,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginRight: 10,
  },
  centerButton3: {
    width: 60,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 380,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timeInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeInputLabel: {
    fontSize: 16,
    marginRight: 8,
  },
  timeInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 60,
    height: 40,
    textAlign: 'center',
    fontSize: 16,
    marginRight: 8,
  },
  modalButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  incrementInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  incrementInputLabel: {
    fontSize: 16,
    marginRight: 8,
  },
  incrementInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 80,
    height: 40,
    textAlign: 'center',
    fontSize: 16,
    marginRight: 8,
    backgroundColor: '#f9f9f9',
  },
  iconWrapper: {
    backgroundColor: '#673AB7',
    borderRadius: 50, // Makes it a circle
    marginRight: 10
  },
  
});


export default styles; 