# Wine Cellar Sample Application

This is a popular "backbone.cellar" sample application from @ccoenraets hosted @https://github.com/ccoenraets/backbone-cellar/ with SpringMVC as RESTful service. 

"Backbone Cellar" is a sample application built with Backbone.js. IT used "backbone.paginator" plugin for implementing server side pagination
i.e requestPager module (please read backbone.paginator's README).

Original example is modified to achieve these:

* Use require.js as AMD
* Use Java\SpringMVC as RESTful service to return wines based on client's page request
* Use "backbone.paginator" (requestPager) for pagination 

How to run:

* You need Maven2 to run this project