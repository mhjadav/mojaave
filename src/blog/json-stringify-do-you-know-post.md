---
title: "JSON.stringify — Do you know?"
layout: "base.njk"
---


<article>

# JSON.stringify — Do you know?

Last week i came across some of the wonderful uses of stringify method, i thought to share my learning here, If you are familiar with the javascript then you must have come across this method in at least one situation, so do you know how many different ways you can use this method, let’s explore some of the best uses of this method. yo, let’s dive in :) 1\. Convert javascript object or value to JSON string, Ok but what do you mean by that, let’s take an example -

<pre class="ie if ig ih ii ij ik il"><span id="ed94" class="gi im in fm io b do ip iq s ir" data-selectable-paragraph="">const obj = {a: 1, b: 2, c: 3}  
const objString = JSON.stringify(obj)  
const arr = [1,2,3]  
const arrString = JSON.stringify(arr);  
console.log('Object',objString) - Output - Object{"a":1,"b":2,"c":3}  
console.log('Array', arrString) - Output - Array[1,2,3]</span></pre>

Above example, you see the JSON <span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm">s</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>tring of the object and array, this is how we mostly use the **stringify** method. and there are couple of more things to this but today in this article I wanted to discuss the second point Let’s take look at other uses of this method — **2\. The second parameter of the method is replacer function** So the second parameter to the stringify method is array or function this is called replacer When used with an array — key passed in the array is used to filter out those values let’s say sometimes you just want to have some selected items in the resulted JSON string then you can use array replacer there like this -

<pre class="ie if ig ih ii ij ik il"><span id="1a72" class="gi im in fm io b do ip iq s ir" data-selectable-paragraph="">const obj = {a: 1, b: 2, c: 3}  
const objReplacer = JSON.stringify(obj, [“a”])  
console.log(“Replacer”,objReplacer)  
Output - Replacer {"a":1}</span></pre>

So you see on a is in out, you can use in such cases where you want to omit some items form the object. If stringify object is an array then that will not replace anything **Replacer function —** returned value from the function is used to set a new key-value and if returned undefined then that value is omitted.

<pre class="ie if ig ih ii ij ik il"><span id="7ef3" class="gi im in fm io b do ip iq s ir" data-selectable-paragraph="">function replacer(key, value) {  
 if (value > 2) {  
   return undefined;  
 }  
 return value;  
}  
var obj= {a: 1, b: 2, c: 34, d: 0, e: 20};  
const objFuncReplacer = JSON.stringify(obj, replacer);  
console.log(objFuncReplacer);  
Output - {"a":1,"b":2,"d":0}</span></pre>

So you see in the above code we are trying to stringify object with key and int value, but want to omit value > 2, and replacer function did that, you superb. But if we want to stringify array then in that case result is little different -

<pre class="ie if ig ih ii ij ik il"><span id="2ab2" class="gi im in fm io b do ip iq s ir" data-selectable-paragraph="">function replacer(key, value) {  
 if (value > 2) {  
   return undefined;  
 }  
 return value;  
}  
var arr=[1,2,34,0,20]  
const objFuncReplacer = JSON.stringify(arr, replacer);  
console.log(objFuncReplacer);  
Output - [1,2,null,0,null]</span></pre>

You see the difference in output, length of array remain the same only change values are replaced with a null value, so be aware of this difference when you convert array or object. 3\. **Third params are space — This accepts two types of value one is string and second is int.** If you pass string value then — this uses a number of the space character in to set that many spaces in successive level in the object, if you want to append any other character other then space you can do that too.

<pre class="ie if ig ih ii ij ik il"><span id="edd0" class="gi im in fm io b do ip iq s ir" data-selectable-paragraph="">const spaceObj = JSON.stringify({ a: 1, b: 2 }, null, "abcd");  
console.log(spaceObj);  
Output -   
{   
abcd"a": 1,   
abcd"b": 2   
}</span></pre>

If you want to add space char —

<pre class="ie if ig ih ii ij ik il"><span id="1d45" class="gi im in fm io b do ip iq s ir" data-selectable-paragraph="">const spaceObj = JSON.stringify({ a: 1, b: 2 }, null, "    ");  
console.log(spaceObj);  
Output -   
{       
    "a": 1,       
    "b": 2   
}</span></pre>

There is another way of doing this is — use tabs char

<pre class="ie if ig ih ii ij ik il"><span id="e070" class="gi im in fm io b do ip iq s ir" data-selectable-paragraph="">const spaceObj = JSON.stringify({  "a": 1,  "b": 2 }{ a: 1, b: 2 }, null, "\t");  
console.log(spaceObj);  
Output -  
{    
    "a": 1,    
    "b": 2   
}</span></pre>

You also can use int to add a number of space like -

<pre class="ie if ig ih ii ij ik il"><span id="a0c2" class="gi im in fm io b do ip iq s ir" data-selectable-paragraph="">const spaceObj = JSON.stringify({  "a": 1,  "b": 2 }{ a: 1, b: 2 }, null, 4);  
console.log(spaceObj);  
Output -  
{    
    "a": 1,    
    "b": 2   
}</span></pre>

Yes, that’s it for now, will share some more such info, I hope this info is useful to you, If yes like and share :) 
</div>
Thanks
</div>

</section>

</div>

Published on [Medium](https://medium.com/noon-academy/e2e-testing-with-cypress-bitbucket-pipelines-4ae19aca4d32)
</article>