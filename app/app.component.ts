import {Component, ViewEncapsulation} from '@angular/core'

@Component({
    selector: 'system-watch',
    template: `
        <top-nav></top-nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.style.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

}
