import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { APP_ROUTE } from '~/const/route/app-route';
import Home from '~/pages/home/home';
import ProductDetails from '~/pages/product-details/product-details';
import NotFound from '~/pages/not-found/not-found';
import Cart from '~/pages/cart/cart';
import Checkout from '~/pages/checkout/checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={APP_ROUTE.ProductDetails} element={<ProductDetails />} />
        <Route path={APP_ROUTE.Cart} element={<Cart />} />
        <Route path={APP_ROUTE.Checkout} element={<Checkout />} />
        <Route path={APP_ROUTE.NotFound} element={<NotFound />} />
        <Route path={APP_ROUTE.Others} element={<Navigate to={APP_ROUTE.NotFound} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
