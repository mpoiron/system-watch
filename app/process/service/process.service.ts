import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'

import {IProcess} from './process'

@Injectable()
export class ProcessService {

    constructor(private http: Http) {}

    public getProcesses(): Observable<IProcess[]> {
        return this.http
                    .get('/api/processes')
                    .map((res) => {
                        let data = res.json()
                        return data || []
                    })
    }
}
