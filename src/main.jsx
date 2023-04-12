import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom'
import Home from './Home'
import Statistics from './Statistics'
import AppliedJobs from './AppliedJobs'
import Blog from './Blog'
import JobDetails from './Component/JobDeatails/JobDetails'


const router = createBrowserRouter([

{
  path:'/',
  element: <App></App>,
  children: [

    {
      path:'/',
      element: <Home></Home>,
      loader: () => fetch('/featured-jobs.json')
      
    },
    {
      path:'/job/:id',
      element: <JobDetails></JobDetails>,
      loader: ({params}) => fetch(`/featured-jobs.json/${params.id}`)
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
