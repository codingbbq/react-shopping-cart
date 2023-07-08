import axios from 'axios';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPge';
import { useEffect, useReducer } from 'react';
import { CartReducer } from './reducers/CartReducer';
import Header from './components/Header';
function App() {

  const [state, dispatch] = useReducer(CartReducer, {
    products: [],
    cart: []
  });

  // When the component loads, call the API to fetch the products.
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products')

    dispatch({
      type: 'ADD_PRODUCTS',
      payload: data.products
    });

  }

  return (
    <>
      
      <Header></Header>
      <div className="decoration"></div>
      <div className="container-fluid px-3">
        <div className="d-grid gap-3" style={{ gridTemplateColumns: '3fr 1fr' }}>
          <div className="bg-body-tertiary p-4">
            <ProductPage state={state} dispatch={dispatch}></ProductPage>
          </div>
          <div className="bg-body-tertiary p-4">
            <CartPage state={state} dispatch={dispatch}></CartPage>
          </div>
        </div>
      </div>
      <div className="decoration"></div>
    </>
  );
}

export default App;
