#Heroku Express (heroku-node-wildcard), your wildcard node.js server for Heroku

This is a simple [node.js](http://nodejs.org/) server (node.js ver > 0.4.7) powered by [express.js 2.4.6](http://expressjs.com/guide.html), included all the file Heroku needed ([heroku guide Sep 2011](http://devcenter.heroku.com/articles/node-js))

## Edit
You can modify this server by editing `app.js`

## Run
Using [foreman](http://blog.daviddollar.org/2011/05/06/introducing-foreman.html) to start the server locally (or on your own server)

  $ foreman start

## Static File
You can put the static file under `/public` by default and using `public/index.html` as index page
You may render the index from view by uncomment `rss.render(...)` and related view setting in `app.configure`

## More package and dependency
Heroku using `npm` to manage the dependency, and they need to managed in `package.json`

## More Worker
You need to change the `Procfile` according [heroku guide Sep 2011](http://devcenter.heroku.com/articles/node-js)
Also you need to scale the worker process.

## More Scale
In the scale process you need to change the parameter if you have more dyno, e.g. `heroku ps:scale web=2` 

## Some Note
* By default you need to scale process once ( `heroku ps:scale web=1` ), **changing file doesn't require to do the scaling again**
* MIME Type support made by express.js. if you need more, please reference to this [gist](https://gist.github.com/280361) for a mapping and do it on your own
