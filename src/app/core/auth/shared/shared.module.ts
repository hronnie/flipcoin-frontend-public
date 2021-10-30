import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {AuthFormComponent} from './components/auth-form/auth-form.component';
import {AuthGuard} from './guards/auth.guard';
import {AuthService} from './services/auth/auth.service';
import {UserProfileService} from './services/auth/userProfile.service';
import {PricePipe} from "../../../pipes/price.pipe";
import {PercentPipe} from "../../../pipes/percent.pipe";
import {NgxMaskModule} from "ngx-mask";

@NgModule({
    declarations: [
        AuthFormComponent,
        PricePipe,
        PercentPipe
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot()
    ],
    exports: [
        AuthFormComponent,
        PricePipe,
        PercentPipe
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: SharedModule,
            providers: [
                AuthService,
                AuthGuard,
                UserProfileService
            ]
        };
    }
}
