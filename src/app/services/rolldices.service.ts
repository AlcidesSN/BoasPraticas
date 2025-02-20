import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RolldicesService {

  constructor(private alertController:AlertController) { }
  
  rolarDado(dado:string, modificador:number ){
    const qntDados:number = parseInt(this.quantidadeDeDados(dado,dado.indexOf("d")));
    const vdado:number = parseInt(this.valorDoDados(dado,dado.indexOf("d")));
    let resultadoDados:number = 0;
    let dadosRolados:number[] = []
    for (let index = 0; index < qntDados; index++) {
      dadosRolados[index] = Math.floor(1 +   Math.random() * vdado);
      resultadoDados += dadosRolados[index];
      console.log(dadosRolados[index])
    }
    let formula:string = '(';

    for (let index = 0; index < dadosRolados.length; index++) {
      if(index+1 == dadosRolados.length){
        formula += dadosRolados[index] + `) + ${modificador} ` +' = ';
      }else{
      formula += dadosRolados[index] + ' + ';
    }
    }
    const resultadoFinal = `${dado} + ${modificador}: ${formula} ${resultadoDados+modificador}`
    console.log(resultadoFinal);
    this.alertRoll(resultadoFinal);
  }
  async alertRoll(i:string){
    const alert = await this.alertController.create({
      header: 'Rolagem do dado',
      message: i,
      buttons: [
        {
          text: 'OK',
          role: 'OK'
        },
        
      ],
      });
      
    await alert.present();
   }
  private quantidadeDeDados(dado:string,a:number,):string{
    if(a <= 0){
      return '';
    }
    return this.quantidadeDeDados(dado,a-1) + dado[a-1];
  }

  private valorDoDados(dado:string,a:number,):string{
    return '' + dado.slice(a+1,dado.length);
  }
}
