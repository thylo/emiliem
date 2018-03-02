const gulp = require("gulp");
const responsive = require("gulp-responsive");
const flatten = require("lodash/flatten");

gulp.task("default", function() {
  return gulp
    .src("public/uploads/*.jpg")
    .pipe(
      responsive(
        {
          // Resize all JPG images to three different sizes: 200, 500, and 630 pixels
          "*.jpg": [
            ...flatten(
              [250, 550, 650].map(res => [
                {
                  width: res,
                  height: res,
                  crop: 'entropy',
                  rename: { prefix: `${res}x${res}-` }
                },
                {
                  width: res,
                  rename: { prefix: `${res}-` }
                },
                {
                  width: res * 2,
                  rename: { suffix: "@2x", prefix: `${res}-` }
                }
              ])
            ),
            {
              // Compress, strip metadata, and rename original image
              rename: { suffix: "-original" }
            }
          ]
        },
        {
          // Global configuration for all images
          // The output quality for JPEG, WebP and TIFF output formats
          quality: 70,
          // Use progressive (interlace) scan for JPEG and PNG output
          progressive: true,
          // Strip all metadata
          withMetadata: false
        }
      )
    )
    .pipe(gulp.dest("public/images"));
});
