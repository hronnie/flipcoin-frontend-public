import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {ButtonsModule, CardsModule, CheckboxModule, IconsModule, InputsModule, InputUtilitiesModule} from 'ng-uikit-pro-standard';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        CardsModule,
        CheckboxModule,
        InputsModule,
        InputUtilitiesModule,
        IconsModule,
        ButtonsModule
    ]
})
export class LoginModule {
}
