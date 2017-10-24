import * as humanize from 'humanize'
import * as ko from 'knockout'
import {Job} from './job'
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

export class MainViewModel {

    jobs: KnockoutObservableArray<Job>;
    history: KnockoutObservableArray<Job>;

    constructor() {
        this.jobs = ko.observableArray();
        this.history = ko.observableArray();

        // refresh now...
        this.updateStatus();

        // .. and every 5 seconds
        setInterval(() => this.updateStatus(), 5000);
    }

    updateStatus() {
        axios.get('/api/status')
            .then((resonse:any) => {

                this.jobs.removeAll();
                this.history.removeAll();
                resonse.data.jobs.map((v) => {

                    if (v.status == "completed") {
                        this.history.push(new Job(v))
                    } else {
                        this.jobs.push(new Job(v))
                    }

                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    refresh() {
        axios.get('/api/refresh')
            .then((resonse:any) => {
                console.log(resonse.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }


};

let vm = new MainViewModel();
// window.vm = vm;
ko.applyBindings(vm);



