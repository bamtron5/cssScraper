Helpful npm:
https://www.npmjs.com/package/website-scraper

````
var styles = document.styleSheets;
var ruleLists = [];
ruleStyles = [];
rulesTxt = "";
ruleSets = {};
newCss = "";
for(var x = 0; x < styles.length; x++){
   if(styles[x].cssRules){
      ruleLists.push(styles[x].cssRules);
   }
}


var i = 0;
while(i < ruleLists.length){
   
   for(var x = 0; x < ruleLists[i].length; x++){
      if(!ruleSets[ruleLists[i][x].selectorText]){
         var curStyle = ruleLists[i][x].style;
         ruleSets[ruleLists[i][x].selectorText] = "";  
         try{
            curStyle.cssText;
            ruleSets[ruleLists[i][x].selectorText] = curStyle.cssText;
         }catch(e){
            
         }
      }

      
   }
   i++;
}

var ruleLength = Object.keys(ruleSets).length;

newCss += "<style>";

for(var x = 0; x < ruleLength; x++){
   var key = Object.keys(ruleSets)[x];
   newCss += key;
   newCss += "{";
   newCss += ruleSets[key];
   newCss += "}";
}

newCss += "</style>";

$('style, link').each(function(){
    $(this).remove();
});
$('head#Master_Head1').append(newCss);

//console.log(rulesTxt);
//console.log(ruleStyles);
//console.log(ruleLists);
//console.log(ruleSets);
````

Generating files through node:
http://stackoverflow.com/questions/11944932/how-to-download-a-file-with-node-js