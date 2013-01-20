define([
    'backbone',
    'text!templates/WineListItemView.html' 
], function(Backbone, template) {

    var WineListItemView = Backbone.View.extend({

        tagName: "li",

        className: "span3",

        template: _.template(template),

        initialize: function () {
            this.model.bind("change", this.render, this);
            this.model.bind("destroy", this.close, this);
        },

        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }

    });

    return WineListItemView;
});    