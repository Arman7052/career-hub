import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Statistics from './Statistics'
import AppliedJobs from './AppliedJobs'
import Blog from './Blog'

const router = createBrowserRouter([

{
  path:'/',
  element: <App></App>,
  children: [

    {
      path:'/App',
      element: <Home></Home>
    },
    {
      path: '/Statistics',
      element: <Statistics></Statistics>
    },
    {
      path: '/AppliedJobs',
      element: <AppliedJobs></AppliedJobs>
    },
    {
      path: '/Blog',
      element: <Blog></Blog>
    },

  ]
}


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
