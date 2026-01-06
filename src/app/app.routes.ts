import { Routes } from '@angular/router';
import { Overview } from './overview/overview';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: 'overview',
        component: Overview
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: '',
        redirectTo: '/overview',
        pathMatch: 'full'
    }
];
