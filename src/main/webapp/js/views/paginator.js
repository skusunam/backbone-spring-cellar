define([
    'backbone',
    'text!templates/PaginationHeaderView.html'
], function(Backbone, template) {

    var Paginator = Backbone.View.extend({

        className: "pagination pagination-centered",

        template: _.template(template),

        initialize:function () {
            this.model.on("reset", this.render, this);

            //this.render();
        },

        events: { 
        'click li#prev': 'requestPreviousPage',
        'click li#next': 'requestNextPage'
        },

        render:function () {
            //var items = this.model.models;
            //var len = items.length;
            //var pageCount = Math.ceil(len / 8);

            $(this.el).html('<ul />');

            var totalPages = this.model.totalPages;

            $('ul', this.el).append(this.template());
            // for (var i = 0; i <= totalPages; i++) {
            //     $('ul', this.el).append("<li" + ((i + 1) === this.options.page ? " class='active'" : "") + 
            //         "><a href='#wines/page/"+(i+1)+"'>" + (i+1) + "</a></li>");
            // }

            return this;
        },

        requestPreviousPage: function() {
            this.model.requestPreviousPage();
        },

        requestNextPage: function() {
            this.model.requestNextPage();
        }

    });

    return Paginator;
});    