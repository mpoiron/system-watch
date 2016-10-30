import {Component, OnInit} from '@angular/core'
import {IProcess} from '../../shared/process'
import {ProcessService} from '../../shared/process.service'

@Component({
    selector: 'processes-list',
    templateUrl: './processes-list.template.html',
    styleUrls: ['./processes-list.style.scss'],
})
export class ProcessesListComponent implements OnInit {
    public processes: IProcess[]

    constructor(private processService: ProcessService) {}

    public ngOnInit() {
        this.processService
                .getProcesses()
                .subscribe(processes => this.processes = processes)
    }
}
