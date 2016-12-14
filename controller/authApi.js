export default [
	{
		from : "/api/getNews",
		method : "get",
		async action({request, response}){
			response.body = await (await fetch("http://www.ikindness.cn/api/article/fetch")).json();
		}
	}
];