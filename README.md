Expressを使ったPCサイト、スマホサイトの振り分け
------------------------------------------

ユーザーエージェントはExpressでは以下のように取得できます。

	req.headers['user-agent']


indexOfメソッドでユーザーエージェントに含まれる文字列を取得してテンプレートを切り替えます。

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
