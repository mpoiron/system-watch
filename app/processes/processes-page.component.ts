import {Component, OnInit} from '@angular/core'
import {IProcess} from '../shared/process'
import {ProcessService} from '../shared/process.service'

@Component({
    selector: 'processes-page',
    templateUrl: './processes-page.template.html',
    styleUrls: ['./processes-page.style.scss'],
    providers: [ProcessService],
})
export class ProcessesPageComponent implements OnInit {

    public processes: IProcess[]

    constructor(private processService: ProcessService) {}

    public ngOnInit() {
        this.processService
                .getProcesses()
                .subscribe(processes => this.processes = processes)
    }
}
