import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DetallePlatillo from './views/DetallePlatillo';
import FormularioPlatillo from './views/FormularioPlatillo';
import Menu from './views/Menu';
import NuevaOrden from './views/NuevaOrden';
import ProgresoPedido from './views/ProgresoPedido';
import ResumenPedido from './views/ResumenPedido';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FFDA00',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="NuevaOrden"
            component={NuevaOrden}
            options={{
              title: 'Nueva Orden',
            }}
          />

          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              title: 'Menu',
            }}
          />

          <Stack.Screen
            name="DetallePlatillo"
            component={DetallePlatillo}
            options={{
              title: 'Detalle Platillo',
            }}
          />

          <Stack.Screen
            name="FormularioPlatillo"
            component={FormularioPlatillo}
            options={{
              title: 'Formulario Platillo',
            }}
          />

          <Stack.Screen
            name="ResumenPedido"
            component={ResumenPedido}
            options={{
              title: 'Resumen Pedido',
            }}
          />

          <Stack.Screen
            name="ProgresoPedido"
            component={ProgresoPedido}
            options={{
              title: 'Progreso Pedido',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
