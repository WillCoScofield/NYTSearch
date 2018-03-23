function nytSearch (term, callBack, limit, startY, endY) {
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	var param = {'q':term, 'api-key':'f898e5e4ca034e779782ca3a9dc59ae5'};
	if(limit) {};
	if(startY) {param.begin_date = startY+'0101'};
	if(endY) {param.end_date = endY+'1231'};
	url += '?' + $.param(param);
	$.ajax({
	url: url,
	method: 'GET',
	}).then(function(result) {
	callBack(result);
	})
}
