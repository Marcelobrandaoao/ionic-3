import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//@injectable = é para ser usada em outra classe (alguma pagina vai chamar esse pagina)

@Injectable()
export class MoovieProvider {
  private baseApiPath ="https://api.themoviedb.org/3/";
  
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  } 
  getLatesMovie(){
    return this.http.get(this.baseApiPath + "movie/popular?api_key=62a96de2c87d339c2fff15232315a618"); 
  }
}
