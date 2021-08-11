import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';


import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from './shared/shared.module';
import {firebaseConfig} from '../../config/firebaseConfig';
import {AngularFireFunctionsModule} from "@angular/fire/functions";


@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireFunctionsModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule {
}
