import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
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

  return (
    <NativeBaseProvider>
      <Box>
        <VStack space={2} alignItems="center">
          <Text mt="20" fontSize="3xl" bold>
            Cantidad
          </Text>
          <HStack space={10} justifyContent="center" mt="10">
            <Button h="20" w="20" bg="#000" rounded="md" shadow={3}>
              <Text alignItems="center" color="#fff" fontSize="3xl">
                +
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
            <Button h="20" w="20" bg="#000" rounded="md" shadow={3}>
              <Text color="#fff" fontSize="4xl">
                -
              </Text>
            </Button>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default FormularioPlatillo;
