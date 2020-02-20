// How to use:
// 1. Replace appid and curator_url with the appid of the app you want to remove, and your curator's URL.
// 2. In your browser, navigate to your curator's "Manage Reviews" page. (you need to be logged in for this)
// 3. Copy and paste everything below these comments into your browser's console.
//
// What does it do:
// This script removes your review for the given appid.
//
// Why does this exist:
// Trying to reach your oldest reviews can be impossible due to the clunky JavaScript used to load your reviews.
// In addition, removed games will not show in the review list but still count against the 2000 review limit.
// By using this script, you can remove older/non-existant reviews to have more room for newer games.

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

var appid = "123456";
var curator_url = "https://store.steampowered.com/curator/12345678-curatorname/";

var xhttp = new XMLHttpRequest(); 
xhttp.open("POST", curator_url + "admin/ajaxdeletereview/", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
var cookies = document.cookie;
xhttp.send("appid=" + appid + "&sessionid=" + getCookie("sessionid"));
