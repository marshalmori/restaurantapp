import {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeBaseProvider, Container, Text, Button} from 'native-base';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';
import PedidosContext from '../context/pedidos/pedidosContext';
import firebase from '../firebase';
import {doc, getDoc} from 'firebase/firestore';
import Countdown from 'react-countdown';

const ProgresoPedido = () => {
  const {idpedido} = useContext(PedidosContext);

  const [tiempo, guardarTiempo] = useState(0);

  useEffect(() => {
    obtenerProducto();
  }, []);

  const obtenerProducto = async () => {
    const docRef = doc(firebase.db, 'ordenes', idpedido);
    const docSnap = await getDoc(docRef);
    guardarTiempo(docSnap.data().tiempoentrega);
  };

  // Muestra el countdown en la pantalla
  const renderer = ({minutes, seconds}) => {
    console.log(minutes);

    return (
      <Text style={styles.tiempo}>
        {minutes}:{seconds}
      </Text>
    );
  };

  return (
    <NativeBaseProvider>
      <Container style={globalStyles.contenedor}>
        <View style={[globalStyles.contenido, {marginTop: 50}]}>
          {tiempo === 0 && (
            <>
              <Text style={{textAlign: 'center'}}>
                Hemos recibido tu orden...
              </Text>
              <Text style={{textAlign: 'center'}}>
                Estamos calculando el tiempo de entrega
              </Text>
            </>
          )}

          {tiempo > 0 && (
            <>
              <Text style={{textAlign: 'center'}}>
                Su orden estará lista en:
              </Text>
              <Text>
                <Countdown
                  date={Date.now() + tiempo * 60000}
                  renderer={renderer}
                />
              </Text>
            </>
          )}
        </View>
      </Container>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  tiempo: {
    marginBottom: 20,
    fontSize: 60,
    textAlign: 'center',
    marginTop: 30,
  },
});

export default ProgresoPedido;
