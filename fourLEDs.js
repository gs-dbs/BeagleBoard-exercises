#!/usr/bin/env node
var b = require('bonescript');
var leds =    ["P9_11", "P9_13", "P9_15", "P9_17"];
var buttons = ["P9_12", "P9_14", "P9_16", "P9_18"];
var state = b.HIGH;

for(var i in leds) {
    b.pinMode(leds[i], b.OUTPUT);
}
for(var i in buttons) {
    b.pinMode(buttons[i], b.INPUT, 7, 'pulldown');
}

var state = b.LOW;
for(var i in leds) {
    b.digitalWrite(leds[i], state);
}

// setInterval(toggle, 1000);
for(var i in leds) {
    b.attachInterrupt(buttons[i], true, b.CHANGE, toggle);
}

console.log("Ready to go");

function toggle(led) {
    state = ~state;
    for(var i in leds) {
        b.digitalWrite(leds[i], state);
    }
}


// setInterval(blink, 250)
