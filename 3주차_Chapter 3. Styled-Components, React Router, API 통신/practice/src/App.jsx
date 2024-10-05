import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './pages/home';
import NotFound from './pages/error';
import Movies from './pages/movies';
import RootLayout from './layout/root-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <NotFound/>,

    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'movies',
        element: <Movies/>
      }
      ,
      {
        path: 'movies/:movieId',
        element: <Movies/>
      }
    ]
  }
  
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;