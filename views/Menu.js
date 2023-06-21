import React, {useContext, useEffect} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';

import {
  NativeBaseProvider,
  FlatList,
  Box,
  Text,
  HStack,
  Avatar,
  Spacer,
  VStack,
  Center,
} from 'native-base';

import FirebaseContext from '../context/firebase/firebaseContext';
import PedidosContext from '../context/pedidos/pedidosContext';

const Menu = () => {
  //Context de Firebase
  const {menu, obtenerProductos} = useContext(FirebaseContext);

  // Context de Pedido
  const {seleccionarPlatillo} = useContext(PedidosContext);

  const navigation = useNavigation();

  useEffect(() => {
    obtenerProductos();
  }, []);

  const mostrarHeading = (categoria, i) => {
    if (i > 0) {
      const categoriaAnterior = menu[i - 1].categoria;
      if (categoriaAnterior !== categoria) {
        return (
          <Box
            style={styles.separador}
            width="100%"
            bg="primary.500"
            p="2"
            mt="-2"
            mb="5"
            shadow={3}>
            <Text
              style={styles.separadorTexto}
              fontSize="lg"
              fontWeight="bold"
              color="white"
              textTransform="uppercase">
              {categoria}
            </Text>
          </Box>
        );
      }
    } else {
      return (
        <Box
          style={styles.separador}
          width="100%"
          bg="primary.500"
          p="2"
          mt="-2"
          mb="5"
          shadow={3}>
          <Text
            style={styles.separadorTexto}
            fontSize="lg"
            fontWeight="bold"
            color="white"
            textTransform="uppercase">
            {categoria}
          </Text>
        </Box>
      );
    }
  };

  return (
    <NativeBaseProvider>
      <Box style={globalStyles.contenedor}>
        <FlatList
          data={menu}
          renderItem={({item, index}) => (
            <Pressable
              onPress={() => {
                const {existencia, ...item2} = item;
                seleccionarPlatillo(item2);
                navigation.navigate('DetallePlatillo');
              }}>
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: 'muted.50',
                }}
                borderColor="muted.800"
                pl={['0', '4']}
                pr={['0', '5']}
                py="2">
                {mostrarHeading(item.categoria, index)}
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Avatar
                    ml="3"
                    size="55px"
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
                      {item.descripcion}
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
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  separador: {
    backgroundColor: '#000',
  },
  separadorTexto: {
    color: '#FFDA00',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Menu;
