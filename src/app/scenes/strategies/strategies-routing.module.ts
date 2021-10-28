import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {StrategiesComponent} from "./strategies.component";
import {StrategiesFormComponent} from "./strategies-form/strategies-form.component";

const routes: Routes = [
    {
        path: '',
        component: StrategiesComponent,
        data: {
            title: 'Strategies',
        },
    },
    {
        path: 'edit/:strategyId',
        component: StrategiesFormComponent,
        data: {
            title: 'Strategy edit',
        },
    },
    {
        path: 'create',
        component: StrategiesFormComponent,
        data: {
            title: 'Strategy create',
        },
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StrategiesRoutingModule {
}
