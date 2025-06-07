import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import Homepage from './pages/Homepage/Homepage'

// Layouts
import MouseLayout from './layouts/MouseLayout'
import BagLayout from './layouts/BagLayout'
import ChairLayout from './layouts/ChairLayout'
import EarbudLayout from './layouts/EarbudLayout'
import HeadphoneLayout from './layouts/HeadPhoneLayout'
import KeyboardLayout from './layouts/KeyboardLayout'
import TableLayout from './layouts/TableLayout'
import MousepadLayout from './layouts/MousepadLayout'
// Product List Pages
import Mouses from './pages/Mouse/Mouses'
import Bags from './pages/Bag/Bags'
import Chairs from './pages/Charis/Chairs'
import Headphones from './pages/Headphone/Headphones'
import Keyboards from './pages/Keyboard/Keyboards'
import Tables from './pages/Table/Tables'
import Mousepads from './pages/Mousepad/Mousepads'
// Shared Product Detail Page
import TablesDetail from './pages/Table/TablesDetail'
import MousesDetail from './pages/Mouse/MousesDetail'
import KeyboardsDetail from './pages/Keyboard/KeyboardsDetail'
import HeadphonesDetail from './pages/Headphone/HeadphonesDetail'
import BagsDetail from './pages/Bag/BagsDetail'
import ChairsDetail from './pages/Charis/ChairsDetail'
import MousepadDetail from './pages/Mousepad/MousepadDetail'
import Carts from './pages/Carts'
import CartLayout from './layouts/CartLayout'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Homepage />} />

        <Route path='mouses' element={<MouseLayout />}>
          <Route index element={<Mouses />} />
          <Route path=':id' element={<MousesDetail />} />
        </Route>

        <Route path='mousepads' element={<MousepadLayout />}>
          <Route index element={<Mousepads />} />
          <Route path=':id' element={<MousepadDetail />} />
        </Route>

        {/* <Route path='bags' element={<BagLayout />}>
          <Route index element={<Bags />} />
          <Route path=':id' element={<BagsDetail />} />
        </Route> */}


        <Route path='headphones' element={<HeadphoneLayout />}>
          <Route index element={<Headphones />} />
          <Route path=':id' element={<HeadphonesDetail/>} />
        </Route>

        <Route path='keyboards' element={<KeyboardLayout />}>
          <Route index element={<Keyboards />} />
          <Route path=':id' element={<KeyboardsDetail />} />
        </Route>

        <Route path='checkout' element={<CartLayout/>}>
          <Route index element={<Carts/>}/>
        
        </Route>

      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
