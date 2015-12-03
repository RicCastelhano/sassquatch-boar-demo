module.exports = function(grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), 		// will reduce filepath competition
  		sass: {                              // Task 
    		dist: {                            // Target 
      			options: {                       // Target options 
        			style: 'expanded'
      			},
      		files: {                         // Dictionary of files 
        		'css/main.css': 'scss/main.scss'
      			}
    		}
  		},
		watch: {
			css: {
				files: '**/*.scss',          // Anytime any SCSS file is updated
				tasks: ['sass']				// will run this task
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
}