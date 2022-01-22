import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseUISignInFailure } from 'firebaseui-angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void { }

  public errorCallback(errorData: FirebaseUISignInFailure): void {
    console.log('error logging in: ' + errorData.code);
  }
}
