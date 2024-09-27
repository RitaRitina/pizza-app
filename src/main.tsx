import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import Cart from './pages/Cart/Cart.tsx';
import Error from './pages/Error/Error.tsx';
import Layout from './layout/Layout/Layout.tsx';
import ProductBody from './pages/Product/Product.tsx';
import axios from 'axios';
import { PREFIX } from './helpers/API.ts';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            path: '/',
            element: (
               <Suspense fallback={<>Загрузка...</>}>
                  <Menu />
               </Suspense>
            ),
         },
         {
            path: 'cart',
            element: <Cart />,
         },
         {
            path: '/product/:id',
            element: <ProductBody />,
            errorElement: <>Ошибка!</>,
            loader: async ({ params }) => {
               return defer({
                  data: new Promise((resolve, reject) => {
                     setTimeout(() => {
                        axios
                           .get(`${PREFIX}/products/${params.id}`)
                           .then((data) => resolve(data))
									.catch(reject);
                     }, 2000);
                  }),
               });

               // return defer({
               //    data: axios
               //       .get(`${PREFIX}/products/${params.id}`)
               //       .then((data) => data),
               // });

               // await new Promise<void>((resolve) => {
               //    setTimeout(() => {
               //       resolve();
               //    }, 2000);
               // });
               // const { data } = await axios.get(
               //    `${PREFIX}/products/${params.id}`
               // );
               // return data;
            },
         },
      ],
   },
   {
      path: '*',
      element: <Error />,
   },
]);

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
