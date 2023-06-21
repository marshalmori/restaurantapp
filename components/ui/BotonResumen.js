import React, {useContext} from 'react';
import {Button, Text, NativeBaseProvider} from 'native-base';
import globalStyles from '../../styles/global';
import {useNavigation} from '@react-navigation/native';
import PedidosContext from '../../context/pedidos/pedidosContext';

const BotonResumen = () => {
  const navigation = useNavigation();

  // Leer el objeto de pedido
  const {pedido} = useContext(PedidosContext);

  if (pedido.length === 0) return null;

  return (
    <NativeBaseProvider>
      <Button
        style={globalStyles.boton}
        onPress={() => navigation.navigate('ResumenPedido')}>
        <Text style={globalStyles.botonTexto}>Pedido</Text>
      </Button>
    </NativeBaseProvider>
  );
};

export default BotonResumen;
