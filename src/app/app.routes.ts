import { Routes } from '@angular/router';
import { DefaultRouteComponent } from './base/default-route/default-route.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { ProposalsPageComponent } from './pages/proposals-page/proposals-page.component';
import { PeoplePageComponent } from './pages/people-page/people-page.component';
import { PaymentsPageComponent } from './pages/payments-page/payments-page.component';

export const routes: Routes = [
    {
        path: 'catalog',
        component: CatalogPageComponent
    },
    {
        path: 'proposals',
        component: ProposalsPageComponent
    },
    {
        path: 'people',
        component: PeoplePageComponent
    },
    {
        path: 'payments',
        component: PaymentsPageComponent
    },
    {
        path: 'more',
        component: DefaultRouteComponent
    },

];
