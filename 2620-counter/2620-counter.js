/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let i = -1;
    return function() {
        i = i + 1;
        return i + n;
        
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */