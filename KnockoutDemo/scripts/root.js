define(["knockout", "folder"], function (ko, Folder) {
    var Root = function (service) {
        this.service = service;
        this.rootFolder = new Folder(service, null, {"name":"Home", "path":"", "uri":"/"});
    };

    return Root;
});