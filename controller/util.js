import fs from "fs";
import {resolve} from "path";
import {createRenderer} from "vue-server-renderer";
const promisify = fn => function(){
	return new Promise((resolve, reject) => fn(...arguments, (err, ...rest) => {
		err && reject(err);
		resolve(...rest);
	}));
};
export const readFile = promisify(fs.readFile);
export const renderToString = (() => {
	const {renderToString} = createRenderer();
	return app => {
		return new Promise((resolve, reject) => {
			renderToString(app, (err, data) => {
				err && reject(err);
				resolve(data);
			});
		});
	};
})();