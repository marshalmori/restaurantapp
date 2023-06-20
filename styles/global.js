import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  boton: {
    backgroundColor: '#FFDA00',
  },
  contenido: {
    marginHorizontal: '2.5%',
    flex: 1,
  },
  botonTexto: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#000',
  },
  categoriaTexto: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#ccc',
  },
  titulo: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 5,
    fontSize: 25,
  },
  imagen: {
    height: 300,
    width: '100%',
  },
});

export default globalStyles;
