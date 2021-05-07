import {User} from '@firebase/auth-types';
import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Store} from "../../../../../../store";
import {AuthService} from "../../../../../core/auth/shared/services/auth/auth.service";
// import {AuthService} from '../../../core/auth/shared/services/auth/auth.service';
// import {Store} from '../../../../store';

@Component({
    selector: 'app-default-header-dropdown-account',
    templateUrl: './default-header-dropdown-account.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultHeaderDropdownAccountComponent implements OnInit, OnDestroy {

    user$: Observable<User>;
    destroy$: Subject<boolean> = new Subject();

    constructor(private store: Store,
                private router: Router,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        this.authService.auth$
            .pipe(
                takeUntil(this.destroy$)
            )
            .subscribe();

        this.user$ = this.store.select<User>('user');
    }

    async onLogout() {
        await this.authService.logoutUser();
        this.router.navigate(['/login']);
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    goToProfile() {
        this.router.navigate(['/profile']);
    }

    goToLogin() {
        this.router.navigate(['/login']);
    }
}
