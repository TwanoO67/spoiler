import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ParseError } from '@angular/compiler';

@Component({
  selector: 'app-game',
  templateUrl: 'game.page.html',
  styleUrls: ['game.page.scss']
})
export class GamePage {

  public spoiler:any = null;
  public reponse = "";
  public total = 0;
  public tentative = 0;
  public max_tentative = 2;
  public taille_partie = 10;
  public default_affiche = 'https://s3.amazonaws.com/storenvy/product_photos/112446/spoiler_alert_original.jpg';// 'http://i.imgrpost.com/imgr/2017/07/29/bond4.jpg';
  public past = 0;
  public affiche;
  public loading = false;
  private available = [];
  private done = [];
  private apikey = "a733f160bd9f4737a83301a1f72af0c1";
  private urlapi = "http://localhost:4000/api/";
  private start_date = 0;
  public duration = 0;
  public step = "welcome";
  private last_result;
  private donnee = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    //chargement des données
    this.http.get(this.urlapi+"spoiler?filter=valid,eq,1").subscribe(
      (reponse:any) => {
        this.donnee = reponse;
      }
    );

  }

  public gotohome(){
    this.step = "welcome";
  }

  public init(){
    this.done = [];
    this.step = "welcome";
    this.available = [];
    this.start_date = Date.now();
    this.duration = 0;
    this.total = 0;
    this.past = 0;
    this.reponse = "";

    this.nextSpoiler();
  }

  public gotocreate(){
    this.router.navigate(['settings']);
  }

  public verify(){
    let verify = false;
    this.loading = true;
    if(this.reponse === ""){
      this.traiteReponse(verify);
    }
    else {
      this.http.get("https://api.themoviedb.org/3/search/movie?api_key="+this.apikey+"&query="+this.reponse).subscribe(
        (reponse:any) => {
          console.log(reponse);

          let verify = false;
          reponse.results.slice(0,9).forEach((result) => {
            if( parseInt(this.spoiler.id_themoviedb) === parseInt(result.id)){
              verify = true;
            }
          });
          this.traiteReponse(verify);
        }
      )
    }

  }

  public pass(){
    this.last_result = false;
    this.nextSpoiler();
  }

  public markAsDone(){
    if(this.spoiler){
      this.spoiler.done = true;
      this.spoiler.found_response = this.last_result;
      this.done.push(this.spoiler);
      console.log('done',this.spoiler);
    }
  }

  public loadNewThumbnail(){
    this.loading = true;
      //on remplace l'affiche si existante
      if(!this.spoiler.id_themoviedb ){
        this.affiche = this.default_affiche;
      }
      else {
        this.http.get("https://api.themoviedb.org/3/movie/"+this.spoiler.id_themoviedb+"?api_key="+this.apikey).subscribe(
          (reponse: any) => {
            console.log(reponse);
            this.affiche = 'https://image.tmdb.org/t/p/w500'+ reponse.poster_path;
            this.loading = false;
        });
      }
  }

  public traiteReponse(verify){
    this.last_result = verify;
    this.loading = false;
    if(verify){
      this.step = "good_answer";
      this.total++;
      this.loadNewThumbnail();
    }
    else{
      this.step = "wrong_answer";
    }
  }

  public checkTentative(){
    if(this.tentative === this.max_tentative){
      this.nextSpoiler()
    }
    else{
      this.step = "question";
      this.tentative++;
    }
  }

  private getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  private findRandSpoiler(){
    let rand = this.getRandomArbitrary(0, this.available.length - 1);
    this.spoiler = this.available[rand];
  }

  private nextSpoiler(){
    //on marque le spoiler comme vu
    this.markAsDone();
    this.step = "question";

    this.available = this.donnee.filter((spoil) => {
      return !spoil.done;
    });
    this.tentative = 0;
    if(this.available.length === 0 || this.past >= this.taille_partie){
      this.end();
      return true;
    }
    this.past++;
    this.reponse = "";
    this.findRandSpoiler();


  }

  private end(){
    this.step = "result";
    this.duration = Math.floor( (Date.now() - this.start_date) / 1000 );
    this.spoiler = null;
  }

  ngOnInit(){
    this.step = "welcome";
    this.affiche = this.default_affiche;
  }
}
