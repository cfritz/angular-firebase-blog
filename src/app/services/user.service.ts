import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: firebase.User;

  constructor(public angularFireAuth: AngularFireAuth, 
    private db: AngularFireDatabase) { }

  public getUserId(): Observable<string> {
    if (!this.user) {
      return this.angularFireAuth.user.pipe(map(u => {
        this.user = u;
        return u ? u.uid : ''; 
      }));
    }
    return of(this.user.uid);
  }

  public logout(): Promise<void> {
    this.user = null;
    return this.angularFireAuth.signOut();
  }
}
