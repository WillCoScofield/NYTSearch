function nytSearch (term, callBack) {
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "f898e5e4ca034e779782ca3a9dc59ae5",
  'q': term
});
$.ajax({
  url: url,
  method: 'GET',
}).then(function(result) {
  callBack(result);
})
}
