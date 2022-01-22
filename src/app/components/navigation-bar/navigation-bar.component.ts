import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  public loginButtonLabel: string = 'Login';
  public selectedLanguage: string = 'en';
  public languages = ['bg', 'de', 'en']; 

  constructor(
  public translate: TranslateService,
  public userService: UserService,
  private router: Router) {
   }

   public isActiveButton(route: string) {
     return this.router.url.endsWith(route);
   }

  public logout(): void {
    this.userService.logout().then(() => this.router.navigate(['/welcome']));
  }

  public changeLanguage(newLanguage: string): void {
    this.selectedLanguage = newLanguage;
    this.translate.use(newLanguage);
  }

}
