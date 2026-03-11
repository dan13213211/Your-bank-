import { createBrowserRouter } from 'react-router-dom';
import MainLayout from "../layout/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import CareersPage from "../pages/CareersPage.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import SecurityPage from "../pages/SecurityPage.tsx";
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'careers',
        element: <CareersPage/>
      },
      {
        path: 'about',
        element: <AboutPage/>
      },
      {
        path: 'security',
        element: <SecurityPage/>
      }
    ]
  }
])