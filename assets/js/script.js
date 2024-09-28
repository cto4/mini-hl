function render(val){
  window.two.value=val;
}
function lCode(lang){
  var code="";
  for(i=0;i<=2;i++){
    if(lang[i]!="-"){code+=lang[i]}
  } return code;
}
function translateIt(){
  var app=new translator(lCode(window.from.value),lCode(window.to.value));
  app.get(one.value,render);
}