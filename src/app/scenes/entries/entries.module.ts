import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
// import { ChartsModule } from 'ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';


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
import {EntriesRoutingModule} from "./entries-routing.module";
import {EntriesComponent} from "./entries.component";
import {CommonModule} from "@angular/common";
import { EntriesDetailComponent } from './entries-details/entries-detail/entries-detail.component';

@NgModule({
    imports: [
        FormsModule,
        EntriesRoutingModule,
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
        CommonModule,
    ],
    declarations: [
        EntriesComponent,
        EntriesDetailComponent
    ]
})
export class EntriesModule {
}
