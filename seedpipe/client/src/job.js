"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var humanize = require("humanize");
var Job = /** @class */ (function () {
    function Job(job) {
        var _this = this;
        this.id = ko.observable(job.id);
        this.name = ko.observable(job.name);
        this.status = ko.observable(job.status);
        this.log = ko.observable(job.log);
        this.category = ko.observable(job.category);
        this.size = ko.observable(job.size);
        this.transferred = ko.observable(job.transferred);
        this.percent = ko.computed({
            owner: this,
            read: function () {
                return _this.transferred() / _this.size() * 100;
            }
        });
        this.transferredText = ko.computed({
            owner: this,
            read: function () {
                return humanize.filesize(_this.transferred()) + " / " + humanize.filesize(_this.size());
            }
        });
        console.log("Constructing job");
    }
    Job.prototype.canPause = function () {
        return this.status() === "downloading" || this.status() === "queued";
    };
    Job.prototype.pause = function () {
        console.log("Pausing job" + this.name());
        axios_1.default.get('/api/pause/' + this.id())
            .then(function (response) {
            console.log(response.data);
        });
    };
    Job.prototype.canResume = function () {
        return this.status() === "paused";
    };
    Job.prototype.resume = function () {
        console.log("Resumeing job" + this.name());
        axios_1.default.get('/api/resume/' + this.id())
            .then(function (response) {
            console.log(response.data);
        });
    };
    Job.prototype.canRetry = function () {
        return this.status() === "failed";
    };
    Job.prototype.retry = function () {
        console.log("Retrying job" + this.name());
        axios_1.default.get('/api/retry/' + this.id())
            .then(function (response) {
            console.log(response.data);
        });
    };
    return Job;
}());
exports.Job = Job;
//# sourceMappingURL=job.js.map