//モジュール読み込み
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

//ミドルウェア設定
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//developmentモード用設定
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//ルーティング
app.get('/', routes.index);

//サーバー起動
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
