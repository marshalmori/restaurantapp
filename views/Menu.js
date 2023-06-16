import React, {Fragment, useContext, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import {
  NativeBaseProvider,
  Box,
  Container,
  Separator,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  HStack,
  VStack,
  Image,
  Spacer,
} from 'native-base';
import globalStyles from '../styles/global';
import {FlatList} from 'react-native-gesture-handler';

const Menu = () => {
  // Context de Firebase
  const {menu, obtenerProductos} = useContext(FirebaseContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <NativeBaseProvider>
      <Box style={globalStyles.contenedor} bgColor="#FFF">
        <FlatList
          data={menu}
          renderItem={({item}) => (
            <Box borderBottomWidth="1" borderColor="muted.300" py="2" px="2">
              <HStack space={[2, 3]} justifyContent="space-between">
                <Image
                  source={{uri: item.imagen}}
                  size="md"
                  alt="Imagen Plato"
                />

                <VStack justifyContent="center">
                  <Text bold>{item.nombre}</Text>
                  <Text color="muted.400" isTruncated maxW="95%">
                    {item.descripcion}
                  </Text>
                  <Text fontSize="xs" bold>
                    Precio: ${item.precio}
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

export default Menu;
