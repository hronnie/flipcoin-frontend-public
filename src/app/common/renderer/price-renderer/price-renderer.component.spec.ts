import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PriceRendererComponent} from './price-renderer.component';

describe('PriceRendererComponent', () => {
    let component: PriceRendererComponent;
    let fixture: ComponentFixture<PriceRendererComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PriceRendererComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PriceRendererComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
