import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-auth-form',
    styleUrls: ['./auth-form.component.scss'],
    templateUrl: './auth-form.component.html'
})
export class AuthFormComponent {

    @Output() submitted = new EventEmitter<FormGroup>();

    form = this.fb.group({
        email: ['', Validators.email],
        password: ['', Validators.required]
    });

    constructor(private fb: FormBuilder) {
    }

    get passwordInvalid() {
        const control = this.form.get('password');
        return control.hasError('required') && control.touched;
    }

    get emailFormat() {
        const control = this.form.get('email');
        return control.hasError('email') && control.touched;
    }

    onSubmit() {
        if (this.form.valid) {
            this.submitted.emit(this.form);
        }
    }

}
