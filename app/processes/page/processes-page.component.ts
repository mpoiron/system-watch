import {Component} from '@angular/core'
import {ProcessService} from '../../shared/process.service'

@Component({
    selector: 'processes-page',
    templateUrl: './processes-page.template.html',
    styleUrls: ['./processes-page.style.scss'],
    providers: [ProcessService],
})
export class ProcessesPageComponent {

}
