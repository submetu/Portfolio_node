var gulp = require('gulp'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin');;

gulp.task('jsReady',function(){
	gulp.src(['public/js/jquery-3.1.0.min.js',
			   'public/jquery_plugins/jquery.lettering.js',
			   'public/jquery_plugins/jquery.textillate.js',
			   'public/js/bootstrap.min.js',
			   'public/js/workJS.js',
			   'public/js/photosJs.js',
			   'public/js/app.js'])
	.pipe(concat('concat.js'))
	.pipe(uglify())
	.pipe(gulp.dest('public/js'));
});
//MAIN PAGE
gulp.task('cssHome',function(){
	gulp.src(['public/css/bootstrap.min.css',
				'public/jquery_plugins/animate.css',
				'public/css/style_common.css',
				'public/css/style10.css',
				'public/css/style.css'])
	.pipe(concat('cssHome.css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('public/css'));
});
//ABOUT PAGE
gulp.task('cssAbout',function(){
	gulp.src(['public/css/bootstrap.min.css',
				'public/css/style_about.css',
				'public/css/style.css'])
	.pipe(concat('cssAbout.css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('public/css'));
});
//CONTACT
gulp.task('cssContact',function(){
	gulp.src(['public/css/bootstrap.min.css',
				'public/css/style_contact.css',
				'public/css/style.css'])
	.pipe(concat('cssContact.css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('public/css'));
});
//WORK
gulp.task('cssWork',function(){
	gulp.src(['public/css/bootstrap.min.css',
				'public/css/style_work_detail.css',
				'public/css/style_work.css',
				'public/css/style.css'])
	.pipe(concat('cssWork.css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('public/css'));
});
//PHOTOS
gulp.task('cssPhotos',function(){
	gulp.src(['public/css/bootstrap.min.css',
				'public/css/style_photos.css',
				'public/css/style.css'])
	.pipe(concat('cssPhotos.css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('public/css'));
});

gulp.task('compressImages',function(){
	gulp.src('public/img/mac.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img'));
});

gulp.task('default',['jsReady','cssHome','cssAbout','cssContact','cssWork','cssPhotos'],function(){
	console.log("Ready for deployment");
})