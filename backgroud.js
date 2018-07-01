// Author: Arac
// Github: @deeparac
// What for: automatically subtitute your arxiv links to the mirror sites, hence boost the loading time

String.prototype.splice = function(start, newStr) {
    return this.slice(0, start) + newStr + this.slice(start);
};

var mirror_identifier = "cn.";

var callback = function(details) { 
  var newUrl = mirro_identifier + details.url.substring(details.url.indexOf("arxiv"));
  return {redirectUrl: "cn.arxiv.org"};
};

var filter = {
  urls: [
    "*://arxiv.org/*",
    "*://www.arxiv.org/*"
  ]
};

var opt_extraInfoSpec = ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(
  callback, filter, opt_extraInfoSpec
);