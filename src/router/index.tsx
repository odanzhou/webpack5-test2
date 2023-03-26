import { StrictMode } from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import routes from './Routes'

// createBrowserRouter 刷新后就没了，

const router = createHashRouter(routes)
console.log('router', router, routes)
const RouterIndex = () => {
  return <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
}

export default RouterIndex