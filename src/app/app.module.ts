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
import {AuthTokenHttpInterceptorProvider} from "./core/http-interceptors/auth-token.interceptor";
import {HttpClientModule} from "@angular/common/http";
import {AgGridModule} from "ag-grid-angular";
import { ExchangeRendererComponent } from './common/renderer/exchange-renderer/exchange-renderer.component';
import { YesNoRendererComponent } from './common/renderer/yes-no-renderer/yes-no-renderer.component';
import { SideRendererComponent } from './common/renderer/side-renderer/side-renderer.component';
import { DateRendererComponent } from './common/renderer/date-renderer/date-renderer.component';
import { PriceRendererComponent } from './common/renderer/price-renderer/price-renderer.component';
import {FullLocalDatePipe} from "./pipes/full-local-date.pipe";
import {OnlyDatePipe} from "./pipes/only-date.pipe";
import {PricePipe} from "./pipes/price.pipe";
import { DurationRendererComponent } from './common/renderer/duration-renderer/duration-renderer.component';
import { ProfitRendererComponent } from './common/renderer/profit-renderer/profit-renderer.component';
import { FeesRendererComponent } from './common/renderer/fees-renderer/fees-renderer.component';
import {AgChartsAngularModule} from "ag-charts-angular";


@NgModule({
    declarations: [
        AppComponent,
        AuthContainerComponent,
        MainContainerComponent,
        ...APP_CONTAINERS,
        P404Component,
        P500Component,
        ExchangeRendererComponent,
        YesNoRendererComponent,
        SideRendererComponent,
        DateRendererComponent,
        PriceRendererComponent,
        FullLocalDatePipe,
        PricePipe,
        DurationRendererComponent,
        ProfitRendererComponent,
        FeesRendererComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MDBBootstrapModulesPro.forRoot(),
        AuthModule,
        BrowserAnimationsModule,
        AlertModule,
        BadgeModule,
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
        AgGridModule.withComponents([]),
        AgChartsAngularModule
    ],
    exports: [SharedModule],
    providers: [
        MDBSpinningPreloader,
        Store,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
        IconSetService,
        AuthTokenHttpInterceptorProvider,
        FullLocalDatePipe,
        OnlyDatePipe,
        PricePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
