import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, Alert} from 'react-native';
import PedidosContext from '../context/pedidos/pedidosContext';
import {
  NativeBaseProvider,
  Container,
  Box,
  Button,
  Heading,
  AspectRatio,
  Center,
  Stack,
  HStack,
  Image,
  Text,
  Pressable,
  Icon,
  VStack,
  Input,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/global';

const FormularioPlatillo = () => {
  // state para cantidades
  const [cantidad, guardarCantidad] = useState(1);
  const [total, guardarTotal] = useState(0);

  //Context
  const {platillo} = useContext(PedidosContext);
  const {precio} = platillo;

  // En cuanto el componente carga, calcular la cantidad a pagar
  useEffect(() => {
    calcularTotal();
  }, [cantidad]);

  // Calcula el total del platillo por su cantidad
  const calcularTotal = () => {
    const totalPagar = precio * cantidad;
    guardarTotal(totalPagar);
  };

  const incrementarUno = () => {
    const nuevaCantidad = parseInt(cantidad) + 1;
    guardarCantidad(nuevaCantidad);
  };

  const decrementarUno = () => {
    if (cantidad > 1) {
      const nuevaCantidad = parseInt(cantidad) - 1;
      guardarCantidad(nuevaCantidad);
    }
  };

  // Confirma si la orden es correcta
  const confirmarOrden = () => {
    Alert.alert(
      'Deseas confirmar tu pedido?',
      'Un pedido confirmado ya no se podrá modificar',
      [
        {
          text: 'Confirmar',
          onPress: () => {
            // Almacenar el pedido al pedido principal
            // Navegar hacia el Resumen
          },
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
    );
  };

  return (
    <NativeBaseProvider>
      <Box>
        <VStack space={2} alignItems="center">
          <Text mt="20" fontSize="3xl" bold>
            Cantidad
          </Text>
          <HStack space={10} justifyContent="center" mt="10">
            <Button
              h="20"
              w="20"
              bg="#000"
              rounded="md"
              shadow={3}
              onPress={() => decrementarUno()}>
              <Text alignItems="center" color="#fff" fontSize="3xl">
                -
              </Text>
            </Button>
            <Input
              h="20"
              w="20"
              bg="muted.200"
              rounded="md"
              shadow={3}
              value={cantidad.toString()}
              fontSize="20"
              textAlign="center"
              keyboardType="numeric"
              onChangeText={cantidad => guardarCantidad(cantidad)}
            />
            <Button
              h="20"
              w="20"
              bg="#000"
              rounded="md"
              shadow={3}
              onPress={() => incrementarUno()}>
              <Text color="#fff" fontSize="4xl">
                +
              </Text>
            </Button>
          </HStack>

          <HStack>
            <Text fontSize="xl" bold mt="10">
              Subtotal: $ {total}
            </Text>
          </HStack>
        </VStack>
      </Box>

      {/* -------- FOOTER ------ */}
      <Box
        bg="white"
        height="50"
        width="100%"
        maxW="100%"
        alignSelf="center"
        mb="0">
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            style={globalStyles.boton}
            cursor="pointer"
            // opacity={selected === 0 ? 1 : 0.5}
            py="4"
            flex={1}
            onPress={() => confirmarOrden()}>
            <Center>
              <Text style={globalStyles.botonTexto} color="white" fontSize="15">
                Agregar al pedido
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default FormularioPlatillo;
