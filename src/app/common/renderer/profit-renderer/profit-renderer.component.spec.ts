import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfitRendererComponent} from './profit-renderer.component';

describe('ProfitRendererComponent', () => {
    let component: ProfitRendererComponent;
    let fixture: ComponentFixture<ProfitRendererComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfitRendererComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfitRendererComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
