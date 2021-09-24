import {Component, OnInit} from '@angular/core';
import {EntryService} from "../../../../common/service/entry.service";
import {EntryOrders} from "../../../../model/entry/entryOrders.model";
import {ActivatedRoute} from "@angular/router";
import {FuturesRespPositionModel} from "../../../../model/response/positionResp.model";
import {Entry} from "../../../../model/entry/entry.model";
import {SIDE} from "../../../../model/binance/binance.enums";
import {PricePipe} from "../../../../pipes/price.pipe";
import {isPositionEmpty} from "../../../../utils/helperMethods";

@Component({
    selector: 'app-entries-detail',
    templateUrl: './entries-detail.component.html',
    styleUrls: ['./entries-detail.component.scss']
})
export class EntriesDetailComponent implements OnInit {

    position: FuturesRespPositionModel;
    entryOrders: EntryOrders;
    entryId: string;
    entry: Entry;
    sideColor = '';
    isPositionEmpty = true;

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
        });

        this.entryService.getEntryPosition(this.entryId).subscribe(position => {
            this.position = position;
            this.isPositionEmpty = isPositionEmpty(this.position);
        });

        this.entryService.getEntry(this.entryId).subscribe(entry => {
            this.entry = entry;
            this.sideColor = this.entry.side === SIDE.SELL ? 'danger' : 'success';
        });
    }

    getPositionSize() {
        return parseFloat(this.position?.isolatedMargin) * this.position?.leverage;
    }

    getRoe() {
        return (this.position?.unRealizedProfit / parseFloat(this.position?.isolatedMargin));
    }
}
