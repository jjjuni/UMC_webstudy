import './App.css'
import './font.css'
import CartPage from './page/CartPage'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './layout/root-layout'
import PlayListPage from './page/PlayListPage'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: 
          <>
            <PlayListPage/>
          </>
        },
        {
          path: 'cart',
          element: <CartPage/>
        }
      ]
    }
  ])
  return (
    
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App