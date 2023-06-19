import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import PedidosContext from '../context/pedidos/pedidosContext';
import {
  NativeBaseProvider,
  Container,
  Box,
  Footer,
  FooterTab,
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
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/global';

const DetallePlatillo = () => {
  //Pedido Context
  const {platillo} = useContext(PedidosContext);
  const {nombre, imagen, descripcion, precio, categoria} = platillo;

  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <Box style={globalStyles.contenedor} mt="10">
        {/* <Heading style={globalStyles.titulo}>
          <Text>{nombre}</Text>
        </Heading> */}
        {/* ======= CARD ========= */}
        <Box alignItems="center">
          <Box
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: 'coolGray.600',
              backgroundColor: 'gray.700',
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: 'gray.50',
            }}>
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  height="300px"
                  width="100%"
                  source={{
                    uri: imagen,
                  }}
                  alt={nombre}
                />
              </AspectRatio>
              <Center
                bg="light.800"
                _dark={{
                  bg: 'ligth.300',
                }}
                _text={{
                  color: 'warmGray.50',
                  fontWeight: '700',
                  fontSize: 'xs',
                }}
                position="absolute"
                bottom="-122"
                px="3"
                py="1.5">
                <Text style={styles.flagCategoria}>{categoria}</Text>
              </Center>
            </Box>
            <Stack px="5" mt="40" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  {nombre}
                </Heading>
                <Text
                  fontSize="lg"
                  _light={{
                    color: 'violet.500',
                  }}
                  _dark={{
                    color: 'violet.400',
                  }}
                  fontWeight="900"
                  ml="-0.5"
                  mt="-1">
                  Precio: $ {precio}
                </Text>
              </Stack>
              <Text fontWeight="400" mb="5">
                {descripcion}
              </Text>
            </Stack>
          </Box>
        </Box>
        {/* ======= FIM CARD ========= */}
      </Box>

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
            onPress={() => navigation.navigate('FormularioPlatillo')}>
            <Center>
              <Text style={globalStyles.botonTexto} color="white" fontSize="15">
                Ordenar Platillo
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  flagCategoria: {
    textTransform: 'uppercase',
    color: '#FFDA00',
  },
});

export default DetallePlatillo;
