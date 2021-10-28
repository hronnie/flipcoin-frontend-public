import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';


import {
    ButtonModule,
    CalloutModule,
    CardModule,
    ChartModule,
    DropdownModule, FormModule,
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
        FormModule,
    ],
    declarations: [
        StrategiesComponent,
        StrategiesFormComponent],
    providers: [
        PricePipe
    ]
})
export class StrategiesModule {
}
