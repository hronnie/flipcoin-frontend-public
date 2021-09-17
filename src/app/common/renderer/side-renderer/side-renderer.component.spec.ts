import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SideRendererComponent} from './side-renderer.component';

describe('SideRendererComponent', () => {
    let component: SideRendererComponent;
    let fixture: ComponentFixture<SideRendererComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SideRendererComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideRendererComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
