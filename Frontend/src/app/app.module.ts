import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  RouterModule,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    provideRouter(ROUTES, withComponentInputBinding()),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
