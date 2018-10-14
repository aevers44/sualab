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

exports.preSave = function (req, res, args, next) {
  if ( args.name == "event" || args.name == "event_en" || args.name == "popup") {
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

      var s3 = new AWS.S3({
        params: s3_params
      });

      s3
        .upload({
          Body: fs.createReadStream(image.path)
        })
        .on("httpUploadProgress", function (evt) {
          console.log(evt);
        })
        .send(function (err, data) {
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
  } if (args.name == "media") {
    var image = args.upload.manyToOne.media_image.records[0].columns.image;
    var imageList = args.upload.manyToOne.media_image.records;

    let promiseList = [];

    for (let idx =0; idx < imageList.length; idx++){
      let image = imageList[idx].columns.image;
      if (image.name){
        var fname = args.data.manyToOne.media_image.records[idx].columns.image;
        var record = args.data.manyToOne.media_image.records[idx].columns;

        var date = new Date();
        var datePath = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "/";

        var s3_params = {
          Bucket: "sualab-asset",
          Key: "upload/" + datePath + image.name,
          ACL: "public-read",
          ContentType: image.type,
        };

        var s3 = new AWS.S3({
          params: s3_params
        });

        promiseList.push(
          new Promise(function(resolve, reject){
            s3
            .upload({
              Body: fs.createReadStream(image.path)
            })
            .on("httpUploadProgress", function (evt) {
              console.log(evt);
            })
            .send(function (err, data) {
              //S3 File URL
              var url = data.Location;
              var parseUrl = parse(url);
              parseUrl.set("hostname", CLOUDFRONT_LINK);
              // record path
              record.image = parseUrl.href;
              resolve(record);
            });
          }),
        );
      }
    }

    Promise.all(promiseList).then(function (vals){
      next();
    })

  } if (args.name == "media_en") {
    var image = args.upload.manyToOne.media_en_image.records[0].columns.image;
    var imageList = args.upload.manyToOne.media_en_image.records;

    let promiseList = [];

    for (let idx =0; idx < imageList.length; idx++){
      let image = imageList[idx].columns.image;
      if (image.name){
        var fname = args.data.manyToOne.media_en_image.records[idx].columns.image;
        var record = args.data.manyToOne.media_en_image.records[idx].columns;

        var date = new Date();
        var datePath = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "/";

        var s3_params = {
          Bucket: "sualab-asset",
          Key: "upload/" + datePath + image.name,
          ACL: "public-read",
          ContentType: image.type,
        };

        var s3 = new AWS.S3({
          params: s3_params
        });

        promiseList.push(
          new Promise(function(resolve, reject){
            s3
            .upload({
              Body: fs.createReadStream(image.path)
            })
            .on("httpUploadProgress", function (evt) {
              console.log(evt);
            })
            .send(function (err, data) {
              //S3 File URL
              var url = data.Location;
              var parseUrl = parse(url);
              parseUrl.set("hostname", CLOUDFRONT_LINK);
              // record path
              record.image = parseUrl.href;
              resolve(record);
            });
          }),
        );
      }
    }

    Promise.all(promiseList).then(function (vals){
      next();
    })

  } else if (args.name == "suakit_example") {
    var image = args.upload.view[args.name].records[0].columns.image;

    if (image.name) {
      var fname = args.data.view[args.name].records[0].columns.image;
      var record = args.data.view[args.name].records[0].columns;

      var s3_params = {
        Bucket: "sualab-asset",
        Key: "upload/suakit_example/" + image.name,
        ACL: "public-read",
        ContentType: image.type,
      };

      var s3 = new AWS.S3({
        params: s3_params
      });

      s3
        .upload({
          Body: fs.createReadStream(image.path)
        })
        .on("httpUploadProgress", function (evt) {
          console.log(evt);
        })
        .send(function (err, data) {
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
  } else if (args.name == "global_office") {
    var image = args.upload.view[args.name].records[0].columns.image;

    if (image.name) {
      var fname = args.data.view[args.name].records[0].columns.image;
      var record = args.data.view[args.name].records[0].columns;

      var s3_params = {
        Bucket: "sualab-asset",
        Key: "upload/global_office/" + image.name,
        ACL: "public-read",
        ContentType: image.type,
      };

      var s3 = new AWS.S3({
        params: s3_params
      });

      s3
        .upload({
          Body: fs.createReadStream(image.path)
        })
        .on("httpUploadProgress", function (evt) {
          console.log(evt);
        })
        .send(function (err, data) {
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

      var s3 = new AWS.S3({
        params: s3_params
      });

      s3
        .upload({
          Body: fs.createReadStream(image.path)
        })
        .on("httpUploadProgress", function (evt) {
          console.log(evt);
        })
        .send(function (err, data) {
          //S3 File URL
          var url = data.Location;
          var parseUrl = parse(url);
          console.log(parseUrl);
          parseUrl.set("hostname", CLOUDFRONT_LINK);
          // record path
          record.imgUrl = parseUrl.href;
          console.log(record);
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

        var s3 = new AWS.S3({
          params: s3_params
        });

        promiseList.push(
          new Promise(function (resolve, reject) {
            s3
              .upload({
                Body: fs.createReadStream(image.path)
              })
              .on("httpUploadProgress", function (evt) {
                console.log(evt);
              })
              .send(function (err, data) {
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

        var s3 = new AWS.S3({
          params: s3_params
        });

        promiseList.push(
          new Promise(function (resolve, reject) {
            s3
              .upload({
                Body: fs.createReadStream(image_en.path)
              })
              .on("httpUploadProgress", function (evt) {
                console.log(evt);
              })
              .send(function (err, data) {
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

    Promise.all(promiseList).then(function (vals) {
      next();
    });
  } else if (args.name == "brochure") {
    var image = args.upload.view[args.name].records[0].columns.image;
    var ko_brochure = args.upload.view[args.name].records[0].columns.ko_brochure;
    var en_brochure = args.upload.view[args.name].records[0].columns.en_brochure;

    let promiseList = [];

    if (image.name) {
      var fname = args.data.view[args.name].records[0].columns.image;
      var record = args.data.view[args.name].records[0].columns;

      var s3_params = {
        Bucket: "sualab-asset",
        Key: "upload/brochure/" + image.name,
        ACL: "public-read",
        ContentType: image.type,
      };

      var s3 = new AWS.S3({
        params: s3_params
      });

      promiseList.push(
        new Promise(function (resolve, reject) {
          s3
            .upload({
              Body: fs.createReadStream(image.path)
            })
            .on("httpUploadProgress", function (evt) {
              console.log(evt);
            })
            .send(function (err, data) {
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

    if (ko_brochure.name) {
      var fname = args.data.view[args.name].records[0].columns.ko_brochure;
      var record = args.data.view[args.name].records[0].columns;

      var s3_params = {
        Bucket: "sualab-asset",
        Key: "upload/brochure/" + ko_brochure.name,
        ACL: "public-read",
        ContentType: ko_brochure.type,
      };

      var s3 = new AWS.S3({
        params: s3_params
      });

      promiseList.push(
        new Promise(function (resolve, reject) {
          s3
            .upload({
              Body: fs.createReadStream(ko_brochure.path)
            })
            .on("httpUploadProgress", function (evt) {
              console.log(evt);
            })
            .send(function (err, data) {
              //S3 File URL
              var url = data.Location;
              var parseUrl = parse(url);
              parseUrl.set("hostname", CLOUDFRONT_LINK);
              1;
              // record path
              record.ko_brochure = parseUrl.href;
              resolve(record);
            });
        }),
      );
    }

    if (en_brochure.name) {
      var fname = args.data.view[args.name].records[0].columns.en_brochure;
      var record = args.data.view[args.name].records[0].columns;

      var s3_params = {
        Bucket: "sualab-asset",
        Key: "upload/brochure/" + en_brochure.name,
        ACL: "public-read",
        ContentType: en_brochure.type,
      };

      var s3 = new AWS.S3({
        params: s3_params
      });

      promiseList.push(
        new Promise(function (resolve, reject) {
          s3
            .upload({
              Body: fs.createReadStream(en_brochure.path)
            })
            .on("httpUploadProgress", function (evt) {
              console.log(evt);
            })
            .send(function (err, data) {
              //S3 File URL
              var url = data.Location;
              var parseUrl = parse(url);
              parseUrl.set("hostname", CLOUDFRONT_LINK);
              1;
              // record path
              record.en_brochure = parseUrl.href;
              resolve(record);
            });
        }),
      );
    }


    Promise.all(promiseList).then(function (vals) {
      next();
    });

  } else {
    next();
  }
};
