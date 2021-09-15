import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

import {tap} from 'rxjs/operators';
import {Store} from '../../../../../../store';
import firebase from 'firebase/app';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

export interface User {
    email: string;
    uid: string;
    authenticated: boolean;
}

@Injectable()
export class AuthService {

    auth$ = this.angularFireAuth.authState
        .pipe(
            tap((next) => {
                if (!next) {
                    this.store.set('user', null);
                    return;
                }
                const user: User = {
                    email: next.email,
                    uid: next.uid,
                    authenticated: true
                };
                this.store.set('user', user);
            })
        );

    constructor(private angularFireAuth: AngularFireAuth,
                private store: Store,
                private db: AngularFireDatabase) {
    }

    get user(): Promise<firebase.User> {
        return this.angularFireAuth.currentUser;
    }

    get authState(): Observable<firebase.User> {
        return this.angularFireAuth.authState;
    }

    createUser(email: string, password: string): any {
        return this.angularFireAuth
            .createUserWithEmailAndPassword(email, password);
    }

    loginUserWithPasswordAndEmail(email: string, password: string): any {
        return this.angularFireAuth
            .signInWithEmailAndPassword(email, password);
    }

    logoutUser(): any {
        return this.angularFireAuth.signOut();
    }

}
