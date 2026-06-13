"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var i=a(function(k,n){
var f=require('@stdlib/blas-ext-base-ssorthp/dist').ndarray;function x(e,r,s,t,y){return f(e,r,s,t,y)}n.exports=x
});var v=a(function(w,o){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=i();function l(e,r,s,t){return m(e,r,s,t,j(e,t))}o.exports=l
});var d=a(function(z,c){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),_=i();R(q,"ndarray",_);c.exports=q
});var h=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=d(),u,p=E(h(__dirname,"./native.js"));O(p)?u=b:u=p;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
