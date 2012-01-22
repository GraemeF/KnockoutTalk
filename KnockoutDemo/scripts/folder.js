define(["knockout", "knockout-onDemand"], function (ko) {
    var Folder = function (service, parent, dto) {
        this.service = service;
        this.name = dto.name;
        this.path = dto.path;
        this.parent = parent;
        this.contents = ko.onDemandObservableArray(this.getContents, this);
    };

    Folder.prototype.getContents = function () {
        var self = this;
        this.service.getContents(self.path, function (error, data) {
            if (error !== null)
                throw error;

            self.contents(_.map(data, function (dto) {
                return new Folder(self.service, self, dto);
            }, self));
        });
    };

    return Folder;
});
