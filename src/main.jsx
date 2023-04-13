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
import FirstPage from './FirstPage'
import ShowJobs from './Component/FeaturedJobs/ShowJobs'


const router = createBrowserRouter([

{
  path:'/',
  element: <Home></Home>,
  children: [

    {
      path:'/',
      element: <FirstPage></FirstPage>,
      
    },
    {
      path:'/ShowJobs',
      element: <ShowJobs></ShowJobs>,
     
      
    },
    {
      path:'/jobs/:jobid',
      element: <JobDetails></JobDetails>,
      
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
