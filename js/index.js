var btnn = document.getElementById("btn");

	function btnClicked(){
		console.log("done");
		var a = document.getElementsByClassName("test");
		var b = document.getElementById("price");
		b.innerHTML= "hello, " + a[0].value;
		console.log(a);
	}


	btnn.addEventListener("click", btnClicked);