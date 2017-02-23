module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: ['dev/scripts/*'],
        dest: 'dist/scripts/app.js',
      }
    },

    uglify: {
      build: {
        src: 'dist/scripts/app.js',
        dest: 'dist/scripts/app.min.js'
      }
    },

    sass: {
      options: {
        outputStyle: 'compressed',
        sourceMap: true
      },
      dist: {
        files: {
          'dist/styles/styles.css': 'dev/styles/styles.scss'
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/styles/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/styles/',
          ext: '.min.css'
        }]
      }
    },

    watch: {
      scripts: {
        files: ['dev/scripts/*.js', 'dist/scripts/app.js', 'dev/styles/*.scss', 'dist/styles/styles.css'],
        tasks: ['concat', 'uglify', 'sass', 'cssmin'],
        options: {
          spawn: false,
        },
      }
    },

    'http-server': {

      'dev': {
        root: "./dist/",
        host: "localhost",
        port: function() {
          return 8080;
        },
        https: false
      }

    }

  })
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('build', ['concat', 'uglify', 'sass', 'cssmin', 'watch']);
  grunt.registerTask('serve', ['http-server']);
};
