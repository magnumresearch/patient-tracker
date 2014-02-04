module.exports = function(grunt)
{
	grunt.initConfig
	(
		{
			ngconstant: 
			{
				options: 
				{
					space: '  '
				},
				
				// Environment targets
				development: 
					[
					 {
						 dest: 'www/app/config.js',
						 wrap: '"use strict";\n\n <%= __ngModule %>',
						 name: 'config',
						 constants: 
						 {
							 ENV: {
								 NAME: 'development',
								 API_URL: 'http://localhost:8888/'
							 }
						 }
					 }
					 ],
				production: 
					[
					 {
						 dest: 'www/app/config.js',
						 wrap: '"use strict";\n\n <%= __ngModule %>',
						 name: 'config',
						 constants: 
						 {
							 ENV: {
								 NAME: 'production',
								 API_URL: 'http://ar210.piim.newschool.edu:8888/'
							 }
						 }
					 }
					 ]
			}
		}
	);
	
	grunt.loadNpmTasks('grunt-ng-constant');
	
	grunt.registerTask
	(
		'default', 
		[
	   		'ngconstant:' + (grunt.option('environment')||'development'),
	    ]
	);
}