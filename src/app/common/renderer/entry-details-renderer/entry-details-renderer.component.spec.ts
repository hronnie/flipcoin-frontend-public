import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EntryDetailsRendererComponent} from './entry-details-renderer.component';

describe('EntryDetailsRendererComponent', () => {
    let component: EntryDetailsRendererComponent;
    let fixture: ComponentFixture<EntryDetailsRendererComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EntryDetailsRendererComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EntryDetailsRendererComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
