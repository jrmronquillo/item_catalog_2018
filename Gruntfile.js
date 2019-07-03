module.exports = function(grunt){

	grunt.initConfig({
		watch: {
	  		  sass: {
	  		  	files: ['static/css/source/*.scss'],
	  		  	tasks: ['sass'],
	  		  },

			  js: {
			    files: ['js/**/*.js'],
			    tasks: ['concat'],
			  },
			  css: {
			    files: ['css/**/*.css'],
			    tasks: ['concat'],
			  },
		},


    	sass: {
	      // Task
	      dist: {
	        // Target
	        files: {
	          // Dictionary of files
	          'static/css/styles.css': 'static/css/source/source.scss', // 'destination': 'source'
	          'static/css/stand-out.css': 'static/css/source/stand-out.scss',
	        },
	      },
	    },

	  	concat: {
		    css: {
		    	src: ['css/main.css', 'css/theme.css'],
		    	dest: 'css/output.css'
		    },
		},
	  	


	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass','watch']);
};	