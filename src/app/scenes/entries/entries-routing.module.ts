import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EntriesComponent} from "./entries.component";

const routes: Routes = [
    {
        path: '',
        component: EntriesComponent,
        data: {
            title: 'Entries',
        },
    },
    {
        path: 'details',
        component: EntriesComponent,
        data: {
            title: 'Entries',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EntriesRoutingModule {
}
