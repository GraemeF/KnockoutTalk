define(["knockout", "knockout-onDemand"], function (ko) {
    var Folder = function (service, parent, dto) {
        this.service = service;
        this.name = dto.name;
        this.path = dto.path;
        this.parent = parent;
    };

    Folder.prototype.getContents = function () {
        var self = this;
        this.service.getContents(self.path, function (error, data) {
            if (error !== null)
                throw error;

            console.log(data);
        });
    };

    return Folder;
});
