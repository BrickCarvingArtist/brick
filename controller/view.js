import {readFile} from "./util";
const route = [
	"/",
	"/signIn",
	"/signUp"
];
export {
	route
};
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