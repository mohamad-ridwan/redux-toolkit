import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './app.scss'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import IsLoggedIn from './pages/IsLoggedIn/IsLoggedIn'
import Login from './pages/Login/Login'
import User from './pages/User/User'

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <IsLoggedIn/>
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/user',
        element: <User />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
