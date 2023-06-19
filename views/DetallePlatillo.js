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
} from 'native-base';
import globalStyles from '../styles/global';

const DetallePlatillo = () => {
  //Pedido Context
  const {platillo} = useContext(PedidosContext);
  const {nombre, imagen, descripcion, precio, categoria} = platillo;

  return (
    <NativeBaseProvider>
      <Box style={globalStyles.contenedor}>
        <Heading style={globalStyles.titulo}>
          <Text>{nombre}</Text>
        </Heading>
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
                  The Garden City
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: 'violet.500',
                  }}
                  _dark={{
                    color: 'violet.400',
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1">
                  The Silicon Valley of India.
                </Text>
              </Stack>
              <Text fontWeight="400">
                Bengaluru (also called Bangalore) is the center of India's
                high-tech industry. The city is also known for its parks and
                nightlife.
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between">
                <HStack alignItems="center">
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}
                    fontWeight="400">
                    6 mins ago
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </Box>
        {/* ======= FIM CARD ========= */}
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  flagCategoria: {
    textTransform: 'uppercase',
    color: '#fff',
  },
});

export default DetallePlatillo;
