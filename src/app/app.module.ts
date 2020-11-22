// all angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import 'hammerjs';

// all app modules
import { routing } from './app-routing.module';

// all guards
import { AuthGuard } from './_guards/auth.guard';

// all intercepters
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

// all services
import { AuthenticationService, FileService } from './_services/index';

// all components
import { AppComponent } from './_components/app.component';
import { LoginComponent, RegisterComponent, ForgotPasswordComponent, ResetPasswordComponent } from './_components/auth/index';
import { NavigationComponent } from './_components/navigation/navigation.component';
import { HomeComponent } from './_components/home/home.component';
import { HeroComponent } from "./_components/hero/hero.component";
import { CauseComponent } from './_components/cause/cause.component';
import { PicturesComponent } from './_components/pictures/pictures.component';
import { SupportComponent } from './_components/support/support.component';
import { SocialComponent } from './_components/social/social.component';
import { AmbassadorComponent } from './_components/ambassador/ambassador.component';
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import { BlogComponent } from './_components/blog/blog.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        NavigationComponent,
        HomeComponent,
        HeroComponent,
        HeroComponent,
        CauseComponent,
        PicturesComponent,
        SupportComponent,
        SocialComponent,
        AmbassadorComponent,
        BlogComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    LayoutModule,
    NgbCarouselModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard,
    AuthenticationService,
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
