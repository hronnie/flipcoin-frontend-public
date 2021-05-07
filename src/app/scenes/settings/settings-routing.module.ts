import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SettingsComponent} from "./settings.component";

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        data: {
            title: 'Dashboard',
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SettingsRoutingModule {
}
