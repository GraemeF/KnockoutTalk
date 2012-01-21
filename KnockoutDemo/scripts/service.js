define(["underscore", "jquery"], function (_, $) {
    var Service = function (baseUri) {
        this.baseUri = baseUri;
    };

    Service.prototype.getContents = function (path, callback) {
        $.ajax({
            type:'GET',
            url:this.baseUri + path,
            context:this,
            success:function (data) {
                callback(null, data);
            },
            error:function (error) {
                callback(error);
            },
            dataType:'jsonp'
        });
    };

    return Service;
});