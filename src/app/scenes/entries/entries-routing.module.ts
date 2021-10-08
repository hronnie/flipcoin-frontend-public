import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EntriesComponent} from "./entries.component";
import {EntriesDetailComponent} from "./entries-details/entries-detail/entries-detail.component";

const routes: Routes = [
    {
        path: '',
        component: EntriesComponent,
        data: {
            title: 'Entries',
        },
    },
    {
        path: 'details/:entryId',
        component: EntriesDetailComponent,
        data: {
            title: 'Entry detail',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EntriesRoutingModule {
}
