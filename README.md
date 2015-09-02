Helpful npm:
https://www.npmjs.com/package/website-scraper

````
var styles = document.styleSheets;
var styleRules = [];
for(var x = 0; x < styles.length; x++){
   if(styles[x].cssRules){
      styleRules.push(styles[x].cssRules);
   }
}
````