/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let cur = init;
    function increment() {
        return ++cur;
    }
    function decrement(){
            return --cur;
    }
    function reset() {
            cur = init;
            return init;
    }
    return {
    increment, decrement, reset
    };
};


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */