import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../Pages/HomePages/HomePage';
import App from '../Pages/Apps/App';
import Installation from '../Pages/Installation/Installation';
import ErrorElement from '../ErrorElement/ErrorElement';
import AppsDetails from '../Pages/AppsDetails/AppsDetails';

const router = createBrowserRouter(
    [{
        path: "/",
        Component: MainLayout,
        children: [
            { index: true, Component: HomePage },
            { path: '/app', Component: App },
            { path: '/install', Component: Installation },
            {
                path: '/appdetail/:id',
                Component: AppsDetails,
                loader: () => fetch('/data.json')
            }

        ],
        errorElement: <ErrorElement></ErrorElement>
    }]
);

export default router;