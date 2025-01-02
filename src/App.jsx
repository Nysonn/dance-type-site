import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './pages/Root';
import Homepage from './pages/Homepage';
import ErrorPage from './pages/Error';
import MerchPage from './pages/Merch';
import MusicPage from './pages/Music';
import TourPage from './pages/Tour';
import ContactPage from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'music', element: <MusicPage /> },
      { path: 'tour', element: <TourPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'merch', element: <MerchPage /> },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}