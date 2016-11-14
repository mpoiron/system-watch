import {Component, ViewEncapsulation} from '@angular/core'

@Component({
    selector: 'system-watch',
    template: `
        <div class="layer">
            <top-nav></top-nav>
            <main>
                <router-outlet></router-outlet>
            </main>
        </div>
    `,
    styleUrls: ['./app.style.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

}
