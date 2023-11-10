import { Routes } from '@angular/router';
import { DefaultRouteComponent } from './base/default-route/default-route.component';

export const routes: Routes = [
    {
        path: 'catalog',
        component: DefaultRouteComponent
    },
    {
        path: 'proposals',
        component: DefaultRouteComponent
    },
    {
        path: 'people',
        component: DefaultRouteComponent
    },
    {
        path: 'payments',
        component: DefaultRouteComponent
    },
    {
        path: 'more',
        component: DefaultRouteComponent
    },

];
