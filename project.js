const btnCart=document.querySelector('#cart-open');
const Cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');



btnCart.addEventListener('click',()=>{
    Cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
    Cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
    loadContent();
}

function loadContent()
// remove food item
{
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);

    });

    // change Event
    let qtyElements=document.querySelectorAll('.cart-qu');
    qtyElements.forEach((input)=>{
        input.addEventListener('change',changeQty);

    });

    // product
    let cartbtn=document.querySelectorAll('.cart-bt');
    cartbtn.forEach((btn)=>{
        btn.addEventListener('click',addCart);
    });

   updateTotal();
}


// remove item
function removeItem(){
    if(confirm('Are you sure to remove')){
        let title=this.parentElement.querySelector
        ('.cart-food-title').innerHTML;
        itemList=itemList.filter(el=>el.title!=title);
    this.parentElement.remove();
    loadContent();
    }
}
//change qty
function changeQty(){
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    }
    loadContent();
}
let itemList=[]

 //add cart
 function addCart()
{
let food=this.parentElement;
let title=food.querySelector('.food-title').innerHTML;
let price=food.querySelector('.food-cost').innerHTML;
let imgSrc=food.querySelector('.food-img').src;
// console.log(title,price,imgSrc);
let newProduct={title,price,imgSrc}

// check product already exist in cart
if (itemList.find((el)=>el.title==newProduct.title))
{
    alert("product is alredy add in cart");
    return;
}else{
    itemList.push(newProduct);
}
let newProcductElement=createCartProduct(title,price,imgSrc);
let element=document.createElement('div');
element.innerHTML= newProcductElement;
let cartBasket=document.querySelector('.cart-content');

cartBasket.append(element);
loadContent();
// console.log(element);
}
 function createCartProduct(title,price,imgSrc){
    return(
    `<div class="cart-box">
            <img class="cart-img" src="${imgSrc}" alt="">
            <div class="detail-box">
                <div class="cart-food-title">${title}</div>
                <div class="price-box">
                    <div class="cart-price">${price}</div>
                    <div class="cart-amt">${price}</div>
                </div>
                <input type="number" value="1" class="cart-qu">
            </div>
            <i class="bi bi-trash3-fill cart-remove"></i>
        </div>`);
 }

function updateTotal()
{
    const cartItems=document.querySelectorAll('.cart-box');
    const totalValue=document.querySelector('.total-amount-cart');
    
    let total=0;

    cartItems.forEach(product=>{
        let priceElement=product.querySelector('.cart-price');
        let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
        let qty=product.querySelector('.cart-qu').value;
        total+=(price*qty);
        product.querySelector('.cart-amt').innerText="Rs."+price*qty;

        
    });
    totalValue.innerHTML='Rs.'+total;

    //add product count in cart icon
    const cartCount=document.querySelector('.cart-count');
    let count=itemList.length;
    cartCount.innerHTML=count;

    if(count==0)
    {
        cartCount.style.display='none';
    }else{
        cartCount.style.display='block';

    }


}





