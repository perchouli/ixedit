'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
  grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 3000,
                    base: '.'
                }
            }
        },
        watch: {
            build: {
                files: ['src/**'],
                tasks: ['build'],
                options: {
                    livereload: true
                }
            }
        },
        open: {
            kitchen: {
                path: 'http://localhost:3000/'
            }
        }
  });
this.registerTask('default', ['build']);
    this.registerTask('server', 'Run server', [
        'connect',
        'open',
        'watch'
    ]);

};
