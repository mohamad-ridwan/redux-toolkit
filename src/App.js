import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import EditProfile from './pages/EditProfile/EditProfile';
import { profileStore } from './reduxToolkit/profileStore';
import { Provider } from 'react-redux'
import './app.scss'

function Layout() {
  return (
    <div className='app'>
      <Navbar />
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
        element: <Dashboard />
      },
      {
        path: '/edit-profile',
        element: <EditProfile />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <Provider store={profileStore}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
