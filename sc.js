// ==UserScript==
// @name         M&M
// @namespace    https://facebook.com/ahaiix/
// @version      1.0
// @description  Ung Ho AHX
// @author       AHX
// @match        choi.one
// @grant        none
// @run-at       document-end
// ==/UserScript==
// PW
var ps;
var ps1 = "trial";
var ps2 = "no0";
var ps3 = "no1";
var ps4 = "no2";
ps=prompt('Nháº­p key Ä‘á»ƒ Ä‘Äƒng nháº­p!.\n\ná»¦ng há»™ Ä‘á»ƒ duy trĂ¬ server!.\nhttps://www.facebook.com/ahaiix/',' ');
if (ps==ps1 || ps==ps2 || ps==ss3 || p==ps4)
  alert('ÄÄƒng nháº­p thĂ nh cĂ´ng!');
else
   {
    window.location="https://choi.one/";
    }
// BG
(function() {
'use strict';
var New = '#000000';
var old_fillRect = CanvasRenderingContext2D.prototype.fillRect;
CanvasRenderingContext2D.prototype.fillRect = function() {
    var x = arguments[0];
    var y = arguments[1];
    var w = arguments[2];
    var h = arguments[3];
    if (x==0 && y==0 && w==this.canvas.width && h==this.canvas.height) {
        if (this.fillStyle == '#f2fbff') // new bg
            this.fillStyle = New;
    }
    return old_fillRect.apply(this, arguments);
};
var old_fillText = CanvasRenderingContext2D.prototype.fillText;
CanvasRenderingContext2D.prototype.fillText = function() {
    if (arguments[0]=='Leaderboard')
        arguments[0] = 'đŸŒ¸ AHX'
    return old_fillText.apply(this, arguments);
};
})();
// MM
(function() {
    var amount = 10;
    var duration = 0; //ms
    var overwriting = function(evt) {
        if (evt.keyCode === 81) { // KEY_Q
            for (var i = 0; i < amount; ++i) {
                setTimeout(function() {
                    window.onkeydown({
                        keyCode: 87
                    }); // KEY_W
                    window.onkeyup({
                        keyCode: 87
                    });
                }, i * duration);
            }
        }
    };
    window.addEventListener('keydown', overwriting);
})();
window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
(function() {
    var amount = 25;
    var duration = 0; //ms
    var overwriting = function(evt) {
        if (evt.keyCode === 69) { // KEY_E
            for (var i = 0; i < amount; ++i) {
                setTimeout(function() {
                    window.onkeydown({
                        keyCode: 87
                    }); // KEY_W
                    window.onkeyup({
                        keyCode: 87
                    });
                }, i * duration);
            }
        }
    };
    window.addEventListener('keydown', overwriting);
})();
window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
// M
window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
var Feed = false;
var Dingus = false;
var imlost = 25;
var z = "M&M";
var x = "AHX";
var c = "NHáº¤N VĂ€O";
var v = "FACEBOOK";
var i = document.getElementById("instructions");

i.innerHTML += "<center><span class='text-muted'><span data-itr='instructions_e'> <b>" + z.fontcolor("red") + "</b></span></span></center>";
i.innerHTML += "<center><span class='text-muted'><span data-itr='instructions_e'> <b>" + x.fontcolor("Fuchsia") + "</b></span></span></center>";
i.innerHTML += "<center><span class='text-muted'><span data-itr='instructions_e'> <b>" + v.fontcolor("dodgerblue") + " " + c.link("https://www.facebook.com/ahaiix/") + "</b></span></span></center>";
load();
function load() {
    if (document.getElementById("overlays").style.display!="none") {
        document.getElementById("settings").style.display = "block";
        // Nthng
    } else {
        setTimeout(load, 100);
    }
}
function keydown(event) {
    if (event.keyCode == 87) {
        Feed = true;
        setTimeout(fukherriteindapussie, imlost);
    } // T (D)
    if (event.keyCode == 68 || event.keyCode == 51) {
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
    } // D (A)
    if (event.keyCode == 65 || event.keyCode == 50) {
        ilikedick();
        setTimeout(ilikedick, imlost*2);
    } // S
    if (event.keyCode == 49) {
        ilikedick();
    }// F
}
function keyup(event) {
    if (event.keyCode == 87) {
        Feed = false;
    }
    if (event.keyCode == 79) {
        Dingus = false;
    }
}
// F Wh W
function fukherriteindapussie() {
    if (Feed) {
        window.onkeydown({keyCode: 87});
        window.onkeyup({keyCode: 87});
        setTimeout(fukherriteindapussie, imlost);
    }
}
function ilikedick() {
    $("body").trigger($.Event("keydown", { keyCode: 32}));
    $("body").trigger($.Event("keyup", { keyCode: 32}));
}
// $%^
