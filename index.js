var self = require('sdk/self');
var pageMod = require("sdk/page-mod")
// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
var preferences = require("sdk/simple-prefs").prefs;
var str = "something";
pageMod.PageMod({
	include:"https://erp.iitkgp.ernet.in/SSOAdministration*",
	contentScriptFile: ["./jquery-1.11.1.min.js" , "./my-script.js"],
	contentScriptOptions: {
		userid: preferences.userid,
		pwd: preferences.pwd,
		ques1: preferences.ques1,
		ques2: preferences.ques2,
		ques3: preferences.ques3,
		ans1: preferences.ans1,
		ans2: preferences.ans2,
		ans3: preferences.ans3
	}
	

});

