export interface Ficha {
  nome:string,
  classe:string,
  nivel:number,
  raca:string,
  hpAtual:number,
  ac:number,
  vel:string
  hpMax:number,
  xpAtual:number,
  xpNextNivel:number,
  imagemPersonagem:string,
  for:number,
  des:number,
  con:number,
  int:number,
  sab:number,
  car:number,
  pericias: Pericias,
  equipamentos:Equipamento[],
  habilidades:Habilidades[],
  magias:Magias[]
}

export interface Pericias{
  acrobacia:boolean,
  arcanismo:boolean,
  atletismo:boolean,
  atuacao:boolean,
  enganacao:boolean,
  furtividade:boolean,
  hitoria:boolean,
  intimidacao:boolean,
  intuicao:boolean,
  investigacao:boolean,
  lidarComAnimais:boolean,
  medicina:boolean,
  natureza:boolean,
  persepcao:boolean,
  persuasao:boolean,
  prestidigitacao:boolean,
  religiao:boolean,
  sobrevivencia:boolean
}

export interface Equipamento{
  nome_Equipamento:string,
  descricao:string,
  dano:string,
  alcance:string,
  propriedades:string
}

export interface Habilidades{
  nome_habilidade:string,
  tipo:string,
  usos:number,
  recarga:string,
  descricao:string,
}
export interface Magias{
  nome:string,
  circuloMagia:number,
  conjuracao:string,
  duracao:string,
  componentes:string,
  descricao:string,

}
