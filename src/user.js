console.debug('started');

(function (attachShadow) {
    Element.prototype.attachShadow = function () {
        console.debug('is called');

        if (arguments[0].mode !== 'open') {
            arguments[0].mode = 'open';
        }

        return attachShadow.apply(this, arguments);
    };
})(Element.prototype.attachShadow);