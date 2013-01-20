define([
	'backbone',
	'models/models',
	'paginator'
], function(Backbone, Wine) {

	var WineCollection = Backbone.Paginator.requestPager.extend({
		model: Wine,

		paginator_core: {
			type: 'GET',

			dataType: 'json',

			url: 'api/wines'
		},

		paginator_ui: {
			firstPage: 1,

			currentPage: 1,

			perPage: 8,

			totalPages: 10,

			pagesInRange: 2
		},

		server_api: {
			'pageZeroBased':  function(){ 
				return this.currentPage - 1;
			},				

			'resultsPerPage':  function(){
				return this.perPage;		
			}  
		},

		parse:  function(response) {
			this.totalPages = Math.ceil(response.totalRecords / this.perPage);
      		this.totalRecords = parseInt(response.totalRecords);
      		return response.wines;			
		}
	});

	return WineCollection;
});