function countChar(val) {
  const letterLenght = val.value.length;
  document.getElementById("charNum").innerHTML=letterLenght;
  
  const wordsArray = val.value.trim().split(/\s+/).filter(word => word.length > 0);
  document.getElementById("wordNum").innerHTML=wordsArray.length;
  
  const sentencesArray=val.value.split(/[.?!]/g).filter(Boolean).length;
  document.getElementById("sentenceNum").innerHTML=sentencesArray;
}
