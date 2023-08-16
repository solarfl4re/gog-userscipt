// ==UserScript==
// @name        Hide mouse-over pop-ups for games - gog.com
// @namespace   imyavetra
// @match       https://www.gog.com/*
// @grant       none
// @version     1.0
// @author      imyavetra
// @description 8/16/2023, 3:50:31 AM
// ==/UserScript==


s = document.createElement('style')
s.innerText = "product-tile-extended-portal { display: none !important; }"
document.getElementsByTagName('head')[0].appendChild(s)
