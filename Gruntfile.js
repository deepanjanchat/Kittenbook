module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			release: {
				src:['js/main.js','js/values.js','js/prompt.js','js/getImages.js','js/replaceImages.js'],
				dest:'release/main.js'
			}
		},
		copy: {
			release: {
				src:'manifest.json',
				dest:'release/manifest.json'
			}
		},
		jshint: {
			files:['js/main.js', 'js/values.js','js/prompt.js','js/getImages.js','js/replaceImages.js']
		},
		watch:{
			files:['<%=jshint.files=%>','manifest.json'],
			tasks:['default']
		},
		jsdoc: {
			dist: {
				src: ['js/*.js'],
				dest: 'doc'
			}			
		}
	});
//grunt plugins
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-jsdoc');
//register tasks	
grunt.registerTask('default',['concat','jshint','copy','jsdoc']);
};