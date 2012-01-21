require.config({
    paths:{
        jquery:'libs/require-jquery',
        knockout:'libs/require-knockout',
        "knockout-onDemand":'libs/knockout-onDemand',
        underscore:'libs/underscore'
    }
});

require(["jquery", "knockout", "root", "service"], function ($, ko, Root, Service) {
    $(function () {
        ko.applyBindings(
            new Root(new Service("http://localhost:3000/")));
    });
});