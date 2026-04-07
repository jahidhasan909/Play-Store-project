import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../Pages/HomePages/HomePage';
import App from '../Pages/Apps/App';
import Installation from '../Pages/Installation/Installation';

const router = createBrowserRouter(
    [{
        path: "/",
        Component: MainLayout,
        children: [
            { index: true, Component: HomePage },
            { path: '/app', Component: App },
            { path: '/install', Component: Installation }

        ]

    }]
);

export default router;