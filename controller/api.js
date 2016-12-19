import fetch from "node-fetch";
const User = {};
export default [
	{
		from : "/api/checkUser",
		method : "get",
		action({request, response}){
			response.body = do{
				if(User[request.query.user]){
					({
						code : 0,
						message : "用户名已被注册"
					});
				}else{
					({
						code : 1,
						message : "合法用户名"
					});
				}
			}
		}
	},
	{
		from : "/api/signUp",
		method : "post",
		action({request, response, session}){
			const {
				user,
				password
			} = request.fields;
			if(User[user]){
				return response.body = {
					code : 1,
					message : "用户名已被注册"
				};
			}
			User[user] = password;
			session.user = user;
			response.body = {
				code : 0,
				message : "注册成功"
			};
		}
	},
	{
		from : "/api/signIn",
		method : "post",
		action({request, response, session}){
			const {
				user,
				password
			} = request.fields;
			if(session.user === user){
				return response.body = {
					code : 1,
					message : "您已登录"
				};
			}
			const isAuth = +(User[user] === password);
			isAuth && (session.user = user);
			response.body = {
				code : isAuth^1,
				data : user,
				message : ["用户名或密码错误", "登录成功"][isAuth]
			};
		}
	},
	{
		from : "/api/isAuth",
		method : "get",
		action({response, session}){
			response.body = do{
				if(session.user){
					({
						code : 0,
						message : "authed"
					})
				}else{
					({
						code : 1,
						message : "not authed"
					})
				}
			}
		}
	},
	{
		from : "/api/getNews/:index",
		method : "get",
		async action({request, params, response}){
			response.body = await (await fetch(`http://www.ikindness.cn/api/article/fetch?index=${params.index}`)).json();
		}
	}
];