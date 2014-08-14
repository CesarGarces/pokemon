
function Pokemon(n,v,a,t){

	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.tipo = t;
}
function Inicio()
{	

	var pikachu = new Pokemon("Pikachu", 100, 50, "Electrico");
	var meowth = new Pokemon("Meowth", 100, 10, "Normal");

    	if (document.getElementById('meowth')){

		nombrePokemon.innerText = meowth.nombre;
		datosPokemon.innerText = "Vida: " + meowth.vida + "\nAtaque: " + meowth.ataque + "\nTipo: " + meowth.tipo;

	}else if (document.getElementById('pikachu')){
		nombrePokemon.innerText = pikachu.nombre;
		datosPokemon.innerText = "Vida: " + pikachu.vida + "\nAtaque: " + pikachu.ataque + "\nTipo: " + pikachu.tipo;
	}

	
	
}
