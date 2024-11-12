import HomePage from "./pages/homePage.jsx";
import NotFound from "./pages/not-found.jsx";
import LoginPage from "./pages/sign/loginPage.jsx";
import SignUpPage from "./pages/sign/signupPage.jsx";
import SearchPage from "./pages/searchPage.jsx";
import MovieCategoryPage from "./pages/movie/movieCategoryPage.jsx";
import MoviesPage from "./pages/movie/moviesPage.jsx";
import MoviePage from "./pages/movie/moviePage.jsx";

import RootLayout from "./layout/root-layout.jsx"
import Movieslayout from "./layout/movies-layout.jsx";

import './App.css';
import './font.css';

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
              path: ':category',
              element: <MoviesPage/>,
            },
          ]
        }, 
        {
          path: 'moviePage/:movieId',
          element: <MoviePage/>
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