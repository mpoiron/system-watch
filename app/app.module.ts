import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {HomeComponent} from './home/home.component'
import {NavComponent} from './nav/nav.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, HomeComponent, NavComponent],
    bootstrap: [AppComponent],
})
export class AppModule {

}
