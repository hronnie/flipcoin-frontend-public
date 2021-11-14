import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StrategiesFormComponent} from './strategies-form.component';

describe('StrategiesFormComponent', () => {
    let component: StrategiesFormComponent;
    let fixture: ComponentFixture<StrategiesFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StrategiesFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StrategiesFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
