# Wine Cellar Sample Application

This is a popular "backbone.cellar" sample application from @ccoenraets hosted @https://github.com/ccoenraets/backbone-cellar/ with SpringMVC as RESTful service. 


Original example is modified to achieve these:

* Use require.js as AMD
* Use Java\SpringMVC as RESTful service to return wines based on client's page request
* Use "backbone.paginator" (requestPager) for pagination 

How to run:

* You need Maven2 to run this project
* Run <code>mvn tomcat:run</code>
* Hit this URL in your favorite browser: http://localhost:8080/cellar/
