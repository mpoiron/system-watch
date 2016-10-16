import {NgModule} from '@angular/core'
import {HttpModule} from '@angular/http'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'

// Components
import {AppComponent} from './app.component'
import {HomePageComponent} from './home/home-page.component'
import {ProcessesPageComponent} from './processes/processes-page.component'
import {TopNavComponent} from './top-nav/top-nav.component'

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, HomePageComponent, ProcessesPageComponent, TopNavComponent],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'system/processes', component: ProcessesPageComponent },
            { path: 'home', component: HomePageComponent },
        ]),
    ],
})
export class AppModule {

}
