import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Projects from './pages/projects/Projects';

const App = () => {
  const Layout = () => {
    return(
      <div className='layout'>
        <div>
          <Nav/>
          <Outlet/>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/about',
          element: <About/>
        },
        {
          path:'/blog',
          element: <Blog/>
        },
        {
          path:'/projects',
          element: <Projects/>
        },
        {
          path:'/pictures',
          element: <Projects/>
        },
        {
          path:'*',
          element: <Navigate to="/"/>
        }
      ]
    }
  ]);


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App