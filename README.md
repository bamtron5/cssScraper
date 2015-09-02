Helpful npm:
https://www.npmjs.com/package/website-scraper


````
ignoreCss = [
   "/images/common/css/bootstrap/v2.2.2/css/bootstrap-noconflict.css",
   "//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css",
   "/images/common/js/selectbox/jquery.selectbox.css?v2"
];

var newCss = "";

$('link[rel="stylesheet"]').each(function(){
   var cur = $(this);
   var href = $(cur).attr('href');
   var includeCss = true;
   for(var x = 0; x < ignoreCss.length; x++){
     if(href.indexOf(ignoreCss[x]) > -1){
        includeCss = false;
        break;
     }
   }
   if(includeCss){
      $.when($.get(href))
         .done(function(response) {
            newCss += response;
         }
      );
   }
});

newCss += "/* ";
newCss += "BEGIN styletags for " + location.href;
newCss += " */";

$('style').each(function(){
   newCss += $(this)[0].textContent;
});

newCss += "/* ";
newCss += "END styletags for " + location.href;
newCss += " */";

function removeOldCss(){
   $('link[rel="stylesheet"]').each(function(){
      var removeCss = true;
      for(var x = 0; x < ignoreCss.length; x++){
        if($(this).attr('href').indexOf(ignoreCss[x]) > -1){
           removeCss = false;
           break;
        } else {
           removeCss = true;
        }
      }

      if(removeCss){
         $(this).remove();
      }
   });
}

newCss.replace(/(\r\n|\n|\r)/g,"");

function addNewCss(){
   $('head').append("<style id='newStyle'>" + newCss + "</style>");
   console.clear();
   console.log(newCss);
}
````

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
            ruleSets[ruleLists[i][x].selectorText] += curStyle.cssText;
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

var keepStyle = 'bootstrap';

$('style, link').each(function(){
    if($(this).attr('href') && $(this).attr('href').indexOf(keepStyle) > -1){
       null;
    } else {
       $(this).remove();
    }
});
$('head#Master_Head1').append(newCss);

//console.log(rulesTxt);
//console.log(ruleStyles);
//console.log(ruleLists);
console.log(ruleSets);
````

Generating files through node:
http://stackoverflow.com/questions/11944932/how-to-download-a-file-with-node-js