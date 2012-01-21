require.config({
    paths:{
        jquery:'libs/require-jquery',
        knockout:'libs/require-knockout',
        "knockout-onDemand":'libs/knockout-onDemand',
        "knockout-fadeVisible":'libs/knockout-fadeVisible',
        underscore:'libs/underscore'
    }
});

require(["jquery", "knockout", "root", "service", "knockout-fadeVisible"], function ($, ko, Root, Service) {
    $(function () {
        ko.applyBindings(
            new Root(new Service("http://localhost:1337/")));
    });
});