import {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeBaseProvider, Container, Text, Button} from 'native-base';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';
import PedidosContext from '../context/pedidos/pedidosContext';

const ProgresoPedido = () => {
  return (
    <NativeBaseProvider>
      <Text>ProgresoPedido</Text>
    </NativeBaseProvider>
  );
};

export default ProgresoPedido;
