import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core'

/** TODO: Separate files */

@Component({
    host: {
        '(document:click)': 'onExternalClick($event)',
    },
    selector: 'dropdown',
    template: `
    <span class="container" (click)="isVisible = !isVisible">
        <span>{{selectedOption.label}}</span>
        <ul class="dropdown" [ngClass]="{'visible': isVisible}">
            <li *ngFor="let option of options" (click)="selectOption(option)">{{option.label}}</li>
        </ul>        
    </span>
    `,
    styles: [`
        .container {
            cursor: pointer;
            user-select: none;
        }

        .dropdown {
            display: none;
            position: absolute;
            background-color: white;
            border: 1px solid black;
            list-style-type: none;
            right: 0;
            margin: 0;
            padding: 0;
            z-index: 10;
        }

        .dropdown li {
            padding: 0 10px;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .dropdown li:hover {
            color: white;
            background-color: #3297FD;
        }

        .visible {
            display: block;
        }
    `],
})
export class DropdownComponent implements OnInit {
    @Input() public options: IOption[]
    @Output() public onchange = new EventEmitter<IOption>()

    public isVisible: boolean = false
    public selectedOption: IOption

    constructor(private _elementRef: ElementRef) { }

    public ngOnInit() {
        this.selectOption(this.options.find(o => o.default = true))
    }

    public selectOption(option: IOption) {
        this.selectedOption = option
        this.onchange.emit(this.selectedOption)
    }

    public onExternalClick(event) {
        if (this.isVisible && !this._elementRef.nativeElement.contains(event.target)) {
            this.isVisible = false
        }
    }
}

export interface IOption {
    label: string
    value: string
    default?: boolean
}
