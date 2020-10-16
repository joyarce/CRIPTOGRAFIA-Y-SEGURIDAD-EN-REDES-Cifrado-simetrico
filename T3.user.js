// ==UserScript==
// @name         T3
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tarea 3 - Criptografía y Seguridad en Redes
// @author       Jonathan Oyarce V.
// @match        http://localhost:8000/Blowfish-PCBC.html
// @require https://gist.githubusercontent.com/aylarov/08eff1bfccb7e0e87a2fef0df766f01c/raw/9c6d8ed3dbb6bafc76fb3c5a6bc5722a41f1f497/ECB_Blowfish.js
// @require https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/core-min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    var iv = document.getElementsByClassName('iv')[0].id;
    var bf = document.getElementsByClassName('Blowfish')[0].id;
    console.log('iv ' + iv);
    console.log('bf ' + bf);

    //decrypt
    var parsedWordArray = CryptoJS.enc.Base64.parse(iv);


    console.log("parsed:",parsedWordArray);





})();

