var koa = require('koa');
var router = require('koa-router')();
var app = koa();
var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var head = require('./views/index');
var body = require('./views/body');


var header = head.head();
var title = body.title();
var document = React.createElement('html',{key: 'html'}, [header, title])

var home = function *(next){
     this.body = ReactDOMServer.renderToString(document)    
}

router.get('/', home);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
