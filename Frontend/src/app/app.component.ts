import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private router: Router,
    private location: Location
  ) {}

  isRootRoute$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(event => (event as NavigationEnd).url === '/')
  );

  navigateBack() {
    this.location.back();
  }
}
