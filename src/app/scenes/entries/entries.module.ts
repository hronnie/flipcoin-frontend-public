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
    GridModule, ModalModule,
    ProgressModule, SwitchModule,
} from '@coreui/angular';

import {IconModule} from '@coreui/icons-angular';
import {AgGridModule} from "ag-grid-angular";
import {EntriesRoutingModule} from "./entries-routing.module";
import {EntriesComponent} from "./entries.component";
import {CommonModule} from "@angular/common";
import { EntriesDetailComponent } from './entries-details/entries-detail/entries-detail.component';
import {PricePipe} from "../../pipes/price.pipe";
import {SharedModule} from "../../core/auth/shared/shared.module";

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
        SwitchModule,
        ModalModule,
    ],
    declarations: [
        EntriesComponent,
        EntriesDetailComponent
    ],
    providers: [
        PricePipe
    ]
})
export class EntriesModule {
}
