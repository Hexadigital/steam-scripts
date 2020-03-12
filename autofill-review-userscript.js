// ==UserScript==
// @name Steam Review Autostart
// @namespace https://store.steampowered.com/
// @version 0.1
// @description Autofills beginning of review
// @match https://store.steampowered.com/app/*
// @copyright 2020, Frostflake
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
// How to use:
// 1. Install TamperMonkey
// 2. Install this script by visiting the js directly, or copy and pasting it into a new script in TamperMonkey
// 3. Replace "Text Goes Here" with the text you want to use
//
// What does it do:
// This script fills out the review box and checks the "allow comments" and "received for free" checkboxes
// upon loading a Steam Store page.
// 
// Why does it exist:
// I got sick of copy and pasting my formatting template for reviews.

var values = {
  game_recommendation: "Text Goes Here"
}

window.onload = function () {
    document.getElementById("game_recommendation").value = values.game_recommendation;
    document.querySelectorAll('input[type="checkbox"]').forEach(ele => ele.checked = true);
};
