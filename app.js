var express = require('express'),
    app = express.createServer()

// Reference
// http://expressjs.com/guide.html
// https://github.com/spadin/simple-express-static-server

// Configuration
app.configure(function(){
    app.use(express.static(__dirname + '/public'));
	app.use(express.bodyParser());
    app.use(express.methodOverride());

	//LESS Support
    //app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));
	//html view (by jade)
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
  res.redirect("/index.html");
});

//Heroku
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
