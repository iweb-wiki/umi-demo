// void bubble(int r[n]) {
//     for(i=1; i<=n-1; i++){
//     for(exchange=0, j=0; j< ____________ ; j++)
//     if(r[j]>r[j+1]){
//     temp=r[j+1]; ____________ ;
//     r[j]=temp; exchange=1;
//     }
//     if (exchange==0) return;
//     }
//     }

function bubble(arr) {
  // for(i=1; i<=n-1; i++){
  // for(exchange=0, j=0; j< ____________ ; j++)
  // if(r[j]>r[j+1]){
  // temp=r[j+1]; ____________ ;
  // r[j]=temp; exchange=1;
  // }
  // if (exchange==0) return;
  // }
  // }
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 0, exchange = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = r[j + 1];
        r[j] = temp;
        exchange = 1;
      }
      if (exchange == 0) return;
    }
  }
}
