import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import NotFound from './pages/Page404';
import Landing from './pages/Landing';
import Checks from './pages/Checks';
import Studies from './pages/Studies';
import Vaccines from './pages/Vaccines';
import CheckResult from './pages/CheckResult';
import Profile from './pages/Profile';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/main',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/main/dashboard" replace /> },
        { path: 'dashboard', element: <DashboardApp /> },
        { path: 'controles/:id', element: <Checks /> },
        { path: 'estudios/:id', element: <Studies /> },
        { path: 'vacunas/:id', element: <Vaccines /> },
        { path: 'controles/resultado/:id', element: <CheckResult /> },
        { path: 'perfil', element: <Profile /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Landing/> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
