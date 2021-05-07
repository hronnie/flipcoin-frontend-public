import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MDBBootstrapModulesPro, MDBSpinningPreloader} from 'ng-uikit-pro-standard';
import {Store} from '../store';
import {AuthModule} from './core/auth/auth.module';
import {AuthContainerComponent} from './common/layout/auth-container/auth-container.component';
import {MainContainerComponent} from './common/layout/main-container/main-container.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
};


const APP_CONTAINERS = [
    DefaultLayoutComponent,
    DefaultHeaderComponent,
    DefaultHeaderDropdownAccountComponent,
    DefaultAsideComponent,
];

import {
    AlertModule,
    BadgeModule,
    ButtonModule,
    BreadcrumbModule,
    CardModule,
    CalloutModule,
    ChartModule,
    CollapseModule,
    DropdownModule,
    FormModule,
    GridModule,
    LayoutModule,
    ListGroupModule,
    ProgressModule,
    SharedModule,
    SidebarModule,
    SwitchModule,
    TabsetModule,
    TogglerModule,
} from '@coreui/angular';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

// 3rd party
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {DefaultLayoutComponent} from "./common/layout/containers/default-layout/default-layout.component";
import {DefaultHeaderComponent} from "./common/layout/containers/default-layout/default-header/default-header.component";
import {DefaultHeaderDropdownAccountComponent} from "./common/layout/containers/default-layout/default-header-dropdown/default-header-dropdown-account.component";
import {DefaultAsideComponent} from "./common/layout/containers/default-layout/default-aside/default-aside.component";
import {P404Component} from "./scenes/error/404.component";
import {P500Component} from "./scenes/error/500.component";



@NgModule({
    declarations: [
        AppComponent,
        AuthContainerComponent,
        MainContainerComponent,
        ...APP_CONTAINERS,
        P404Component,
        P500Component,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModulesPro.forRoot(),
        AuthModule,
        BrowserAnimationsModule,
        AlertModule,
        BadgeModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ButtonModule,
        BreadcrumbModule,
        CardModule,
        CalloutModule,
        ChartModule,
        CollapseModule,
        DropdownModule,
        GridModule,
        IconModule,
        IconSetModule.forRoot(),
        SharedModule,
        LayoutModule,
        ListGroupModule,
        ProgressModule,
        SidebarModule,
        SwitchModule,
        TabsetModule,
        TogglerModule,
        PerfectScrollbarModule,
        BsDropdownModule.forRoot(),
        // ToastrModule.forRoot(),
        // ToastContainerModule,
        FormModule,
    ],
    exports: [SharedModule],
    providers: [
        MDBSpinningPreloader,
        Store,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
        IconSetService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
