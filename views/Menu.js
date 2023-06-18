import React, {useContext, useEffect} from 'react';
import {Pressable, StyleSheet, View, Image} from 'react-native';

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

  return (
    <NativeBaseProvider>
      <Box style={globalStyles.contenedor}>
        <Heading fontSize="xl" p="4" pb="3">
          Inbox
        </Heading>
        <FlatList
          data={menu}
          renderItem={({item}) => (
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
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start">
                  {item.categoria}
                </Text>
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
