require.config({
    paths:{
        jquery:'libs/require-jquery',
        knockout:'libs/require-knockout',
        "knockout-onDemand":'libs/knockout-onDemand',
        underscore:'libs/underscore'
    }
});

require(["jquery", "knockout", "root", "service", "folder"], function ($, ko, Root, Service, Folder) {
    $(function () {
        ko.applyBindings(
            new Root(
                new Folder(
                    new Service("http://localhost:3000"),
                    {"name":"", "path":"", "uri":"/"})));
    });
});