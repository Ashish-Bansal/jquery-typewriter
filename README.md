jQuery Typewriter Plugin
========================

Typewriter is a jQuery plugin which types text, erases and emulates terminal typing style.

####Usage

```
<div id="typewriter">

<script src="js/jquery.min.js"></script>
<script src="js/jquery.typewriter.js"></script>

<script>
$(document).ready(function() {
    $("#typewriter").typewriter({
        prefix : "Prefix : ",
        text : ["Hey", "this", "is", "cool", "isn't it ?"],
        typeDelay : 200,
        waitingTime : 1000,
        blinkSpeed : 1000
    });
});
```

