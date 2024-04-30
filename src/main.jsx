import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewPost from './components/NewPost/NewPost.jsx'

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/create-post', element: <NewPost /> },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider />
    </React.StrictMode>
)