onmessage = function(e) {
    self.currentStringIndex = 0;
    self.currentCharIndex = 0;
    self.settings = e.data;
    self.sInt = null;
    self.eInt = null;
    self.once = false;
    start();
};

function start() {
    if (self.sInt !== null) {
        clearInterval(sInt);
        if (once === false) {
            setTimeout(start, settings.waitingTime);
            once = true;
            return;
        }
        once = false;
        sInt = null;
        eInt = setInterval(function() {
            var data = [];
            data[0] = 1;
            postMessage(data);
        }, settings.typeDelay);

    } else {
        clearInterval(eInt);
        eInt = null;
        var currentString = settings.text[Math.floor(currentStringIndex/2)];
        sInt = setInterval(function() {
            var data = [];
            data[0] = 0;
            data[1] = currentString.charAt(currentCharIndex);
            postMessage(data);
            currentCharIndex++;
        }, settings.typeDelay);
    }

    currentCharIndex = 0;
    setTimeout(start, settings.text[Math.floor(currentStringIndex/2)].length*settings.typeDelay + settings.typeDelay);
    currentStringIndex = (currentStringIndex+1)%(settings.text.length*2);
}
