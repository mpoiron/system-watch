import {Component, OnInit} from '@angular/core'
import {IProcess, ProcessService} from '../process.module'

@Component({
    selector: 'process-list',
    templateUrl: './process-list.template.html',
    styleUrls: ['./process-list.style.scss'],
    providers: [ProcessService],
})
export class ProcessListComponent implements OnInit {

    // Sorting options
    public sortProperty = 'name'
    public sortAscending = true

    // Available sorting properties options
    public sortOptions = [
        { label: 'name', value: 'name', default: true },
        { label: 'id', value: 'id' },
        { label: 'paged memory', value: 'pagedMemorySize64' },
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
                    (error) => this.processes = [],
                    () => this.sortProcess('name'))
    }

    public sortProcess(property, ascending = true) {
        this.sortProperty = property
        this.sortAscending = ascending

        this.sortedProcesses = this.sortProcessByProperty(property, this.sortAscending)
    }

    private sortProcessByProperty(property, ascending) {
        if (this.processes == null || this.processes.length < 1) {
            return
        }

        return this.processes.sort((a, b) => {
                                let first = a[property]
                                let second = b[property]
                                let result = (first > second) ? 1 : (first < second) ? -1 : 0

                                if (!ascending) { result *= -1 }

                                return result
                            })
    }
}
