import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {AppComponent} from './app.component'
import {HomeComponent} from './home/home.component'
import {ProcessesComponent} from './processes/processes.component'
import {TopNavComponent} from './topNav/topNav.component'

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, HomeComponent, ProcessesComponent, TopNavComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'system/processes', component: ProcessesComponent },
            { path: 'home', component: HomeComponent },
        ]),
    ],
})
export class AppModule {

}
