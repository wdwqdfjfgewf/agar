// ==UserScript==
// @name         Aghuz.io
// @version      1.0
// @author       AgustinC
// @match        http://agar.io/*
// @match        https://agar.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// ==/UserScript==

window.stop()
document.documentElement.innerHTML = null

GM_xmlhttpRequest({method: 'GET', url: 'https://ac-acecmx.rhcloud.com/agar',
  onload: function(r) {
    document.open()
    document.write(r.responseText)
    document.close()
  }
})
