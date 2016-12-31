import IO from "koa-socket";
export default app => {
	const chat = new IO("chat");
	const UserCache = {};
	const qs = cookie => cookie.split("; ").reduce((oCookie, item) => {
		const cookie = item.split("=");
		oCookie[cookie[0]] = cookie[1];
		return oCookie;
	}, {});
	const getCookie = async (client, cookie) => JSON.parse(await client.get(`koa:sess:${qs(cookie)["koa.sid"]}`));
	const getId = id => id.split("#")[1];
	chat.attach(app);
	chat
		.on("connection", async ({socket}) => {
			try{
				const {
					user
				} = await getCookie(client, socket.handshake.headers.cookie),
				id = getId(socket.id);
				UserCache[id] = {
					user,
					head : `http://static.ikindness.cn/www/static/image/banner/${Math.ceil(Math.random()*6)}.jpg`
				};
				chat.broadcast("connections", {
					online : chat.connections.size,
					user,
					status : 1
				});
			}catch(e){}
		})
		.on("disconnect", ({socket}) => {
			const id = getId(socket.id),
			{
				user
			} = UserCache[id];
			delete UserCache[id];
			chat.broadcast("connections", {
				online : chat.connections.size,
				user,
				status : 0
			});
		})
		.on("message", ({socket, data}) => {
			const id = getId(socket.id),
			{
				user,
				head
			} = UserCache[id];
			app.chat.broadcast("message", {
				user,
				time : Date.now(),
				message : data,
				head
			});
		});
	return app;
};