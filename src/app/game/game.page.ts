import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: 'game.page.html',
  styleUrls: ['game.page.scss']
})
export class GamePage {

  public spoiler:any = {};
  public reponse = "";
  public bonne_reponse = "";
  public total = 0;
  public tentative = 0;
  public max_tentative = 3;
  public taille_partie = 10;
  public default_affiche = 'https://s3.amazonaws.com/storenvy/product_photos/112446/spoiler_alert_original.jpg';// 'http://i.imgrpost.com/imgr/2017/07/29/bond4.jpg';
  public past = 0;
  public affiche;
  private available = [];
  private apikey = "a733f160bd9f4737a83301a1f72af0c1";
  private start_date = 0;
  public duration = 0;
  public welcome = true;
  private donnee = [];

  constructor(
    private http: HttpClient
  ) {
  }

  public init(){
    this.welcome = false;
    this.available = [];
    this.start_date = Date.now();
    this.duration = 0;
    this.total = 0;
    this.past = 0;
    this.reponse = "";
    this.bonne_reponse = "Nouvelle partie";
    this.donnee = [
      {
        description: "... et à la fin, il se rend compte que son psy est mort",
        titre: "sixieme sens",
        titre_alternatif: "6ieme sens",
        id_allocine: 22092,
        id_themoviedb: 745,
        done: false
      },
      {
        description: "... et à la fin, les singes ne dominent pas le monde",
        titre: "La planète des singes",
        titre_alternatif: "",
        id_allocine: 29284,
        id_themoviedb: 871,
        done: false
      },
      {
        description: "... et à la fin, il perd wilson",
        titre: "Seul au monde",
        id_allocine: 27770,
        id_themoviedb: 8358,
        titre_alternatif: "cast away",
        done: false
      },
      {
        description: "... et à la fin, ils retrouvent le crimier.",
        titre: "RRRrrrr!!!",
        id_themoviedb: 21778,
        titre_alternatif: "",
        done: false
      },
      {
        description: "... et à la fin, il jette l'anneau dans le volcan.",
        titre: "Le seigneur des anneaux",
        affiche: "http://fr.web.img6.acsta.net/r_1920_1080/medias/nmedia/00/02/16/27/69218096_af.jpg",
        titre_alternatif: "",
        id_themoviedb: 123,
        done: false
      },
      {
        description: "... et à la fin, Lilou Dallas multipass.",
        titre: "Le cinquième élément",
        titre_alternatif: "",
        id_themoviedb: 18,
        done: false
      },
      {
        description: "... et à la fin, ils ont tous des noms de couleurs.",
        titre: "Reservoir dogs",
        titre_alternatif: "",
        id_themoviedb: 500,
        done: false
      },
      {
        description: "... et à la fin, il ne dit plus non.",
        titre: "Yes Man",
        id_themoviedb: 10201,
        titre_alternatif: "",
        done: false
      },
      {
        description: "... et à la fin, il n'a pas gâché Noël.",
        titre: "Le Grinch",
        id_themoviedb: 360920,
        titre_alternatif: "",
        done: false
      },
      {
        description: "... et à la fin, il se rend compte qu'il vit dans un film.",
        titre: "The Truman show",
        id_themoviedb: 37165,
        titre_alternatif: "",
        done: false
      },
      {
        description: "... et à la fin, il vit toujours la journée de la marmotte.",
        titre: "Un jour sans fin",
        id_themoviedb: 137,
        titre_alternatif: "",
        done: false
      },
      {
        description: "... et à la fin, ce n'était pas toutes des femelles.",
        titre: "Jurassic park",
        id_themoviedb: 329,
        titre_alternatif: "",
        done: false
      },
      {
        description: "... et à la fin, ils meurent tous connement.",
        titre: "Destination finale",
        id_themoviedb: 9532,
        titre_alternatif: "",
        done: false
      },
      {
        description: "... et à la fin, il reprend l'usine de friandises.",
        titre: "Charlie et la chocolaterie",
        id_themoviedb: 118,
        titre_alternatif: "",
        done: false
      },
      {
        description: "... et à la fin, il perd le black pearl.",
        titre: "Pirates des Caraïbes",
        id_themoviedb: 22,
        titre_alternatif: "",
        done: false
      },
      {
        description: "... et à la fin, le méchant se relève du milieu de la pièce.",
        titre: "SAW",
        id_themoviedb: 176,
        titre_alternatif: "",
        done: false
      },
      {
        description: "... et à la fin, il se rend compte qu'il est Tyler Durden.",
        titre: "Fight club",
        id_themoviedb: 550,
        titre_alternatif: "",
        done: false
      },
      {
        description: "... et à la fin, il s'arrête de boiter.",
        titre: "Usual suspects",
        id_themoviedb: 629,
        titre_alternatif: "",
        done: false
      }
    ];
    this.nextSpoiler();
  }

  public verify(){

    this.http.get("https://api.themoviedb.org/3/search/movie?api_key="+this.apikey+"&query="+this.reponse).subscribe(
      (reponse:any) => {
        console.log(reponse);
        let verify = false;
        reponse.results.slice(0,9).forEach((result) => {
          if(this.spoiler.id_themoviedb === result.id){
            verify = true;
          }
        });
        if(verify){
          this.total++;
          this.bonne_reponse = this.spoiler.titre;
          this.nextSpoiler();
        }
        else{
          this.bonne_reponse = "Mauvaise réponse... retente ta chance";
          this.checkTentative();
        }
      }
    )

  }

  private checkTentative(){
    if(this.tentative === this.max_tentative){
      this.nextSpoiler()
    }
    else{
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
    if(this.spoiler){
      this.spoiler.done = true;
      //on remplace l'affiche si existante
      if(!this.spoiler.id_themoviedb ){
        this.affiche = this.default_affiche;
      }
      else {
        this.http.get("https://api.themoviedb.org/3/movie/"+this.spoiler.id_themoviedb+"?api_key="+this.apikey).subscribe(
          (reponse: any) => {
            console.log(reponse);
            this.affiche = 'https://image.tmdb.org/t/p/w500'+ reponse.poster_path;
        });
      }
    }
    else{
      this.affiche = this.default_affiche;
    }


    this.available = this.donnee.filter((spoil) => {
      return !spoil.done;
    });
    this.tentative = 0;
    this.past++;
    if(this.available.length === 0 || this.past > this.taille_partie){
      this.end();
      return true;
    }
    this.reponse = "";
    this.findRandSpoiler();


  }

  private end(){
    this.duration = Math.floor( (Date.now() - this.start_date) / 1000 );
    this.spoiler = null;
  }

  ngOnInit(){
    this.welcome = true;
    this.affiche = this.default_affiche;
  }
}
