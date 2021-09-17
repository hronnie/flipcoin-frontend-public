import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DurationRendererComponent} from './duration-renderer.component';

describe('DurationRendererComponent', () => {
    let component: DurationRendererComponent;
    let fixture: ComponentFixture<DurationRendererComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DurationRendererComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DurationRendererComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
