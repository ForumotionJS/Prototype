/*
* - Prototype -
* Changelog:
* 04 June 2015: Initial release.
* =================== Description =====================
* Prototype would adds a few non-existing prototype in JavaScript to help you spice up things.
*/

Array.prototype.empty = function(arr) {
 for(var i=0; i<arr.length; i++) {
  arr.pop();
 if(typeof arr !== 'array') {
  console.error("No array detected.");
 }
};
