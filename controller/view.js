import {readFile} from "./util";
export default [
	{
		from : "*",
		async action({request, response}){
			try{
				response.body = await readFile("./static/index.html", "utf-8");
			}catch(e){
				console.log(e);
			}
		}
	}
].map(item => {
	item.method = "get";
	return item;
});