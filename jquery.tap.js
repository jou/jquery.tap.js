(function(){
    jQuery.fn.tap = function(fn /* [callback_arg], [callback_arg], [...] */) {
        var args = jQuery.makeArray(arguments);
        args.unshift();
        
        fn.apply(this, args);
        return this;
    };
}());