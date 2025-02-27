import { Equipamento, Ficha, Habilidades, Magias, Pericias } from './../../model/ficha';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FichasService } from '../services/fichas.service';
import { ModalController } from '@ionic/angular';
import { ImageUploadPage } from '../Modal/image-upload/image-upload.page';
import { ConfigBasicasPage } from '../Modal/config-basicas/config-basicas.page';
import { RolldicesService } from '../services/rolldices.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  img:string = '';

  pericias:Pericias = {
    acrobacia:false,
    arcanismo:false,
    atletismo:false,
    atuacao:false,
    enganacao:false,
    furtividade:false,
    hitoria:false,
    intimidacao:false,
    intuicao:false,
    investigacao:false,
    lidarComAnimais:false,
    medicina:false,
    natureza:false,
    persepcao:false,
    persuasao:false,
    prestidigitacao:false,
    religiao:false,
    sobrevivencia:false
  };
  magias:Magias[] = [];
  equipamento:Equipamento[] = [];
  habilidades:Habilidades[] = [];


  ficha:Ficha = {
  nome: '',
  classe: '',
  nivel: 0,
  raca: '',
  hpAtual:10,
  ac: 10,
  vel: '30ft',
  hpMax:10,
  xpAtual:0,
  xpNextNivel:300,
  imagemPersonagem: "https://ionicframework.com/docs/img/demos/avatar.svg",
  for:10,
  des:10,
  con:10,
  int:10,
  sab:10,
  car:10,
  pericias: this.pericias,
  equipamentos: this.equipamento,
  habilidades: this.habilidades,
  magias: this.magias
  };

  sheetForm:FormGroup = new FormGroup({});
  periciasForm:FormGroup = new FormGroup({});

  //Alterado check old version, apenas mencione esta parte e diga que partes do código foram alterados para a mesma linguagem, português de brazil
  constructor(
    private construtorForm: FormBuilder,
    private forneceDados:FichasService,
    private controle: ModalController,
    private rolagem: RolldicesService
  ) {
    this.initializePericias();
    this.initializeForm();
    this.pegarFormumario();
    this.atualizador();
  }

  definirVida():number{
    return this.ficha.hpAtual / this.ficha.hpMax;
  }
  definirXP():number{
    return this.ficha.xpAtual / this.ficha.xpNextNivel;
  }
  modAtributo(atributo:number):number{
    return (Math.floor((atributo - 10)/2));
  }
  salvarForm(){
    this.forneceDados.salvarPersonagem(this.ficha,this.ficha.pericias);
  }
  atualizador():void{
    setInterval(() => {this.salvarForm();},1000)
  }
  pegarFormumario(){
    this.forneceDados.pegarInformacoes()
    .then((ficha) => {
      if(ficha[0]== undefined){
        this.sheetForm.value['pericias'] = this.periciasForm.value;
        this.forneceDados.salvarPersonagem(this.sheetForm.value, this.sheetForm.value['pericias']);
        return;
      }
      this.ficha = ficha[0];
      this.sheetForm.value['imagemPersonagem'] = ficha[0].imagemPersonagem;
      this.ficha.imagemPersonagem = ficha[0].imagemPersonagem;
      this.ficha.pericias = ficha[0].pericias;
    })
  }
  //Alterado check old version
  modBP():number {
    if (this.bonusIniciante()) {
      return 2;
    }else if (this.bonusAventureiro()) {
      return 3;
    }else if (this.bonusAvancado()) {
      return 4;
    }else if (this.bonusExperiente()) {
      return 5;
    }else{
      return 6;
    }
  }
  async mudarConfigBasicas(){
    const modal = await this.controle.create({
      component: ConfigBasicasPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if(role == 'cancel')
      return;
    this.ficha.nome = data.nome;
    this.ficha.raca = data.raca;
    this.ficha.classe = data.classe;
    this.ficha.nivel = data.nivel;
    this.ficha.hpMax = data.maxHp;
    this.ficha.ac = data.ac;
    this.ficha.vel = data.vel;
    this.changeXpNextLevel();
   }

   changeXpNextLevel(){
    const xpPerNivel:number[] = [
      300,
      900,
      2700,
      6500,
      14000,
      23000,
      34000,
      48000,
      64000,
      85000 ,
      100000,
      120000,
      140000,
      165000,
      195000,
      225000,
      265000,
      305000,
      355000,
      355000
    ];
    this.ficha.xpNextNivel = xpPerNivel[this.ficha.nivel-1];
   }

  async mudarImagem(){
    const modal = await this.controle.create({
      component: ImageUploadPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if(role == 'cancel')
      return;
    this.ficha.imagemPersonagem = data.data;
    this.sheetForm.value['imagemPersonagem'] = data.data;
   }

   rolldice(treidado:boolean, atributo:number){
      const treinamento = this.modBP();
      if(treidado){
        this.rolagem.rolarDado('1d20',atributo + treinamento);
      } else {
        this.rolagem.rolarDado('1d20',atributo);
      }
   }

  initializePericias(){
    this.periciasForm = this.construtorForm.group({
      acrobacia:[false,[Validators.required]],
      arcanismo:[false,[Validators.required]],
      atletismo:[false,[Validators.required]],
      atuacao:[false,[Validators.required]],
      enganacao:[false,[Validators.required]],
      furtividade:[false,[Validators.required]],
      hitoria:[false,[Validators.required]],
      intimidacao:[false,[Validators.required]],
      intuicao:[false,[Validators.required]],
      investigacao:[false,[Validators.required]],
      lidarComAnimais:[false,[Validators.required]],
      medicina:[false ,[Validators.required]],
      natureza:[false,[Validators.required]],
      persepcao:[false,[Validators.required]],
      persuasao:[false,[Validators.required]],
      prestidigitacao:[false,[Validators.required]],
      religiao:[false,[Validators.required]],
      sobrevivencia:[false,[Validators.required]]
    });

  }
  initializeForm(){
    this.sheetForm = this.construtorForm.group({
      nome:['',[Validators.required]],
      classe:['',[Validators.required]],
      nivel:['',[Validators.required]],
      raca:['',[Validators.required]],
      hpAtual:[10,[Validators.required]],
      hpMax:[10,[Validators.required]],
      xpAtual:[0,[Validators.required]],
      xpNextNivel:[300,[Validators.required]],
      imagemPersonagem:["https://ionicframework.com/docs/img/demos/avatar.svg",[Validators.required]],
      for:[10,[Validators.required]],
      des:[10,[Validators.required]],
      con:[10,[Validators.required]],
      int:[10,[Validators.required]],
      sab:[10,[Validators.required]],
      car:[10,[Validators.required]],
      pericias:['',[Validators.required]],
    });
  }
  atualizarForm(){
    this.sheetForm.value['nome'] = this.ficha.nome;
    this.sheetForm.value['classe'] = this.ficha.classe;
    this.sheetForm.value['nivel'] = this.ficha.nivel;
    this.sheetForm.value['raca'] = this.ficha.raca;
    this.sheetForm.value['hpAtual'] = this.ficha.hpAtual;
    this.sheetForm.value['hpMax'] = this.ficha.hpMax;
    this.sheetForm.value['xpAtual'] = this.ficha.xpAtual;
    this.sheetForm.value['xpNextNivel'] = this.ficha.xpNextNivel;
    this.sheetForm.value['imagemPersonagem'] = this.ficha.imagemPersonagem;
    this.sheetForm.value['for'] = this.ficha.for;
    this.sheetForm.value['des'] = this.ficha.des;
    this.sheetForm.value['con'] = this.ficha.con;
    this.sheetForm.value['int'] = this.ficha.int;
    this.sheetForm.value['sab'] = this.ficha.sab;
    this.sheetForm.value['car'] = this.ficha.car;
    this.sheetForm.value['pericias'] = this.ficha.pericias;
  }
  criarForm(){
    this.ficha.hpAtual = this.sheetForm.value['hpAtual'];
    this.ficha.hpMax = this.sheetForm.value['hpMax'];
    this.ficha.xpAtual = this.sheetForm.value['xpAtual'];
    this.ficha.xpNextNivel = this.sheetForm.value['xpNextNivel']
    this.ficha.for = this.sheetForm.value['for'];
    this.ficha.des = this.sheetForm.value['des'];
    this.ficha.con = this.sheetForm.value['con'];
    this.ficha.int = this.sheetForm.value['int'];
    this.ficha.sab = this.sheetForm.value['sab'];
    this.ficha.car = this.sheetForm.value['car'];
    this.ficha.pericias = this.sheetForm.value['pericias'];
  }

  ngOnInit(){

  }
  
  bonusIniciante():boolean{
    return this.ficha.nivel <= 1 && this.ficha.nivel <= 4
  }
  bonusAventureiro():boolean{
    return this.ficha.nivel <= 5 && this.ficha.nivel <= 8
  }
  bonusAvancado():boolean{
    return this.ficha.nivel <= 9 && this.ficha.nivel <= 12
  }
  bonusExperiente():boolean{
    return this.ficha.nivel <= 13 && this.ficha.nivel <= 16
  }
}
