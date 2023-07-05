import './App.scss';
import './config/firebase';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Routes from './pages/Routes'
import AuthContextProvider from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import ProductContextProvider from './contexts/ProductContext';
import CartContextProvider from './contexts/CartContext';

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <Routes />
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>

      <ToastContainer />
    </>
  );
}

export default App;
