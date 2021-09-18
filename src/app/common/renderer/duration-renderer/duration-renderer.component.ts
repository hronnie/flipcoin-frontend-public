import {Component} from '@angular/core';
import {ICellRendererParams} from "ag-grid-community";
import * as moment from 'moment';

@Component({
    selector: 'app-duration-renderer',
    templateUrl: './duration-renderer.component.html',
    styleUrls: ['./duration-renderer.component.scss']
})
export class DurationRendererComponent {

    params: ICellRendererParams;
    duration: moment.Duration;
    isValid: boolean;

    agInit(params: ICellRendererParams): void {
        this.params = params;
        const startDate = moment(this.params?.data?.startDate);
        const endDate = moment(this.params?.data?.endDate);
        this.isValid = endDate.isValid();
        this.duration = moment.duration(startDate.diff(endDate));
    }

}
