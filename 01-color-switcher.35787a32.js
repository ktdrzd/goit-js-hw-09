document.addEventListener("DOMContentLoaded",(function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");e.addEventListener("click",(function(){e.disabled=!0,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3)})),n.addEventListener("click",(function(){e.disabled=!1,clearInterval(t),document.body.style.backgroundColor=""}))}));
//# sourceMappingURL=01-color-switcher.35787a32.js.map