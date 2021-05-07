import {User} from '@firebase/auth-types';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Store} from '../../../../store';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/auth/shared/services/auth/auth.service';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-main-container',
    templateUrl: './main-container.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit, OnDestroy {

    user$: Observable<User>;
    destroy$: Subject<boolean> = new Subject();
    // @Output() logout = new EventEmitter();

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
        this.router.navigate(['/auth/login']);
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
