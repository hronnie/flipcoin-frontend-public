import {Component, NgZone} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../shared/services/auth/auth.service';
import {UserProfileService} from '../shared/services/auth/userProfile.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    error: string;

    loginForm = this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', Validators.required],
    });

    constructor(private authService: AuthService,
                private userProfileService: UserProfileService,
                private router: Router,
                private ngZone: NgZone,
                private fb: FormBuilder) {
    }

    get passwordInput() {
        return this.loginForm.get('password');
    }

    get emailInput() {
        return this.loginForm.get('email');
    }

    get controls() {
        return this.loginForm.controls;
    }

    get emailFormatInvalid() {
        const control = this.loginForm.get('email');
        return control.invalid && (control.dirty || control.touched);
    }

    get emailFormatValid() {
        const control = this.loginForm.get('email');
        return control.valid && (control.dirty || control.touched);
    }

    async loginUserWithPasswordAndEmail(event: FormGroup): Promise<any> {
        const {email, password} = this.loginForm.value;
        try {
            await this.authService.loginUserWithPasswordAndEmail(email, password);
            this.router.navigate(['/']);
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password': {
                    this.error = 'Sikertelen bejelentkezés: Helytelen jelszó';
                    break;
                }
                case 'auth/user-not-found': {
                    this.error = 'Sikertelen bejelentkezés: Ez az email nincs regisztrálva.';
                    break;
                }
                case 'auth/account-exists-with-different-credential': {
                    this.error = 'Sikertelen bejelentkezés: Ezt az email cím egy Facebook-os vagy egy Google-ös bejelentkezést már használja. Kérlek használd azt.';
                    break;
                }
                case 'auth/invalid-credential': {
                    this.error = 'Sikertelen bejelentkezés: Ez a felhasználói fiók le van tiltva.';
                    break;
                }
                case 'auth/operation-not-allowed': {
                    this.error = 'Sikertelen bejelentkezés: Ez a felhasználói fiók nem engedélyezettt.';
                    break;
                }
                case 'auth/invalid-verification-code': {
                    this.error = 'Sikertelen bejelentkezés: A telefonos kód nem megfelelő.';
                    break;
                }
                case 'auth/invalid-verification-id': {
                    this.error = 'Sikertelen bejelentkezés: A telefonos kód nem megfelelő.';
                    break;
                }
                default: {
                    this.error = 'Sikertelen bejelentkezés: ismeretlen okból.';
                    break;
                }
            }
        }
    }


}
