/*!
 * ©2009 Jiayong Ou
 * 
 * License (MIT):
 * http://github.com/jou/jquery.tap.js/blob/master/LICENSE
 */
(function(){
    jQuery.fn.tap = function(fn /* [callback_arg], [callback_arg], [...] */) {
        var args = jQuery.makeArray(arguments);
        args.unshift();
        
        fn.apply(this, args);
        return this;
    };
}());