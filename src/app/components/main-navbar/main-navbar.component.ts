import { Component, Input } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: [
    './main-navbar.component.scss',
    './../../style/button.scss',
  ],
})

export class MainNavbarComponent extends AppComponent {
  @Input() navID: string | undefined;
  hasDrop: boolean = false;

  triggerBurger() {
    const dropdown = document.getElementById(this.navID + '-dropdown');

    if (!dropdown) return console.log('No dropdown (%s-dropdown) found', this.navID);

    this.hasDrop = !this.hasDrop;

    dropdown.style.display = this.hasDrop ? 'flex' : 'none';
  }
};
