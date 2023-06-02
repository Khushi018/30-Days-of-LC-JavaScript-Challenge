/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    
    return nums.reduce(fn,init) ;
};
let fn = function sum(accum, curr)
{
    return accum + curr;
}