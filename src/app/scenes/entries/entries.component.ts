import {Component, OnInit} from '@angular/core';
import {EntryService} from "../../common/service/entry.service";

@Component({
    selector: 'app-entries',
    templateUrl: './entries.component.html',
    styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
    columnDefs = [
        {field: 'make'},
        {field: 'model'},
        {field: 'price'}
    ];

    rowData = [
        {make: 'Toyota', model: 'Celica', price: 35000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Porsche', model: 'Boxter', price: 72000}
    ];


    constructor(private entryService: EntryService) {
    }

    ngOnInit(): void {
        this.entryService.getAllEntries();
    }

}
