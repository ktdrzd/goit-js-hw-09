document.addEventListener("DOMContentLoaded",(function(){function e(e,n){return new Promise((function(t,o){var a=Math.random()>.3;setTimeout((function(){a?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var t=parseInt(this.elements.delay.value),o=parseInt(this.elements.step.value),a=parseInt(this.elements.amount.value);isNaN(t)||isNaN(o)||isNaN(a)?alert("Please enter valid numbers for delay, step, and amount."):function(n,t,o){for(var a=1;a<=n;a++)e(a,t+(a-1)*o).then((function(e){var n=e.position,t=e.delay;console.log("Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("Rejected promise ".concat(n," in ").concat(t,"ms"))}))}(a,t,o)}))}));
//# sourceMappingURL=03-promises.1d9fc4c1.js.map