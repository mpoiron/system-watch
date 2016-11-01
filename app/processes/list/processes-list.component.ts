import {Component, OnInit} from '@angular/core'
import {IProcess} from '../../shared/process'
import {ProcessService} from '../../shared/process.service'

@Component({
    selector: 'processes-list',
    templateUrl: './processes-list.template.html',
    styleUrls: ['./processes-list.style.scss'],
})
export class ProcessesListComponent implements OnInit {

    // Sorting options
    public sortProperty = 'name'
    public sortAscending = true

    // Available sorting properties options
    public sortOptions = [
        { label: 'Name', value: 'name' },
    ]

    // Sorted processes list
    public sortedProcesses: IProcess[]

    // Processes list
    private processes: IProcess[]

    constructor(private processService: ProcessService) {}

    public ngOnInit() {
        this.processService
                .getProcesses()
                .subscribe(
                    processes => this.processes = processes,
                    (error) => console.debug('Failed to retrieve processes. Error : ' + error),
                    () => this.sortedProcesses = this.sortProcessByProperty('name'))
    }

    public sortProcess(property, ascending) {
        this.sortProperty = property
        this.sortAscending = ascending

        this.sortedProcesses = this.sortProcessByProperty(property, this.sortAscending)
    }

    private sortProcessByProperty(property, ascending = true) {
        return this.processes.sort((a, b) => {
                                let first = a[property]
                                let second = b[property]
                                let result = (first > second) ? 1 : (first < second) ? -1 : 0

                                if (!ascending) { result *= -1 }

                                return result
                            })
    }
}
