const gulp = require("gulp");
const responsive = require("gulp-responsive");
const flatten = require("lodash/flatten");
const gulpChanged = require("gulp-changed");

gulp.task("default", function() {
  return (gulp
      .src("public/uploads/*.jpg")
      //.pipe(gulpChanged("public/images"))
      .pipe(
        responsive(
          {
            // Resize all JPG images to three different sizes: 200, 500, and 630 pixels
            "*.jpg": [
              ...flatten(
                [250, 320, 550, 650, 1024, 1920].map(res => [
                  {
                    width: res,
                    height: res,
                    crop: "entropy",
                    rename: { prefix: `${res}x${res}-` },
                    withoutEnlargement: false
                  },
                  {
                    width: res,
                    rename: { prefix: `${res}-` },
                    withoutEnlargement: false
                  },
                  {
                    width: res * 2,
                    rename: { suffix: "@2x", prefix: `${res}-` },
                    withoutEnlargement: false
                  },
                  {
                    width: res,
                    height: 200,
                    rename: { prefix: `${res}x200-` },
                    withoutEnlargement: false
                  },
                  {
                    width: res * 2,
                    height: 200,
                    rename: { suffix: "@2x", prefix: `${res}x200-` },
                    withoutEnlargement: false
                  }
                ])
              ),
              {
                // Compress, strip metadata, and rename original image
                rename: { suffix: "-original" },
                quality: 80
              },
              {
                quality: 80
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
            withMetadata: false,
            errorOnUnusedConfig: false,
            errorOnUnusedImage: false,
            errorOnEnlargement: false,
            silent: true
          }
        )
      )
      .pipe(gulp.dest("public/images")) );
});

gulp.on("error", console.log);
