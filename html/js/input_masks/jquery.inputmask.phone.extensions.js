!function(n){return n.extend(n.inputmask.defaults.aliases,{phone:{url:"phone-codes/phone-codes.js",countrycode:"",mask:function(e){e.definitions["#"]=e.definitions[9];var o=[];return n.ajax({url:e.url,async:!1,dataType:"json",success:function(n){o=n},error:function(n,o,r){alert(r+" - "+e.url)}}),o=o.sort(function(n,e){return(n.mask||n)<(e.mask||e)?-1:1})},keepStatic:!1,nojumps:!0,nojumpsThreshold:1,onBeforeMask:function(n,e){var o=n.replace(/^0/g,"");return(o.indexOf(e.countrycode)>1||-1==o.indexOf(e.countrycode))&&(o="+"+e.countrycode+o),o}},phonebe:{alias:"phone",url:"phone-codes/phone-be.js",countrycode:"32",nojumpsThreshold:4}}),n.fn.inputmask}(jQuery);