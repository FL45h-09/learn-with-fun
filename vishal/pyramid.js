// let i, j, k;
// k = 1;
// for(i= 1; i<=5; i++){ 
//     for(j=1; j<=i; j++){
//         // console.log(i);
//         document.write(k);
//         ++k;
//     }
//     document.write("<br>")
// }

// 7 spaces
//    *   
//   ***  
//  ***** 
// *******


let i, j, k, l, m;
l= 1;
// k = 1;
for(i = 4; i>=1; i--){
    for(j = 1; j<= 7; j++){
        if(i == j){
            // document.write("*");
            for(m = 1; m<= l; m ++){
                document.write("*");
            }
        }
    }
    document.write("<br>");
    l++;
}
