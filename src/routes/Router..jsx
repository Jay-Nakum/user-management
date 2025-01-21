import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/homepage/HomePage'));
const UserForm = lazy(() => import('../pages/homepage/form/UserForm'));
const PageLayout = lazy(() => import('../layout/PageLayout'));
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<h1>loading...</h1>}>
        <PageLayout />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '/Add',
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <UserForm />
          </Suspense>
        ),
      },
      {
        path: '/Edit?',
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <UserForm />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
