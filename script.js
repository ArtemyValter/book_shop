// // alert('hello');
// let name='Artemy'
// console.log(name);
// let logo=document.querySelector('.header__logotype')
// console.log(logo)
// logo.style.width='50%'
let info=document.querySelector('.nav__info');
info.addEventListener('click',info__move);
let info__check=true
function info__move(){
    let square=document.querySelector('.body__information');
    if(info__check==true){
        square.style.top='50px';
        info__check=false


    }
    else{
        square.style.top='-300px';        
        info__check=true
     
    }
   

}
let buy=document.querySelector('.nav__buy')
buy.addEventListener('click',buy__move)
let buy__check=true
function buy__move(){
    let square=document.querySelector('.body__buy');
    if(buy__check==true){
        square.style.top='50px';
        buy__check=false


    }
    else{
        square.style.top='-300px';        
        buy__check=true
     
    }
   



}