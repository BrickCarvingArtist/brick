import fs from "fs";
import {resolve} from "path";
import {createRenderer} from "vue-server-renderer";
export const readFile = function(){
	return new Promise((resolve, reject) => {
		fs.readFile(...arguments, (err, data) => {
			err && reject(err);
			resolve(data);
		});
	});
};
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