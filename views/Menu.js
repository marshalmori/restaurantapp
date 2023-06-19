import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import FirebaseContext from '../context/firebase/firebaseContext';

import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';

import {
  NativeBaseProvider,
  FlatList,
  Box,
  Heading,
  Text,
  HStack,
  Avatar,
  Spacer,
  VStack,
} from 'native-base';

const Menu = () => {
  const {menu, obtenerProductos} = useContext(FirebaseContext);
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
