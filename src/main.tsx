import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './pages/login/index.tsx'
import { Home } from './pages/home/index.tsx'
import { Dashboard } from './pages/dashboard/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: (
      <h1>Not Found</h1>
    )
  }, {
    path: '/login',
    element: <Login />,
    errorElement: (
      <h1>Not Found</h1>
    )
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: (
      <h1>Not Found</h1>
    )
  }
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
