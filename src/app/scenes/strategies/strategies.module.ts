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
    ModalModule,
    ProgressModule,
    SwitchModule,
} from '@coreui/angular';

import {IconModule} from '@coreui/icons-angular';
import {AgGridModule} from "ag-grid-angular";
import {CommonModule} from "@angular/common";
import {PricePipe} from "../../pipes/price.pipe";
import {SharedModule} from "../../core/auth/shared/shared.module";
import {StrategiesRoutingModule} from "./strategies-routing.module";
import {StrategiesDetailsComponent} from './strategies-details/strategies-details.component';
import {StrategiesFormComponent} from './strategies-form/strategies-form.component';
import {StrategiesComponent} from "./strategies.component";

@NgModule({
    imports: [
        StrategiesRoutingModule,
        FormsModule,
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
        StrategiesComponent,
        StrategiesDetailsComponent,
        StrategiesFormComponent],
    providers: [
        PricePipe
    ]
})
export class StrategiesModule {
}
