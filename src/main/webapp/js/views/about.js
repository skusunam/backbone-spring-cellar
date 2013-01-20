define([
    'backbone',
    'text!templates/AboutView.html'    
], function(Backbone, template) {

	var AboutView = Backbone.View.extend({

        template: _.template(template),

	    initialize:function () {
	        this.render();
	    },

	    render:function () {
	        $(this.el).html(this.template());
	        return this;
	    }

	});

	return AboutView;
});