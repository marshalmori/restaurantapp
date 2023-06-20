import React, {useContext} from 'react';
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
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/global';

const FormularioPlatillo = () => {
  return (
    <NativeBaseProvider>
      <Box>
        <VStack space={2} alignItems="center">
          <Text fontSize="2xl" bold>
            Cantidad
          </Text>
          <HStack space={3} justifyContent="center">
            <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
            <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
            <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default FormularioPlatillo;
