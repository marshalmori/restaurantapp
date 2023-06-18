import React from 'react';
import {StyleSheet, View} from 'react-native';

import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';

import {NativeBaseProvider, Box, Button, Text} from 'native-base';

const NuevaOrden = () => {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <Box
        style={[
          globalStyles.contenedor,
          globalStyles.contenido,
          styles.contenido,
        ]}>
        <Button
          style={globalStyles.boton}
          shadow={3}
          rounded={'50'}
          onPress={() => navigation.navigate('Menu')}
          h={10}>
          <Text style={globalStyles.botonTexto}>Nueva Orden</Text>
        </Button>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  contenido: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default NuevaOrden;
