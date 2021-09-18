import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeesRendererComponent} from './fees-renderer.component';

describe('FeesRendererComponent', () => {
    let component: FeesRendererComponent;
    let fixture: ComponentFixture<FeesRendererComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FeesRendererComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FeesRendererComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
