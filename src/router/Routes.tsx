import type { RouteObject } from 'react-router-dom'
import App from '@/pages/App'
import ErrorPage from '@/pages/ErrorPage'


const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "child/:id",
        element: <App title="child" />
      }
    ]
  },
  {
    path: 'test/:id',
    element: <App title='404' />,
    errorElement: <ErrorPage />
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]

export default routes
