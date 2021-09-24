import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EntriesDetailComponent} from './entries-detail.component';

describe('EntriesDetailComponent', () => {
    let component: EntriesDetailComponent;
    let fixture: ComponentFixture<EntriesDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EntriesDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EntriesDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
