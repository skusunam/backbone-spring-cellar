define([
    'backbone',
    'views/winelistitem',
    'views/paginator'    
], function(Backbone, WineListItemView, PaginatorView) {

    window.WineListView = Backbone.View.extend({

        initialize: function () {
            //this.render();

            this.model.on('reset', this.addAll, this);
        },

        addAll: function() {
            var wines = this.model.models;
            $(this.el).html('<ul class="thumbnails"></ul>');

            _.each(wines, this.addOne, this);

            $(this.el).append(new PaginatorView({model: this.model, page: this.options.page}).render().el);
        },

        addOne: function(element, index, list) {
            $('.thumbnails', this.el).append(new WineListItemView({model: element}).render().el);
        }

        // render: function () {
        //     var wines = this.model.models;
        //     //var len = wines.length;
        //     //var startPos = (this.options.page - 1) * 8;
        //     //var endPos = Math.min(startPos + 8, len);

        //     $(this.el).html('<ul class="thumbnails"></ul>');

        //     for (var i = startPos; i < endPos; i++) {
        //         $('.thumbnails', this.el).append(new WineListItemView({model: wines[i]}).render().el);
        //     }

        //     $(this.el).append(new PaginatorView({model: this.model, page: this.options.page}).render().el);

        //     return this;
        // }
    });

    return WineListView;
})
