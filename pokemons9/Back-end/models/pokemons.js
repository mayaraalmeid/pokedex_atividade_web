
 class Pokemon  {
  constructor(id,  nome , img, pvMax , ataque , defesa , ataque_especial , defesa_especial , velocidade, tipo0, tipo1, peso, altura) {
      this.id = id;
      this.nome = nome;
      this.img = img; 
      this.pvMax = pvMax ;
      this.ataque= ataque;
      this.defesa= defesa;
      this.ataque_especial = ataque_especial;
      this.defesa_especial = defesa_especial;
      this.velocidade = velocidade;
      this.tipo0 = tipo0;
      this.tipo1 = tipo1;
      this.peso = peso;
      this.altura = altura;
  }
  
}
module.exports = Pokemon;
