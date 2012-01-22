define(["knockout", "knockout-onDemand"], function (ko) {
    var Folder = function (service, activeFolder, parent, dto) {
        this.service = service;
        this.name = dto.name;
        this.path = dto.path;
        this.activeFolder = activeFolder;
        this.parent = parent;
        this.contents = ko.onDemandObservableArray(this.getContents, this);
        this.isExpanded = ko.observable(false);
    };

    Folder.prototype.activate = function () {
        this.activeFolder(this);
        this.ensureExpanded();
    };

    Folder.prototype.expand = function () {
        this.isExpanded(true);
    };

    Folder.prototype.collapse = function () {
        this.isExpanded(false);
    };

    Folder.prototype.ensureExpanded = function () {
        this.isExpanded(true);
        if (this.parent !== null)
            this.parent.ensureExpanded();
    };

    Folder.prototype.getContents = function () {
        var self = this;
        this.service.getContents(self.path, function (error, data) {
            if (error !== null)
                throw error;

            self.contents(_.map(data, function (dto) {
                return new Folder(self.service, self.activeFolder, self, dto);
            }, self));
        });
    };

    return Folder;
});
