

function criptografar(){

	document.querySelector(".retangulo").style.diplay = "none";
	
	document.querySelector(".text2").style.color = "#495057";

	document.querySelector("#img").style.display = "none";
	
	document.querySelector(".botaoCopiar").style.border = "1px solid black";
	
	document.querySelector(".textCopiar").style.color = "black";

	document.querySelector("#frame5").style.display = "none";

	document.querySelector("#ptexto2").style.display = "flex";

	document.querySelector("#lk").style.display = "none";
	
	var textoOriginal = document.querySelector(".entrada");
	var texto = textoOriginal.value;
	
	var retorno = texto.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
	
	document.querySelector(".text2").innerHTML = retorno;

}

function Descriptografar(){

	document.querySelector(".retangulo").style.diplay = "none";
	
	document.querySelector(".text2").style.color = "#495057";

	document.querySelector("#img").style.display = "none";
	
	document.querySelector(".botaoCopiar").style.border = "1px solid black";
	
	document.querySelector(".textCopiar").style.color = "black";

	document.querySelector("#frame5").style.display = "none";

	document.querySelector("#ptexto2").style.display = "flex";

	document.querySelector("#lk").style.display = "none";

	var textoOriginal = document.querySelector(".entrada");
	var texto = textoOriginal.value;
	
	
	var retorno2 = texto.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
	document.querySelector(".text2").innerHTML = retorno2;
}

var input = document.querySelector(".entrada");

input.addEventListener("keypress", function(e) {
    if(!checarCaractere(e)) {
      e.preventDefault();
  }
});

function checarCaractere(e) {
    var char = String.fromCharCode(e.keyCode);
    var pattern = '[a-z ]+';
    if (char.match(pattern)) {
      return true;
  	}
}	

function copiarTexto() {
	const textInput = document.getElementById('ptexto2');
	textInput.select();
	document.execCommand('copy');
	textInput.innerHTML = "";
	

	
}






