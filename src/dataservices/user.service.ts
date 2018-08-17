import { AngularFireDatabase } from 'angularfire2/database';
import { UserProfile } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    private userProfileList = this.db.list<UserProfile>("Profiles");
    constructor(private db: AngularFireDatabase) {

    }
    getUserProfiles() {
        return this.userProfileList;
    }
    addUserProfile(profile: UserProfile) {
        this.userProfileList.push(profile);
    }

}
