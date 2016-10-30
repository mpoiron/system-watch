import {NgModule} from '@angular/core'
import {HttpModule} from '@angular/http'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'

// Components
import {AppComponent} from './app.component'
import {TopNavComponent} from './top-nav/top-nav.component'
import {HomePageComponent} from './home/home-page.component'
import * as processes from './processes/processes.module'

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        TopNavComponent,
        HomePageComponent,
        processes.ProcessesPageComponent,
        processes.ProcessesListComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'system/processes', component: processes.ProcessesPageComponent },
            { path: 'home', component: HomePageComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]),
    ],
})
export class AppModule {

}
