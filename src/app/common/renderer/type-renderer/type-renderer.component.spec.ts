import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TypeRendererComponent} from './type-renderer.component';

describe('TypeRendererComponent', () => {
    let component: TypeRendererComponent;
    let fixture: ComponentFixture<TypeRendererComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TypeRendererComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypeRendererComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
