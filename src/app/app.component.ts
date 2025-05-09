import { Component } from '@angular/core';
import { LayoutComponent } from "./layout/layout.component";
import { CookieService } from './services/cookie.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portal';

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    if (!this.cookieService.getCookie("XSRF-TOKEN")) {
      this.cookieService.getCsrfToken().pipe(
        tap(() => { })
      ).subscribe();
    }
  }
}
