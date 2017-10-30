"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
var job_1 = require("./job");
var axios_1 = require("axios");
var MainViewModel = /** @class */ (function () {
    function MainViewModel() {
        var _this = this;
        this.jobs = ko.observableArray();
        this.history = ko.observableArray();
        // refresh now...
        this.updateStatus();
        // .. and every 5 seconds
        setInterval(function () { return _this.updateStatus(); }, 5000);
    }
    MainViewModel.prototype.updateStatus = function () {
        var _this = this;
        axios_1.default.get('/api/status')
            .then(function (resonse) {
            _this.jobs.removeAll();
            _this.history.removeAll();
            resonse.data.jobs.map(function (v) {
                if (v.status == "completed") {
                    _this.history.push(new job_1.Job(v));
                }
                else {
                    _this.jobs.push(new job_1.Job(v));
                }
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    MainViewModel.prototype.refresh = function () {
        axios_1.default.get('/api/refresh')
            .then(function (resonse) {
            console.log(resonse.data);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return MainViewModel;
}());
exports.MainViewModel = MainViewModel;
;
var vm = new MainViewModel();
// window.vm = vm;
ko.applyBindings(vm);
//# sourceMappingURL=index.js.map