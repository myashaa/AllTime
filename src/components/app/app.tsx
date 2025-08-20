import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { AppRoute } from '~/const/route/app-route';
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
        <Route path={AppRoute.ProductDetails} element={<ProductDetails />} />
        <Route path={AppRoute.Cart} element={<Cart />} />
        <Route path={AppRoute.Checkout} element={<Checkout />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
        <Route path={AppRoute.Others} element={<Navigate to={AppRoute.NotFound} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
