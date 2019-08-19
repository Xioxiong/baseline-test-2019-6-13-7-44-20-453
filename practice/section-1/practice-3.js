'use strict';

function collectSameElements(collectionA, objectB) {
  const b = objectB['value'];
  const temp = [];
  
  for(var i = 0;i<collectionA.length;i++){
    for(var j = 0;j<b.length;j++){
      if(collectionA[i] == b[j])
        temp.push(collectionA[i]);
    }
  }
  return temp;
}
