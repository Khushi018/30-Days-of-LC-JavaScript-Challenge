/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    return arr.filter(fn) ;
};
function fn(n) {
    return n > 10 ;
}