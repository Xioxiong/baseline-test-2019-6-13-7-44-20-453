'use strict';

function collectSameElements(collectionA, collectionB) {
  const temp = [];
  const b = collectionB[0];

  for(var i = 0;i<collectionA.length;i++){
    for(var j = 0;j<b.length;j++){
      if(collectionA[i] == b[j])
        temp.push(collectionA[i]);
    }
  }
  return temp;
}
