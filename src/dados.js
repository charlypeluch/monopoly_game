function Dados()
{
	this.dado1 = 0
	this.dado2 = 0
	this.resultado = 0
	
	//Retorna un entero aleatorio entre min (incluido) y max (excluido)
	this.tirarDados = function ()
	{
		this.dado1 = Math.floor(Math.random() * (7 - 1)) + 1;
		this.dado2 = Math.floor(Math.random() * (7 - 1)) + 1;
		this.resultado = this.dado1 + this.dado2
	}
	
	this.esDoble = function ()
	{
		return (this.dado1 == this.dado2)?true:false;
	}
}