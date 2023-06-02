/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function(arr, fn) {
   return  arr.map(fn) ;
};

function fn(n) {
    return n+1;
}