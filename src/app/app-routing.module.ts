import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/auth/shared/guards/auth.guard';
import {MainContainerComponent} from './common/layout/main-container/main-container.component';
import {AuthContainerComponent} from './common/layout/auth-container/auth-container.component';
import {DefaultLayoutComponent} from "./common/layout/containers/default-layout/default-layout.component";
import {P404Component} from "./scenes/error/404.component";
import {P500Component} from "./scenes/error/500.component";

const routes: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        data: {
            title: 'Home',
        },
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: '404',
                component: P404Component,
                data: {
                    title: 'Page 404',
                },
            },
            {
                path: '500',
                component: P500Component,
                data: {
                    title: 'Page 500',
                },
            },
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./scenes/dashboard/dashboard.module').then(
                        (m) => m.DashboardModule,
                    ), canActivate: [AuthGuard]
            },
            {
                path: 'settings',
                loadChildren: () =>
                    import('./scenes/settings/settings.module').then(
                        (m) => m.SettingsModule,
                    ), canActivate: [AuthGuard]
            },
        ],
    },
    {
        path: 'login',
        component: AuthContainerComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./core/auth/login/login.module')
                    .then(module => module.LoginModule)
            }
        ]
    },
    {path: '**', redirectTo: '/404'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
