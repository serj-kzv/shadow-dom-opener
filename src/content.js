'use strict';

console.debug('start');

const main = () => {
    console.debug('start main');

    const script = document.createElement('script');

    console.debug(browser.runtime.getURL('user.js'));

    script.async = false;
    script.src = browser.runtime.getURL('./user.js');

    console.debug(script);

    (document.head || document.documentElement).appendChild(script);
    script.remove();

    console.debug('end main');
};

main();

console.debug('end');