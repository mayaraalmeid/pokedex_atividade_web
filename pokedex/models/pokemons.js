
 class Pokemon  {
  constructor(id,  nome , img, pvMax , ataque , defesa , ataque_especial , defesa_especial , velocidade) {
      this.id = id;
      this.nome = nome;
      this.img = img; 
      this.pvMax = pvMax ;
      this.ataque= ataque;
      this.defesa= defesa;
      this.ataque_especial = ataque_especial;
      this.defesa_especial = defesa_especial;
      this.velocidade = velocidade;
  }
  
}
module.exports = Pokemon;
