import {Component, OnInit} from '@angular/core';
import {EntryService} from "../../../../common/service/entry.service";
import {EntryOrders} from "../../../../model/entry/entryOrders.model";
import {ActivatedRoute} from "@angular/router";
import {FuturesRespPositionModel} from "../../../../model/response/positionResp.model";
import {Entry} from "../../../../model/entry/entry.model";
import {SIDE} from "../../../../model/binance/binance.enums";
import {isPositionEmpty, toHumanReadableFormat} from "../../../../utils/helperMethods";
import * as moment from "moment";

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
    isLoading = false;

    constructor(private entryService: EntryService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params) => {
                this.entryId = params.entryId;
            });
        this.refreshPage();
    }

    private refreshPage() {
        this.isLoading = true;
        this.entryService.getEntry(this.entryId).subscribe(entry => {
            this.entry = entry;
            this.entryService.getEntryOrders(this.entryId, entry.exchange).subscribe(entryOrders => {
                this.entryOrders = entryOrders;
            });

            this.entryService.getEntryPosition(this.entryId, entry.exchange).subscribe(position => {
                this.position = position;
                this.isPositionEmpty = isPositionEmpty(this.position);
                this.isLoading = false;
            });
            this.sideColor = this.entry.side === SIDE.SELL ? 'danger' : 'success';
        });
    }

    getPositionSize() {
        return parseFloat(this.position?.isolatedMargin) * this.position?.leverage;
    }

    getRoe() {
        return (this.position?.unRealizedProfit / parseFloat(this.position?.isolatedMargin));
    }

    calculateDuration(): string {
        const startDate = moment(this.entry?.startDate);
        const endDate = moment(this.entry?.endDate);
        const duration = moment.duration(startDate.diff(endDate));
        return duration.humanize();
    }

    getDollarValue(value: number) {
        return `${toHumanReadableFormat(value)}$`
    }

    getDollarValueStr(value: string) {
        const numberValue = parseFloat(value);
        return `${toHumanReadableFormat(numberValue)}$`
    }

    closeEntry() {
        this.isLoading = true;
        this.entryService.closePosition(this.entry.id, this.entry.exchange).subscribe(result => {
            debugger;
            this.refreshPage();
        })
    }
}
