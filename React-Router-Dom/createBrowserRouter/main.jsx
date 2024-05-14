import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import './index.css';
import Root from './pages/root.jsx';
const routes=[
  {
    index:"true",
    element:<Root />,
    children:[ 
      {
        path:"/home",
        element : <Home />,
      },
      {
        path:"/blog",
        element : <Blog />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
   ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
