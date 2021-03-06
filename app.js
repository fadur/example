var koa = require('koa');
var http = require('http'); 
var router = require('koa-router')();
var app = koa();
var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var head = require('./modules/head').head();
var title = require('./modules/body').title();


var document = React.createElement('html',{key: 'html'}, [head, title])
var home = function *(next){
     this.body = ReactDOMServer.renderToString(document)    
}


router.get('/', home);

app.use(router.routes());
app.use(router.allowedMethods());
http.createServer(app.callback()).listen(3000);
http.createServer(app.callback()).listen(3001);
