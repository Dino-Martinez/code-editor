(this["webpackJsonpcode-editor"]=this["webpackJsonpcode-editor"]||[]).push([[99],{145:function(t,e,n){!function(t){"use strict";t.defineMode("sparql",(function(t){var e,n=t.indentUnit;function r(t){return new RegExp("^(?:"+t.join("|")+")$","i")}var i=r(["str","lang","langmatches","datatype","bound","sameterm","isiri","isuri","iri","uri","bnode","count","sum","min","max","avg","sample","group_concat","rand","abs","ceil","floor","round","concat","substr","strlen","replace","ucase","lcase","encode_for_uri","contains","strstarts","strends","strbefore","strafter","year","month","day","hours","minutes","seconds","timezone","tz","now","uuid","struuid","md5","sha1","sha256","sha384","sha512","coalesce","if","strlang","strdt","isnumeric","regex","exists","isblank","isliteral","a","bind"]),u=r(["base","prefix","select","distinct","reduced","construct","describe","ask","from","named","where","order","limit","offset","filter","optional","graph","by","asc","desc","as","having","undef","values","group","minus","in","not","service","silent","using","insert","delete","union","true","false","with","data","copy","to","move","add","create","drop","clear","load"]),o=/[*+\-<>=&|\^\/!\?]/;function a(t,n){var r=t.next();if(e=null,"$"==r||"?"==r)return"?"==r&&t.match(/\s/,!1)?"operator":(t.match(/^[A-Za-z0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][A-Za-z0-9_\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*/),"variable-2");if("<"!=r||t.match(/^[\s\u00a0=]/,!1)){if('"'==r||"'"==r)return n.tokenize=s(r),n.tokenize(t,n);if(/[{}\(\),\.;\[\]]/.test(r))return e=r,"bracket";if("#"==r)return t.skipToEnd(),"comment";if("^"===r)return"^"===(r=t.peek())?t.eat("^"):t.eatWhile(o),"operator";if(o.test(r))return t.eatWhile(o),"operator";if(":"==r)return c(t),"atom";if("@"==r)return t.eatWhile(/[a-z\d\-]/i),"meta";if(t.eatWhile(/[_\w\d]/),t.eat(":"))return c(t),"atom";var a=t.current();return i.test(a)?"builtin":u.test(a)?"keyword":"variable"}return t.match(/^[^\s\u00a0>]*>?/),"atom"}function c(t){t.match(/(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/i)}function s(t){return function(e,n){for(var r,i=!1;null!=(r=e.next());){if(r==t&&!i){n.tokenize=a;break}i=!i&&"\\"==r}return"string"}}function l(t,e,n){t.context={prev:t.context,indent:t.indent,col:n,type:e}}function d(t){t.indent=t.context.indent,t.context=t.context.prev}return{startState:function(){return{tokenize:a,context:null,indent:0,col:0}},token:function(t,n){if(t.sol()&&(n.context&&null==n.context.align&&(n.context.align=!1),n.indent=t.indentation()),t.eatSpace())return null;var r=n.tokenize(t,n);if("comment"!=r&&n.context&&null==n.context.align&&"pattern"!=n.context.type&&(n.context.align=!0),"("==e)l(n,")",t.column());else if("["==e)l(n,"]",t.column());else if("{"==e)l(n,"}",t.column());else if(/[\]\}\)]/.test(e)){for(;n.context&&"pattern"==n.context.type;)d(n);n.context&&e==n.context.type&&(d(n),"}"==e&&n.context&&"pattern"==n.context.type&&d(n))}else"."==e&&n.context&&"pattern"==n.context.type?d(n):/atom|string|variable/.test(r)&&n.context&&(/[\}\]]/.test(n.context.type)?l(n,"pattern",t.column()):"pattern"!=n.context.type||n.context.align||(n.context.align=!0,n.context.col=t.column()));return r},indent:function(t,e){var r=e&&e.charAt(0),i=t.context;if(/[\]\}]/.test(r))for(;i&&"pattern"==i.type;)i=i.prev;var u=i&&r==i.type;return i?"pattern"==i.type?i.col:i.align?i.col+(u?0:1):i.indent+(u?0:n):0},lineComment:"#"}})),t.defineMIME("application/sparql-query","sparql")}(n(3))}}]);
//# sourceMappingURL=99.8580189d.chunk.js.map