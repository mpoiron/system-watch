import {NgModule} from '@angular/core'
import {HttpModule} from '@angular/http'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'

// Librairies
import {PerfectScrollbarModule} from 'angular2-perfect-scrollbar'

// Components()
import {AppComponent} from './app.component'
import {TopNavComponent} from './top-nav/top-nav.component'
import {HomePageComponent} from './home/home-page.component'
import * as process from './process/process.module'
import * as shared from './shared/shared.module'

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomePageComponent,
        process.ProcessPageComponent,
        process.ProcessListComponent,
        shared.DropdownComponent,
        TopNavComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        PerfectScrollbarModule,
        RouterModule.forRoot([
            { path: 'system/processes', component: process.ProcessPageComponent },
            { path: 'home', component: HomePageComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]),
    ],
})
export class AppModule {

}
