import axios from 'axios';
import humanize = require('humanize')

export class Job {

    id : KnockoutObservable<number>;
    name : KnockoutObservable<string>;
    category: KnockoutObservable<string>;
    status : KnockoutObservable<string>;
    log : KnockoutObservable<string>;
    size : KnockoutObservable<number>;
    transferred : KnockoutObservable<number>;
    percent : KnockoutComputed<number>;
    transferredText : KnockoutComputed<string>;

    constructor(job:any) {

        this.id = ko.observable(job.id);
        this.name = ko.observable(job.name);
        this.status = ko.observable(job.status);
        this.log = ko.observable(job.log);
        this.category = ko.observable(job.category);
        this.size = ko.observable(job.size);
        this.transferred = ko.observable(job.transferred);

        this.percent = ko.computed({
            owner: this,
            read:  () => {
                return this.transferred() / this.size() * 100
            }
        });

        this.transferredText = ko.computed({
            owner: this,
            read:  () => {
                return humanize.filesize(this.transferred()) + " / " + humanize.filesize(this.size())
            }
        });

        console.log("Constructing job");

    }

    canPause() : boolean {
        return this.status() === "downloading" || this.status() === "queued";
    }

    pause() {
        console.log("Pausing job" + this.name());
        axios.get('/api/pause/' + this.id())
            .then((response) => {
                console.log(response.data);
            })
    }

    canResume() : boolean {
        return this.status() === "paused";
    }

    resume() {
        console.log("Resumeing job" + this.name());
        axios.get('/api/resume/' + this.id())
            .then((response) => {
                console.log(response.data);
            })
    }

    canRetry() : boolean {
        return this.status() === "failed";
    }

    retry() {
        console.log("Retrying job" + this.name());
        axios.get('/api/retry/' + this.id())
            .then((response) => {
                console.log(response.data);
            })
    }

}