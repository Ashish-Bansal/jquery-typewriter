(function($) {
    $.fn.typewriter = function(options) {
        var settings = $.extend({
            prefix : "Prefix",
            add : ["Hey", "This is cool, isn't it?"],
            animation_time : 0.27,
            pause : 1500,
            callback : null,
            blinkSpeed : 200
        }, options);

        return this.each(function() {
            var that = this;
            var domHtml = '';
            var totalLength = 0;

            for(var i = 0; i < settings.add.length; i++) {
                totalLength += settings.add[i].length;
            }

            $(this).append('<span id="typewriter-prefix"></span>');
            $(this).append('<span id="typewriter-text"></span>');
            $(this).append('<span id="typewriter-suffix">&#9608;</span>');

            $('#typewriter-prefix').html(settings.initial);

            setInterval(function() {
                $('#typewriter-suffix').animate({
                    opacity: 0
                }).animate({
                    opacity: 1
                });
            }, settings.blinkSpeed);

            function appendCharacter(character) {
                $('#typewriter-text').html($('#typewriter-text').html() + character);
            }

            function removeCharacter() {
                var str = $('#typewriter-text').html();
                $('#typewriter-text').html(str.substring(0, str.length - 1));
            }

            var currentStringIndex = 0;
            var currentCharIndex = 0;
            var sInt = null, eInt = null;
            var once = false;
            (function start() {

                if (sInt !== null) {
                    clearInterval(sInt);
                    if (once === false) {
                        setTimeout(start, settings.pause);
                        once = true;
                        return;
                    }
                    once = false;
                    sInt = null;
                    eInt = setInterval(function() {
                        removeCharacter();
                    }, settings.animation_time);

                } else {
                    clearInterval(eInt);
                    eInt = null;
                    var currentString = settings.add[Math.floor(currentStringIndex/2)];
                    sInt = setInterval(function() {
                        appendCharacter(currentString.charAt(currentCharIndex));
                        currentCharIndex++;
                    }, settings.animation_time);
                }

                currentCharIndex = 0;
                setTimeout(start, settings.add[Math.floor(currentStringIndex/2)].length*settings.animation_time + settings.animation_time);
                currentStringIndex = (currentStringIndex+1)%(settings.add.length*2);
            })();

            if ($.isFunction(settings.callback)) {
                settings.callback.call(this);
            }
        });
    };
}(jQuery));

