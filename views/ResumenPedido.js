import React, {useContext, useEffect} from 'react';
import {StyleSheet, Alert} from 'react-native';
import PedidosContext from '../context/pedidos/pedidosContext';
import {
  NativeBaseProvider,
  Box,
  HStack,
  Text,
  Pressable,
  VStack,
  FlatList,
  Avatar,
  Spacer,
  Center,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/global';

const ResumenPedido = () => {
  // context de pedido
  const {pedido} = useContext(PedidosContext);

  return (
    <NativeBaseProvider>
      <Box style={globalStyles.contenedor}>
        <FlatList
          data={pedido}
          renderItem={({item, index}) => (
            <Pressable
            // onPress={() => {
            //   const {existencia, ...item2} = item;
            //   seleccionarPlatillo(item2);
            //   navigation.navigate('DetallePlatillo');
            // }}
            >
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: 'muted.50',
                }}
                borderColor="muted.800"
                pl={['0', '4']}
                pr={['0', '5']}
                py="2">
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Avatar
                    size="55px"
                    ml="3"
                    source={{
                      uri: item.imagen,
                    }}
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color="coolGray.800"
                      bold>
                      {item.nombre}
                    </Text>
                    <Text
                      numberOfLines={2}
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}>
                      Cantidad: {item.cantidad}
                    </Text>
                    <Text
                      bold
                      color="coolGray.900"
                      _dark={{
                        color: 'warmGray.50',
                      }}>
                      Precio: $ {item.precio}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}>
                      {}
                    </Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
              <VStack mt="4" space={4} alignItems="center">
                <Text fontSize="xl" bold>
                  Total a pagar: $
                </Text>
              </VStack>
            </Pressable>
          )}
          keyExtractor={item => item.id}
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default ResumenPedido;
