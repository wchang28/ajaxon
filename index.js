(function(global, factory) {
	module.exports = factory();
})(this, function() {
	function getAJaxon(jQuery) {
		// done (err, data)
		return (function (method, url, data, done, headers, rejectUnauthorized) {
			var settings = {
				type: method
				,url: url
			};
			if (data) {
				if (method === "POST" || method === "PATCH") {
					settings.contentType = 'application/json; charset=UTF-8';
					settings.data = JSON.stringify(data);
				} else if (method === "GET") {
					settings.data = data;
				}
			}
			if (headers) settings.headers = headers;
			if (typeof rejectUnauthorized === 'boolean') jQuery.ajax.defaults({rejectUnauthorized: rejectUnauthorized});
			jQuery.ajax(settings)
			.done(function(data) {
				if (typeof done === 'function') done(null, data);
			}).fail(function(err) {
				if (typeof done === 'function') done(err, null);
			});	
		});
	}
	return getAJaxon;
});



