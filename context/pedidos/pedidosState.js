import {useReducer} from 'react';

import PedidosReducer from './pedidosReducer';
import PedidosContext from './pedidosContext';

import {SELECCIONAR_PRODUCTO} from '../../types';

const PedidosState = props => {
  //Crear state inicial
  const initialState = {
    pedido: [],
    platillo: null,
  };

  //useReducer con dispatch para ejecutar las funciones
  const [state, dispatch] = useReducer(PedidosReducer, initialState);

  // Selecciona el Producto que el usuario desea ordenar
  const seleccionarPlatillo = platillo => {
    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: platillo,
    });
  };

  return (
    <PedidosContext.Provider
      value={{
        pedido: state.pedido,
        platillo: state.platillo,
        seleccionarPlatillo,
      }}>
      {props.children}
    </PedidosContext.Provider>
  );
};

export default PedidosState;
