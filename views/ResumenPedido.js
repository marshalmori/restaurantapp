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
  Container,
  Button,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/global';

const ResumenPedido = () => {
  // context de pedido
  const {pedido, total, mostrarResumen} = useContext(PedidosContext);

  const navigation = useNavigation();

  useEffect(() => {
    calcularTotal();
  }, [pedido]);

  const calcularTotal = () => {
    let nuevoTotal = 0;
    nuevoTotal = pedido.reduce(
      (nuevoTotal, articulo) => nuevoTotal + articulo.total,
      0,
    );

    mostrarResumen(nuevoTotal);
  };

  // redirecciona a Progreso de Pedido
  const progresoPedido = () => {
    Alert.alert(
      'Revisa tu pedido',
      'Una vez que realizas tu pedido, no podrás cambiarlo',
      [
        {
          text: 'Confirmar',
          onPress: () => {
            navigation.navigate('ProgresoPedido');
          },
        },
        {
          text: 'Revisar',
          style: 'cancel',
        },
      ],
    );
  };

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
            </Pressable>
          )}
          keyExtractor={item => item.id}
        />
      </Box>

      <VStack mb="4" space={2} alignItems="center">
        <Text
          alignContent="center"
          px={60}
          py={2}
          alignItems="center"
          w="64"
          h="10"
          _dark={{
            bg: '#000',
          }}
          _light={{
            bg: '#000',
          }}
          rounded="md"
          shadow={3}
          color="#fff"
          bold>
          Total a pagar: $ {total}
        </Text>
      </VStack>
      <Button mt="10" onPress={() => navigation.navigate('Menu')}>
        Seguir Pidiendo
      </Button>

      <Button mt="40" onPress={() => progresoPedido()}>
        Ordenar Pedido
      </Button>
    </NativeBaseProvider>
  );
};

export default ResumenPedido;
