// Our library that we may want to debug
window.awesome = {
    doAwesomeStuff: function() {
        var ImDoingStuff = "I'm Doing Stuff";
    },

    fireTimelineDemo: function() {
        var $example6Target = $('#example7Target');

        for(var i = 0; i < 9999; i++) {
            $example6Target.append('<span>' + i + '</span>');
        }
    }
};