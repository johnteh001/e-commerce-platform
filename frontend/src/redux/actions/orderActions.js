import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
} from '../constants/orderConstants';

export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });

    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    } else {
      dispatch({ type: ORDER_CREATE_FAIL, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: ORDER_CREATE_FAIL, payload: error.message });
  }
};

export const listOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST });

    const response = await fetch('/api/orders');
    const data = await response.json();

    dispatch({
      type: ORDER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload: error.message,
    });
  }
};
