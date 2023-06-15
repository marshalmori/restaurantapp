import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeBaseProvider, Button, Text} from 'native-base';

const NuevaOrden = () => {
  return (
    <NativeBaseProvider>
      <View>
        <Button rounded block>
          <Text>Crear Nueva Orden</Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
};

export default NuevaOrden;
