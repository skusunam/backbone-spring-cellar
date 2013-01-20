require.config({

	deps: ["memorystore"],

	paths: {
		text: '../lib/text',
		templates: '../tpl',
		backbone: '../lib/backbone-min',
		underscore: '../lib/underscore-min',
		bootstrap: '../lib/bootstrap',
		paginator: '../lib/backbone.paginator'
	},

	shim: {
		'backbone': {
			deps: ['underscore'],
			exports: function() {
				return this.Backbone;
			}
		},
		'underscore': {
			exports: function() {
				return this._;
			}			
		}
	}
});