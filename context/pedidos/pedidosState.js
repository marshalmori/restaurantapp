import {useReducer} from 'react';

import PedidosReducer from './pedidosReducer';
import PedidosContext from './pedidosContext';

import {
  SELECCIONAR_PRODUCTO,
  CONFIRMAR_ORDENAR_PLATILLO,
  MOSTRAR_RESUMEN,
} from '../../types';

const PedidosState = props => {
  //Crear state inicial
  const initialState = {
    pedido: [],
    platillo: null,
    total: 0,
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

  // Cuando el usuario confirma un platillo
  const guardarPedido = pedido => {
    dispatch({
      type: CONFIRMAR_ORDENAR_PLATILLO,
      payload: pedido,
    });
  };

  // Muestra el total a pagar en el resumen
  const mostrarResumen = total => {
    dispatch({
      type: MOSTRAR_RESUMEN,
      payload: total,
    });
  };

  return (
    <PedidosContext.Provider
      value={{
        pedido: state.pedido,
        platillo: state.platillo,
        total: state.total,
        seleccionarPlatillo,
        guardarPedido,
        mostrarResumen,
      }}>
      {props.children}
    </PedidosContext.Provider>
  );
};

export default PedidosState;
