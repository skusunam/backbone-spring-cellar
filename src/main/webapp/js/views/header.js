define([
    'backbone',
    'text!templates/HeaderView.html'
], function(Backbone, template) {

    var HeaderView = Backbone.View.extend({

        template: _.template(template),
            
        initialize: function () {
            this.render();
        },

        render: function () {
            $(this.el).html(this.template());
            return this;
        },

        selectMenuItem: function (menuItem) {
            $('.nav li').removeClass('active');
            if (menuItem) {
                $('.' + menuItem).addClass('active');
            }
        }

    });

    return HeaderView;
});    