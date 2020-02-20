module.exports = function reverse (n) {
  let str='';
  arr=String(n).split('');
  if(arr[0]=='-'){
    for(let i = arr.length-1; i>=1; i--){
        str+=arr[i];
    }
  }
  else{
      for(let i = arr.length-1; i>=0; i--){
          str+=arr[i];
      }
    }
  return str;
}
