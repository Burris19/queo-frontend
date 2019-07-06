import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';

const app_routes: Routes = [
    {
        path: '',
        component: EmpresasComponent
    },
];

export const ROUTING_ADMIN = RouterModule.forChild(app_routes);