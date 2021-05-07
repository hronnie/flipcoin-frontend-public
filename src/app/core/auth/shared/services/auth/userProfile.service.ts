import {Injectable} from '@angular/core';
import {Store} from '../../../../../../store';
import {AngularFireDatabase} from '@angular/fire/database';
import {UserProfile} from '../../../../domain/userProfile.model';
import {AuthService} from './auth.service';


@Injectable()
export class UserProfileService {

    constructor(private store: Store,
                private db: AngularFireDatabase,
                private authService: AuthService) {
    }

    get uid() {
        return this.store.value.user.uid;
    }

    addUserProfile(userProfile: UserProfile) {
        this.db.list(`userProfiles/${this.uid}`).push(userProfile);
    }

    updateUserProfile(key: string, userProfile: UserProfile) {
        this.db.object(`userProfiles/${this.uid}/${key}`).update(userProfile);
    }

    removeUserProfile(key: string) {
        this.db.list(`/userProfiles/${this.uid}`).remove(key);
    }

    getUserProfile() {
        // TODO: implement it
    }
}
