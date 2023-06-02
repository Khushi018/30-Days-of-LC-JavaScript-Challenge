/**
 * @return {Function}
 */
var createHelloWorld = function() {
    let khushi = "Hello World" ;
    return function(...args) {
        return khushi;
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */