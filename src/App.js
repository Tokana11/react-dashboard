import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import * as React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import ResponsiveAppBar from './components/AppBar';
import MiniDrawer from './components/MiniDrawer';
import BreathingAparatusPage from './pages/BreathingAparatusPage';
import Dashboard from './pages/Dashboard';
import EmployeesPage from './pages/EmployeesPage';
import EquipmentPage from './pages/EquipmentPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import Test from './pages/Test';
import TruckPage from './pages/TruckPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3581b8',
    },
    secondary: {
      main: '#e8e9eb',
    },
    error: {
      main: '#ef6461',

    },
    warning: {
      main: '#e4b363',
    },
    info: {
      main: '#027d8a',
    },
    success: {
      main: '#2ba84a',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const Layout = props => (
  <>
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <MiniDrawer />
        <Box sx={{ width: '100%' }}>
          <ResponsiveAppBar />
          <Box component="main" sx={{ width: '100%', height: '100%', p: 1, bgcolor: '#E7EFF1' }}>
            {props.children}
          </Box>
        </Box>
      </Box>
    </div>
  </>
)

const routes = [
  {
    path: '/',
    element: <Layout>
      <Dashboard />
    </Layout>
  },
  {
    path: '/profile',
    element: <Layout>
      <ProfilePage />
    </Layout>
  },
  {
    path: '/settings',
    element: <Layout>
      <SettingsPage />
    </Layout>
  },
  {
    path: '/employees',
    element: <Layout>
      <EmployeesPage />
    </Layout>
  },
  {
    path: '/trucks',
    element: <Layout>
      <TruckPage />
    </Layout>
  },
  {
    path: '/breathing-apparatus',
    element: <Layout>
      <BreathingAparatusPage />
    </Layout>
  },
  {
    path: '/equipment',
    element: <Layout>
      <EquipmentPage />
    </Layout>
  },
  {
    path: '/test',
    element: <Layout>
      <Test />
    </Layout>
  }
]

const getRoutes = () => {
  return routes.map((route, index) => {
    return <Route
      exact={route.exact}
      key={index}
      path={route.path}
      element={route.element}
    >
    </Route>
  })
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {getRoutes()}
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
