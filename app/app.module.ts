import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {HomeComponent} from './home/home.component'
import {TopNavComponent} from './topNav/topNav.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, HomeComponent, TopNavComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
