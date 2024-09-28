class translator{
  constructor(from,to){
    this.from=from;
    this.to=to;
    this.get=(text,callback)=>{
      fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`)
      .then(res=>res.json())
      .then(res=>{callback(res.responseData.translatedText)})
      .catch(console.error);
    };
  }
}
