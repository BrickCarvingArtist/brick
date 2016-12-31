import {randomBytes} from "crypto";
import co from "co";
import OSS from "ali-oss";
import {OSS_CONFIG} from "../config";
const client = new OSS(OSS_CONFIG);
export default async ({buffer, originalname}) => {
	let code,
		url;
	try{
		url = (await co(client.put(`/static/image/brick/avator/${(await randomBytes(16)).toString("hex")}${originalname.replace(/.*(\..*)/, "$1")}`, buffer))).url;
		code = 0;
	}catch(e){
		console.log(e);
		code = 1;
	}
	return {
		code,
		url
	};
};