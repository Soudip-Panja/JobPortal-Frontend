import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from './App.jsx'
import JobPost from './pages/JobPost.jsx';
import JobDetails from './pages/jobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/jobPost",
    element: <JobPost />
  },
  {
    path: "/:jobId",
    element: <JobDetails />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
