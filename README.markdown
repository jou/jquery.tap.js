Eavesdrop on jQuery (works like [Ruby's Object#tap][object-tap]).

Example:

Want to know what elements this affects?

    $('.foo').add('.bar').hide();

Tap into it!:

    $('.foo').add('.bar').tap(function() {
        console.log(this);
    }).hide();

[object-tap]: http://moonbase.rydia.net/mental/blog/programming/eavesdropping-on-expressions.html