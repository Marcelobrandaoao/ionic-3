import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo:"Hans-Hermann Hoppe",
    data:"Setembro de 1949 Alemanha",
    descricao:"Hans-Hermann Hoppe é um filósofo e economista libertário alemão-americano da escola austríaca, de tradição anarcocapitalista. É professor emérito de economia na Universidade de Nevada, Las Vegas, tendo se aposentado em 2008. Obteve seu PhD na Universidade de Frankfurt Johann Wolfgang Goethe, na Alemanha.",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment:"11h Ago"
  }
  public lista_filmes = new Array<any>();

    public nome_usuario:string = "Hans-Hermann Hoppe";  
    
    constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private movieProvider: MoovieProvider
      ) {
}

  public somaDoisNumeros(num1:number, num2:number): void {   
    // alert(num1+num2);                                      
}

  ionViewDidLoad() {  
    this.movieProvider.getLatesMovie().subscribe(
      data=> {
        const response = (data as any);       //transfomando a variavel data em um tipo "any" (qualquer coisa) (posso pegar o valor dele do jeito que eu quiser)
        const objeto_retorno = JSON.parse(response._body); // JSON.parse é para transformar esse valor txt "objeto_retorno" em um JSON
        this.lista_filmes = objeto_retorno.results;

        console.log(objeto_retorno);   
      }, error =>{
        console.log(error);
      }
    )
 }
}