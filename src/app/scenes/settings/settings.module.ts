import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsComponent} from './settings.component';
import {SettingsRoutingModule} from "./settings-routing.module";
import {FormsModule} from "@angular/forms";
import {DashboardRoutingModule} from "../dashboard/dashboard-routing.module";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {ButtonsModule} from "ngx-bootstrap/buttons";
import {
    ButtonModule,
    CalloutModule,
    CardModule,
    ChartModule,
    DropdownModule,
    GridModule,
    ProgressModule,
    SharedModule
} from "@coreui/angular";
import {IconModule} from "@coreui/icons-angular";


@NgModule({
    declarations: [SettingsComponent],
    imports: [
        CommonModule,
        SettingsRoutingModule,
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
    ]
})
export class SettingsModule {
}
