var AWS = require("aws-sdk");
var path = require("path");
var fs = require("fs");
var parse = require("url-parse");
var crypto = require("crypto");

var SHA256_SALT = "SuAlAbIsThEbEsTMaChInElEaRnInGsOlUtIoN-+-=__";

var CLOUDFRONT_LINK = "d2ivzy5c3eic08.cloudfront.net";
AWS.config.region = "ap-northeast-2";
AWS.config.update({
  accessKeyId: "AKIAIXVDNG4OO7MIHTQQ",
  secretAccessKey: "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",
});

exports.preSave = function(req, res, args, next) {
  if (args.name == "media" || args.name == "event" || args.name == "media_en" || args.name == "event_en") {
    var image = args.upload.view[args.name].records[0].columns.image;

    if (image.name) {
      var fname = args.data.view[args.name].records[0].columns.image;
      var record = args.data.view[args.name].records[0].columns;

      var date = new Date();
      var datePath = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "/";

      var s3_params = {
        Bucket: "sualab-asset",
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
          var parseUrl = parse(url);
          parseUrl.set("hostname", CLOUDFRONT_LINK);
          // record path
          record.image = parseUrl.href;
          next();
        });
    } else {
      next();
    }
  } else if (args.name == "people") {
    var image = args.upload.view[args.name].records[0].columns.imgUrl;

    if (image.name) {
      var fname = args.data.view[args.name].records[0].columns.imgUrl;
      var record = args.data.view[args.name].records[0].columns;

      var s3_params = {
        Bucket: "sualab-asset",
        Key: "companyPage/people/" + image.name,
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
          var parseUrl = parse(url);
          parseUrl.set("hostname", CLOUDFRONT_LINK);
          // record path
          record.imgUrl = parseUrl.href;
          next();
        });
    } else {
      next();
    }
  } else if (args.name == "customer") {
    var name = args.data.view[args.name].records[0].columns.name;
    var record = args.data.view[args.name].records[0].columns;

    record.hash = crypto
      .createHash("sha256")
      .update(name + SHA256_SALT)
      .digest("base64")
      .substr(0, 8);
    next();
  } else if (args.name == "feature") {
    var image = args.upload.manyToOne.feature_item.records[0].columns.image;
    var image_en = args.upload.manyToOne.feature_item.records[0].columns.image_en;
    var imageList = args.upload.manyToOne.feature_item.records;

    let promiseList = [];

    for (let idx = 0; idx < imageList.length; idx++) {
      let image = imageList[idx].columns.image;
      let image_en = imageList[idx].columns.image_en;

      if (image.name) {
        let fname = args.data.manyToOne.feature_item.records[idx].columns.image;
        let record = args.data.manyToOne.feature_item.records[idx].columns;

        let date = new Date();
        let datePath = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "/";

        var s3_params = {
          Bucket: "sualab-asset",
          Key: "upload/" + datePath + image.name,
          ACL: "public-read",
          ContentType: image.type,
        };

        var s3 = new AWS.S3({ params: s3_params });

        promiseList.push(
          new Promise(function(resolve, reject) {
            s3
              .upload({ Body: fs.createReadStream(image.path) })
              .on("httpUploadProgress", function(evt) {
                console.log(evt);
              })
              .send(function(err, data) {
                //S3 File URL
                var url = data.Location;
                var parseUrl = parse(url);
                parseUrl.set("hostname", CLOUDFRONT_LINK);
                1;
                // record path
                record.image = parseUrl.href;
                resolve(record);
              });
          }),
        );
      }

      if (image_en.name) {
        let fname = args.data.manyToOne.feature_item.records[idx].columns.image_en;
        let record = args.data.manyToOne.feature_item.records[idx].columns;

        let date = new Date();
        let datePath = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "/";

        var s3_params = {
          Bucket: "sualab-asset",
          Key: "upload/" + datePath + "en_" + image_en.name,
          ACL: "public-read",
          ContentType: image_en.type,
        };

        var s3 = new AWS.S3({ params: s3_params });

        promiseList.push(
          new Promise(function(resolve, reject) {
            s3
              .upload({ Body: fs.createReadStream(image_en.path) })
              .on("httpUploadProgress", function(evt) {
                console.log(evt);
              })
              .send(function(err, data) {
                //S3 File URL
                var url = data.Location;
                var parseUrl = parse(url);
                parseUrl.set("hostname", CLOUDFRONT_LINK);
                1;
                // record path
                record.image_en = parseUrl.href;
                resolve(record);
              });
          }),
        );
      }
    }

    Promise.all(promiseList).then(function(vals) {
      next();
    });
  } else {
    next();
  }
};
