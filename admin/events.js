var AWS = require("aws-sdk");
var path = require("path");
var fs = require("fs");
var parse = require("url-parse");

var CLOUDFRONT_LINK = "d3rqapinkc8b8p.cloudfront.net";
AWS.config.region = "ap-northeast-2";
AWS.config.update({
  accessKeyId: "AKIAJIOJ4D5IJ5AAANLA",
  secretAccessKey: "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",
});

exports.preSave = function(req, res, args, next) {
  if (args.name == "media" || args.name == "event") {
    var image = args.upload.view[args.name].records[0].columns.image;

    if (image.name) {
      var fname = args.data.view[args.name].records[0].columns.image;
      var record = args.data.view[args.name].records[0].columns;

      var date = new Date();
      var datePath = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "/";

      var s3_params = {
        Bucket: "sualab-assets",
        Key: "upload/" + datePath + image.name,
        ACL: "public-read",
        ContentType: image.type,
      };

      var s3 = new AWS.S3({ params: s3_params });

      s3
        .upload({ Body: fs.createReadStream(image.path) })
        .on("httpUploadProgress", function(evt) {
          console.log(evt);
        })
        .send(function(err, data) {
          //S3 File URL
          var url = data.Location;
          console.log(url);
          var parseUrl = parse(url);
          parseUrl.set("hostname", CLOUDFRONT_LINK);
          console.log(parseUrl.href);
          // record path
          record.image = parseUrl.href;
          next();
        });
    } else {
      next();
    }
  } else {
    next();
  }
};
