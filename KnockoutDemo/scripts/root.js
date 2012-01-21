define(["knockout", "folder"], function (ko, Folder) {
    var Root = function (rootFolder) {
        this.rootFolder = rootFolder;
        this.activeFolder = ko.observable(rootFolder);
    };

    return Root;
});