import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NgoTabComponent } from './ngo-tab/ngo-tab.component';
import { AngularMaterialModule } from './shared/angular-material.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterNgoComponent } from './register-ngo/register-ngo.component';


const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'ngo-tab', component: NgoTabComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'register', component: RegisterNgoComponent },

    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        NgoTabComponent,
        SignInComponent,
        RegisterNgoComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        AngularMaterialModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
    ],
    exports: [
        AngularMaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
