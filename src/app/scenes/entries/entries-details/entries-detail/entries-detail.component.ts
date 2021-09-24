import {Component, OnInit} from '@angular/core';
import {EntryService} from "../../../../common/service/entry.service";
import {EntryOrders} from "../../../../model/entry/entryOrders.model";
import {ActivatedRoute} from "@angular/router";
import {FuturesRespPositionModel} from "../../../../model/response/positionResp.model";

@Component({
    selector: 'app-entries-detail',
    templateUrl: './entries-detail.component.html',
    styleUrls: ['./entries-detail.component.scss']
})
export class EntriesDetailComponent implements OnInit {

    position: FuturesRespPositionModel;
    entryOrders: EntryOrders;
    entryId: string;

    constructor(private entryService: EntryService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params) => {
                this.entryId = params.entryId;
            });
        this.entryService.getEntryOrders(this.entryId).subscribe(entryOrders => {
            this.entryOrders = entryOrders;
            console.log(this.entryOrders);
        });

        this.entryService.getEntryPosition(this.entryId).subscribe(position => {
            this.position = position;
            console.log(this.position);
        });

    }

}
