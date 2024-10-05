import HomePage from "./pages/homePage.jsx";
import NotFound from "./pages/not-found.jsx";
import SearchPage from "./pages/searchPage.jsx";
import MovieCategoryPage from "./pages/movieCategoryPage.jsx";
import MoviesPage from "./pages/moviesPage.jsx";

import LoginPage from "./pages/loginPage.jsx";
import SignUpPage from "./pages/signupPage.jsx";

import RootLayout from "./layout/root-layout.jsx"
import Movieslayout from "./layout/movies-layout.jsx";

import './App.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";


function App() {

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
          path: 'login',
          element: <LoginPage/>
        },
        {
          path: 'sign-up',
          element: <SignUpPage/>
        },
        {
          path: 'search',
          element: <SearchPage/>
        },
        {
          path: 'movie-category',
          element: <Movieslayout/>,
          children: [
            {
              index: true,
              element: <MovieCategoryPage/>
            },
            {
              path: 'now_playing',
              element: <MoviesPage/>,
            },
            {
              path: 'popular',
              element: <MoviesPage/>,
            },
            {
              path: 'top_rated',
              element: <MoviesPage/>,
            },
            {
              path: 'upcoming',
              element: <MoviesPage/>,
            }
          ]
        }, 
        {
          path: '*',
          element: <NotFound/>
        }, 
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App