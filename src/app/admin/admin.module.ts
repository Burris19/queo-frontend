import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTING_ADMIN } from './admin.routers';
import { EmpresasComponent } from './empresas/empresas.component';

// import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
    declarations: [
    EmpresasComponent],
    imports: [
        CommonModule,
        ROUTING_ADMIN,
        // NgxPaginationModule,
    ]
})

export class AdminModule { }