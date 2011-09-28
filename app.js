var express = require('express'),
	app = express.createServer()

// Reference
// http://expressjs.com/guide.html
// https://github.com/spadin/simple-express-static-server
// http://devcenter.heroku.com/articles/node-js

// Configuration
app.configure(function(){
	app.use(express.static(__dirname + '/public'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());

	// LESS Support
	//app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));
	// Template-enabled html view (by jade)
	// http://stackoverflow.com/questions/4529586/render-basic-html-view-in-node-js-express
	//app.set('views', __dirname + '/app/views');
	//app.register('.html', require('jade'));
	
	//Error Handling
	app.use(express.logger());
	app.use(express.errorHandler({
		dumpExceptions: true, 
		showStack: true
	}));
	
	//Setup the Route, you are almost done
	app.use(app.router);
});

app.get('/', function(req, res){
	//Apache-like static index.html (public/index.html)
	res.redirect("/index.html");
	//Or render from view
	//res.render("index.html")
});

//Heroku
var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
