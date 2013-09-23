Expressを使ったPCサイト、スマホサイトの振り分け
------------------------------------------

ユーザーエージェントはExpressでは

	req.headers['user-agent']

で取得できます。

	exports.index = function(req, res){

		//ユーザーエージェント取得
		var ua = req.headers['user-agent'].toLowerCase();

		//テンプレート切り替え
		if(ua.indexOf("android") != -1 || ua.indexOf("iphone") != -1 || ua.indexOf("ipod") != -1){
			//スマートフォン用テンプレート
			res.render('index_m', { title: 'スマートフォンサイト' });
		}
		else{
			//PC用テンプレート
			res.render('index', { title: 'PCサイト' });
		}

	};

