import {Component, OnInit} from '@angular/core';
import {EntryService} from "../../../../common/service/entry.service";
import {EntryOrders} from "../../../../model/entry/entryOrders.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-entries-detail',
    templateUrl: './entries-detail.component.html',
    styleUrls: ['./entries-detail.component.scss']
})
export class EntriesDetailComponent implements OnInit {


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
        this.entryOrders = this.entryService.getEntryOrders(this.entryId);
    }

}
