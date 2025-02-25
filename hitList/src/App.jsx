import {Route, createBrowserRouter,createRoutesFromElements, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage'
import { MainLayout } from './layouts/MainLayout'

const router = createBrowserRouter(
  createRoutesFromElements(<Route  index element={<HomePage />}/>)
)

export const App = () => {
  return <RouterProvider router={router}/>
}

export default App
