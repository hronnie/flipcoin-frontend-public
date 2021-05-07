import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AuthService, User} from './core/auth/shared/services/auth/auth.service';
import {Store} from '../store';
import { IconSetService } from '@coreui/icons-angular';
import { brandSet, flagSet, freeSet } from '@coreui/icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [IconSetService]
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'More coin Bot';

    user$: Observable<User>;
    destroy$: Subject<boolean> = new Subject();

    constructor(private store: Store,
                private router: Router,
                private authService: AuthService,
                public iconSet: IconSetService) {
        // iconSet singleton
        iconSet.icons = { ...freeSet, ...brandSet, ...flagSet };
    }

    ngOnInit(): void {
        this.authService.auth$
            .pipe(
                takeUntil(this.destroy$)
            )
            .subscribe();

        this.user$ = this.store.select<User>('user');
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    // tslint:disable-next-line:typedef
    async onLogout() {
        await this.authService.logoutUser();
        this.router.navigate(['/auth/login']);
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
