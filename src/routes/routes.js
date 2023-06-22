import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import Cart from '../pages/Cart';
import FAQ from '../pages/FAQ';
import Error from '../pages/Error';
import Categories from '../pages/Categories';
import ProductDetail from '../pages/ProductDetail';
import ComingSoon from '../pages/ComingSoon';
import Checkout from '../pages/Checkout';
import Compare from '../pages/Compare';
import Whislist from '../pages/Whislist';
import CustomorCare from '../pages/CustomorCare';
import Voucher from '../pages/Voucher';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgetPassword from '../pages/ForgetPassword';
import Account from '../pages/Account';
import ChangePassword from '../pages/Account/ChangePassword';
import PaymentAccount from '../pages/Account/PaymentAccount';
import Flashare from '../pages/Flashare';
import OrderAccount from '../pages/Account/OrderAccountPending';
import NotificationAccount from '../pages/Account/NotificationAccount';
import OrderAccountPending from '../pages/Account/OrderAccountPending';
import OrderAccountBuy from '../pages/Account/OrderAccountBuy';
import OrderAccountRun from '../pages/Account/OrderAccountRun';
import TopSale from '../pages/TopSale';
import Index from '../pages';
import OrderSuccessPending from '../pages/Mail/OrderSuccessPending';
import HomeNew from '../pages/HomeNew/HomePage';
import ProductDetailPageNew from '../pages/ProductDetailNew/ProductDetailPage';
import CategoryPageNew from '../pages/CategoriesNew/CategoryPage';
import CartNew from '../pages/CartNew/CartPage';
import Featured from '../pages/Featured';
import ProductDetailPage from '../pages/ProductDetail/ProductDetailPage';
import CheckoutPageNew from '../pages/CheckoutNew/CheckoutPageNew';
import Paypal from '../pages/CheckoutNew/Paypal';
import PaymentComplete from '../pages/CheckoutNew/PaymentComplete';
import PaymentFail from '../pages/CheckoutNew/PaymentFail';
import StoreLocation from '../pages/StoreLocation';

export const routes = [
  {
    path: '/homee-new',
    breadcrumb: 'Home',
    breadcrumb_link: true,
    component: HomeNew,
  },
  {
    path: '/category/:id',
    breadcrumb: 'category',
    breadcrumb_link: true,
    component: CategoryPageNew,
  },
  {
    path: '/store-location',
    breadcrumb: 'StoreLocation',
    breadcrumb_link: true,
    component: StoreLocation,
  },
  {
    path: '/paypal',
    breadcrumb: 'Paypal',
    breadcrumb_link: true,
    component: Paypal,
  },
  {
    path: '/payment-complete',
    breadcrumb: 'PaymentComplete',
    breadcrumb_link: true,
    component: PaymentComplete,
  },
  {
    path: '/payment-fail',
    breadcrumb: 'PaymentFail',
    breadcrumb_link: true,
    component: PaymentFail,
  },
  {
    path: '/checkout-new',
    breadcrumb: 'Checkout',
    breadcrumb_link: true,
    component: CheckoutPageNew,
  },
  {
    path: '/product-detail/:id',
    breadcrumb: 'product-detail',
    breadcrumb_link: true,
    component: ProductDetailPageNew,
  },
  {
    path: '/',
    breadcrumb: 'Dashboard',
    breadcrumb_link: true,
    component: Home,
  },
  {
    path: '/featured',
    breadcrumb: 'Dashboard',
    breadcrumb_link: true,
    component: Featured,
  },
  {
    path: '/about',
    breadcrumb: 'About',
    breadcrumb_link: true,
    component: About,
  },
  {
    path: '/mail/order-success-pending',
    breadcrumb: 'Mail',
    breadcrumb_link: true,
    component: OrderSuccessPending,
  },
  {
    path: '/account',
    breadcrumb: 'Account',
    breadcrumb_link: true,
    component: Account,
  },
  {
    path: '/flashare',
    breadcrumb: 'Flashare',
    breadcrumb_link: true,
    component: Flashare,
  },
  {
    path: '/top-sale',
    breadcrumb: 'Top Sale',
    breadcrumb_link: true,
    component: TopSale,
  },
  {
    path: '/account/payment',
    breadcrumb: 'Account Payment',
    breadcrumb_link: true,
    component: PaymentAccount,
  },
  {
    path: '/account/change-password',
    breadcrumb: 'Change Password',
    breadcrumb_link: true,
    component: ChangePassword,
  },
  {
    path: '/account/check-order',
    breadcrumb: 'Check Order',
    breadcrumb_link: true,
    component: OrderAccount,
  },
  {
    path: '/account/notification',
    breadcrumb: 'Account Notification',
    breadcrumb_link: true,
    component: NotificationAccount,
  },
  {
    path: '/account/order-pending',
    breadcrumb: 'Account Order Pending',
    breadcrumb_link: true,
    component: OrderAccountPending,
  },
  {
    path: '/account/order-buy',
    breadcrumb: 'Account Order Buy',
    breadcrumb_link: true,
    component: OrderAccountBuy,
  },
  {
    path: '/account/order-run',
    breadcrumb: 'Account Order Run',
    breadcrumb_link: true,
    component: OrderAccountRun,
  },
  {
    path: '/voucher',
    breadcrumb: 'Voucher',
    breadcrumb_link: true,
    component: Voucher,
  },
  {
    path: '/customor-care',
    breadcrumb: 'Customor-care',
    breadcrumb_link: true,
    component: CustomorCare,
  },
  {
    path: '/contact',
    breadcrumb: 'Contact',
    breadcrumb_link: true,
    component: Contact,
  },
  {
    path: '/blog',
    breadcrumb: 'Blog',
    breadcrumb_link: true,
    component: Blog,
  },
  {
    path: '/blog-detail',
    breadcrumb: 'Blog Detail',
    breadcrumb_link: true,
    component: BlogDetail,
  },
  {
    path: '/login',
    breadcrumb: 'Login',
    breadcrumb_link: true,
    component: Login,
  },
  {
    path: '/register',
    breadcrumb: 'Register',
    breadcrumb_link: true,
    component: Register,
  },
  {
    path: '/forget-password',
    breadcrumb: 'Register',
    breadcrumb_link: true,
    component: ForgetPassword,
  },
  {
    path: '/cart',
    breadcrumb: 'Cart',
    breadcrumb_link: true,
    component: CartNew,
  },
  {
    path: '/faq',
    breadcrumb: 'FAQ',
    breadcrumb_link: true,
    component: FAQ,
  },
  {
    path: '/Error',
    breadcrumb: 'Error',
    breadcrumb_link: true,
    component: Error,
  },
  {
    path: '/categories',
    breadcrumb: 'Categories',
    breadcrumb_link: true,
    component: Categories,
  },
  // {
  //   path: '/category/:category',
  //   breadcrumb: 'Categories',
  //   breadcrumb_link: true,
  //   component: Categories,
  // },
  // {
  //   path: '/product-detail/:name',
  //   breadcrumb: 'Product Detail',
  //   breadcrumb_link: true,
  //   component: ProductDetail,
  // },
  {
    path: '/coming-soon',
    breadcrumb: 'Coming Soon',
    breadcrumb_link: true,
    component: ComingSoon,
  },
  {
    path: '/checkout',
    breadcrumb: 'Checkout',
    breadcrumb_link: true,
    component: Checkout,
  },
  {
    path: '/compare',
    breadcrumb: 'ComparePage',
    breadcrumb_link: true,
    component: Compare,
  },
  {
    path: '/Whislist',
    breadcrumb: 'whislist',
    breadcrumb_link: true,
    component: Whislist,
  },
];
