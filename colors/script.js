var i=0;
let arr=['red','green','yellow','orange'];
const divEl=document.querySelector('div');
const btnEl=document.querySelector('button');
btnEl.addEventListener('click',()=>{
    for( i=0;i<arr.length;i++){
        divEl.style.backgroundColor="arr[i]";
      
console.log(arr[i]);
}
});