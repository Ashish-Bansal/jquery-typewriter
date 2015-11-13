jQuery Typewriter Plugin
========================

Typewriter is a jQuery plugin which types text, erases and emulates terminal typing style.

####Usage

```
<div id="typewriter">

<script src="js/jquery.min.js"></script>
<script src="js/jquery.typewriter.js"></script>
<script src="js/jquery.typewriter.worker.js"></scirpt>
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
####Styling

You can style it very easily by applying CSS for following IDs

```
<style>
#typewriter {
    color: #31708f;
    background-color: #d9edf7;
    padding: 15px;
    border: none;
    ...
}

#typewriter-prefix {
    font-size: 24px;
    font-weight: 700;
    ...
}

#typewriter-text {
    font-size: 24px;
    font-weight: 500;
    ...
}
</style>
```
