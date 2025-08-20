export enum AppRoute {
  Home = '/',
  ProductDetails = '/details',
  Cart = '/cart',
  Checkout = '/checkout',
  NotFound = '/error',
  Others = '*',
}

export enum AppRouteParams {
  ProductId = ':productId',
}
