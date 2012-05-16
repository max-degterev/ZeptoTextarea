;(function($) {
    $.fn.textareaAutoGrow = function(options) {
        this.forEach(function(elem, index) {
            var el = $(elem),

                textarea = el.find('.mod-tag-textarea'),
                pusher = el.find('.mod-tag-pusher'),

                limited = el.hasClass('limited'),
                limit = textarea.attr('maxlength');
            
            var handleTextareaUpdate = function(e) {
                if (limited) {
                    this.value = this.value.trim().substring(0, limit);
                }

                var val = this.value.trim() || this.getAttribute('placeholder');
                pusher.text(val);
            };
            
            textarea.on('input keydown', handleTextareaUpdate);
            
            handleTextareaUpdate.call(textarea[0]);
        });
    };
})(Zepto);
