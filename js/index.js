var ProductImg = document.getElementById("ProductImg");
	var ViewImg = document.getElementsByClassName("viewImg");
	
	ViewImg[0].onclick = function () {
		ProductImg.src = ViewImg[0].src;
	}
	ViewImg[1].onclick = function () {
		ProductImg.src = ViewImg[1].src;
	}
	ViewImg[2].onclick = function () {
		ProductImg.src = ViewImg[2].src;
	}
	ViewImg[3].onclick = function () {
		ProductImg.src = ViewImg[3].src;
	}