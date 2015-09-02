Helpful npm:
https://www.npmjs.com/package/website-scraper

````
var styles = document.styleSheets;
var ruleLists = [];
ruleStyles = [];
rulesTxt = "";
for(var x = 0; x < styles.length; x++){
   if(styles[x].cssRules){
      ruleLists.push(styles[x].cssRules);
   }
}


var i = 0;
while(i < ruleLists.length){
   
   for(var x = 0; x < ruleLists[i].length; x++){
      //ruleStyles.push(ruleLists[i][x].cssText);
      ruleStyles.push(ruleLists[i][x].style);

   }
   i++;
}


var i = 0;
while(i < ruleStyles.length){
  try{
    ruleStyles[i].cssText;
    rulesTxt += ruleStyles[i].cssText;
  }catch(e){

  }
  
  i++;
}

//console.log(rulesTxt);
//console.log(ruleStyles);
console.log(ruleLists);
````

Generating files through node:
http://stackoverflow.com/questions/11944932/how-to-download-a-file-with-node-js