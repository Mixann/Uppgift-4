function charRemove(character, text) {
  if(typeof character!="string" || typeof text!="string")
    return console.error("DU BEHÖVER HA TEXT I ARGUMENTEN")
   
  let result = text.replaceAll(character, "")
  console.log(result);
}