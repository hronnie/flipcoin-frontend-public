import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExchangeRendererComponent} from './exchange-renderer.component';

describe('ExchangeRendererComponent', () => {
    let component: ExchangeRendererComponent;
    let fixture: ComponentFixture<ExchangeRendererComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExchangeRendererComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExchangeRendererComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
