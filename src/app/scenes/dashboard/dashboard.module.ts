import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
// import { ChartsModule } from 'ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';

import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';

import {
    ButtonModule,
    CalloutModule,
    CardModule,
    ChartModule,
    DropdownModule,
    GridModule,
    ProgressModule,
    SharedModule,
} from '@coreui/angular';

import {IconModule} from '@coreui/icons-angular';
import {AgGridModule} from "ag-grid-angular";
import {AgChartsAngularModule} from "ag-charts-angular";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        FormsModule,
        DashboardRoutingModule,
        // ChartsModule,
        BsDropdownModule,
        ButtonsModule.forRoot(),
        CalloutModule,
        CardModule,
        GridModule,
        IconModule,
        ProgressModule,
        ButtonModule,
        DropdownModule,
        ChartModule,
        SharedModule,
        AgGridModule,
        AgChartsAngularModule,
        CommonModule,
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule {
}
