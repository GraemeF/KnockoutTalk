define(["knockout", "folder"], function (ko, Folder) {
    var Root = function (service) {
        this.service = service;
        this.activeFolder = ko.observable(null);
        this.rootFolder = new Folder(service, this.activeFolder, {"name":"", "path":"", "uri":"/"});
        this.activeFolder(this.rootFolder);

        this.activate = function (folder) {
            this.activeFolder(folder);
        }
    };

    return Root;
});