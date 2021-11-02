import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StrategyActionsRendererComponent} from './strategy-actions-renderer.component';

describe('StrategyActionsRendererComponent', () => {
    let component: StrategyActionsRendererComponent;
    let fixture: ComponentFixture<StrategyActionsRendererComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StrategyActionsRendererComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StrategyActionsRendererComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
