

if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
	
}

function ready() {
	var Remove = document.getElementsByClassName('remove')
	

	for (var i = 0; i < Remove.length; i++) {
		var button = Remove[i]
		button.addEventListener('click',removeItem)
		
	}
	var quantityInput = document.getElementsByClassName('cartQ')
	for (var i = 0; i < quantityInput.length; i++) {
		var input = quantityInput[i]
		input.addEventListener('change',Qchange)
		
	}
	var AddC = document.getElementsByClassName('add')

	for (var i = 0; i < AddC.length; i++) {
		var button = AddC[i]
		button.addEventListener('click', addclicked)
		
	}
	CartTotal()
	
}

function removeItem(event) {
	var buttonClicked = event.target
	buttonClicked.parentElement.parentElement.remove()
	CartTotal()

}

function Qchange(event) {
	var input = event.target
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1
	}
		CartTotal()
}

function addclicked(event) {
	var button = event.target
	var SHOP = button.parentElement.parentElement.parentElement.parentElement
	var title = SHOP.getElementsByClassName('card-title')[0].innerText
	var price = SHOP.getElementsByClassName('price')[0].innerText
	var imgSrc = SHOP.getElementsByClassName('card-img-top')[0].src
	/* console.log(title, price, imgSrc) */
	addcart(title, price, imgSrc)
	CartTotal()

}

function addcart(title, price, imgSrc){
	var cartRow = document.createElement('tr')
	cartRow.classList.add('cartR')
	var cartItems = document.getElementsByClassName('cartI')[0]
	var cartItemsN = cartItems.getElementsByClassName('cart-title')
	console.log(cartItemsN)

	for (var i = 0; i < cartItemsN.length; i++){
		if (cartItemsN[i].innerText == title){
			alert('This item has already been added')
			return
		}
	}
	var cartRowC = `<td>
	<div class="cart-item">
		<img src="${imgSrc}" alt="">

		<div>
			<span><p class="cart-title">${title}</p></span>
			<small>Price: <span class="cartP">${price}</span></small>
			<br>

		</div>
	</div>
</td>
<td><input class="cartQ" type="number" value="1"></td>
<td><a href="#" class="remove">Remove</a></td>`
	cartRow.innerHTML = cartRowC
	cartItems.append(cartRow)
	cartRow.getElementsByClassName('remove')[0].addEventListener('click',removeItem)
	cartRow.getElementsByClassName('cartQ')[0].addEventListener('click',Qchange)
	
}

for (var i = 0; i < Remove.length; i++) {
		var button = Remove[i]
		button.addEventListener('click',removeItem)
		
	}
 

	
 
	 



function CartTotal() {
	var CartI = document.getElementsByClassName('cartI')[0]
	var CartR = CartI.getElementsByClassName('cartR')
	var total = 0
	



	for (var i = 0; i < CartR.length; i++) {
		var CartRs = CartR[i]
		var priceElement = CartRs.getElementsByClassName('cartP')[0]
		var quantityElement = CartRs.getElementsByClassName('cartQ')[0]
		var Price = parseFloat(priceElement.innerHTML.replace('$', ''))
		var Quantity = quantityElement.value
	 	/* var a = document.getElementsByClassName('cartPI')[0].innerText
		var b = document.getElementsByClassName('cartPII')[0].innerText
		aa = 7.2
		bb = 10
		var aaa = aa + (aa * Quantity * 0.05)
		var bbb = bb + (bb * Quantity * 0.05) */
		total = total + (Price * Quantity) /*  + (aaa/3) + (bbb/3) */
		 /* console.log(aa)  */
		
		


	} 

	 total = Math.round(total*100)/100
	 /* aaa = Math.round(aaa*100)/100
	 bbb = Math.round(bbb*100)/100 */
	document.getElementsByClassName('cartt')[0].innerText = total
/* 	document.getElementsByClassName('cartPI')[0].innerText = aaa
	document.getElementsByClassName('cartPII')[0].innerText = bbb */

}

