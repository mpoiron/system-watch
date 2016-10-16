import {Component} from '@angular/core'
import {Router, RoutesRecognized} from '@angular/router'

@Component({
    selector: 'top-nav',
    styleUrls: ['./top-nav.style.scss'],
    templateUrl: './top-nav.template.html',
})
export class TopNavComponent {
    public isHome: boolean = false

    constructor(private router: Router) {
        this.router
                .events
                .filter(event => event instanceof RoutesRecognized)
                .subscribe((navigation: RoutesRecognized) =>
                                this.isHome = navigation.urlAfterRedirects === '/home')
    }
}
