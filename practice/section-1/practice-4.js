'use strict';

function collectSameElements(collectionA, objectB) {
  const a = [];
  for(var i=0;i<collectionA.length;i++){
    a.push(collectionA[i]['key']);
  }
  
  
  
  const b = objectB['value']


  const temp = [];
  for(var i = 0;i<a.length;i++){
    for(var j = 0;j<b.length;j++){
      if(a[i] == b[j])
        temp.push(a[i]);
    }
  }
  return temp;
  
}
