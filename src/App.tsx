import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

import { makeStyles } from '@mui/styles';

interface RouteType {
  path: string;
  element: JSX.Element;
}

const App = () => {
  const routes: RouteType[] = [
    {
      path: '/',
      element: <Home />
    },
  ];

  return (
    <div className="App">
      <RouterProvider router={createBrowserRouter(routes)} />
    </div>
  );
}

export default App;
