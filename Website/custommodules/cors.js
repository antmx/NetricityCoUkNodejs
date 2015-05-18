
/**
 * Module dependencies.
 */

//var utils = require('./utils');

/**
 * Initialization cors, setting the CORS header field.
 *
 * @param {Function} app
 * @return {Function}
 * @api private
 */

exports.init = function (app) {
	return function corsInit(req, res, next) {
		if (app.enabled('cors')) {
			res.setHeader('x-cors', 'true');
		}
		
		next();
	}
};
