(function($) {
    $.fn.typewriter = function(options) {
        var settings = $.extend({
            prefix : "Prefix",
            text : ["Hey", "This is cool, isn't it?"],
            typeDelay : 200,
            waitingTime : 1000,
            callback : null,
            blinkSpeed : 1000
        }, options);

        return this.each(function() {
            var that = this;
            var domHtml = '';
            var totalLength = 0;

            for(var i = 0; i < settings.text.length; i++) {
                totalLength += settings.text[i].length;
            }

            $(this).append('<span id="typewriter-prefix"></span>');
            $(this).append('<span id="typewriter-text"></span>');
            $(this).append('<span id="typewriter-suffix">&#9608;</span>');

            $('#typewriter-prefix').html(settings.prefix);

            function appendCharacter(character) {
                $('#typewriter-text').html($('#typewriter-text').html() + character);
            }

            function removeCharacter() {
                var str = $('#typewriter-text').html();
                $('#typewriter-text').html(str.substring(0, str.length - 1));
            }

            setInterval(function() {
                $('#typewriter-suffix').animate({
                    opacity: 0
                }).animate({
                    opacity: 1
                });
            }, settings.blinkSpeed);

            var myWorker = new Worker("jquery.typewriter.worker.js");
            myWorker.postMessage(settings);
            myWorker.onmessage = function(e) {
                var data = e.data;
                if (data[0] === 0) {
                    appendCharacter(data[1]);
                } else {
                    removeCharacter();
                }
            };
            if ($.isFunction(settings.callback)) {
                settings.callback.call(this);
            }
        });
};
}(jQuery));

