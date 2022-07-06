

// like button


var like = document.getElementsByClassName('like');
for(let i = 0 ;i<like.length;i++){
    like[i].addEventListener('click',function(){
        like[i].classList.toggle('red');
    });
}



// increment 
var plus =document.getElementsByClassName('plus-btn');
for(let i =0 ; i<plus.length;i++){
    plus[i].addEventListener('click',function(){
        plus[i].previousElementSibling.value ++;
        total();
    })
}


// decrement
var minus = document.getElementsByClassName('minus-btn');
for(let i=0;i<minus.length; i++ ){
    minus[i].addEventListener('click',function(){
        
        if (minus[i].nextElementSibling.value ==1){
            minus[i].nextElementSibling.value = 1
        }else {
            minus[i].nextElementSibling.value--;
            total();
        }
    })
}


// delete 
var del = document.getElementsByClassName('delete');
for (let i = 0 ; i<del.length;i++){
    del[i].addEventListener('click',function(){
        del[i].parentElement.remove();
        total();

    })
}



// calculation 
var items = document.getElementsByClassName('Item');
var final = document.getElementById("finalPrice");

function total() {
    let s =0 ; 
    for (let i=0;i<items.length;i++){
        
        s += items[i].querySelector('.price').innerText * items[i].querySelector('.Quant').value;
    }
    return final.value = s ;
}