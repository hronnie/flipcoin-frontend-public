import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {YesNoRendererComponent} from './yes-no-renderer.component';

describe('YesNoRendererComponent', () => {
    let component: YesNoRendererComponent;
    let fixture: ComponentFixture<YesNoRendererComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [YesNoRendererComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(YesNoRendererComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
