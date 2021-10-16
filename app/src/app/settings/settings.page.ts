import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
//API http://test.weberantoine.fr/SPOILER/api.php/records/spoiler
//https://phpmyadmin.ovh.net/db_structure.php?server=1&db=weberantspoiler&table=spoiler
export class SettingsPage {

  public titre = "";
  public movies = [];
  private movie = "";
  private apikey = "a733f160bd9f4737a83301a1f72af0c1";
  private urltmdb = "https://api.themoviedb.org/3/";
  private urlapi = "http://test.weberantoine.fr/SPOILER/api.php/";
  public spoiler: any = {};
  public step = 'title';
  public loading = false;
  public error = "";
  private donnee = [];
  public affiche = 'https://s3.amazonaws.com/storenvy/product_photos/112446/spoiler_alert_original.jpg';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  public ngOnInit(){
    this.init();
    this.http.get(this.urlapi+"records/spoiler?filter=valid,eq,1",this.spoiler).subscribe(
      (reponse:any) => {
        this.donnee = reponse.records;
      }
    );
  }

  public gotohome(){
    this.router.navigate(['home']);
  }

  public newspoil(){
    this.init();
    this.step = 'title';
  }

  public init(){
    this.loading = false;
    this.titre = '';
    this.spoiler = {
      description: "...et à la fin, "
    };
  }

  public search(){
    this.loading = true;
    this.http.get(this.urltmdb+"search/movie?api_key="+this.apikey+"&language=fr&query="+this.titre).subscribe(
      (reponse:any) => {
        this.movies = reponse.results;
        this.step = 'select';
        this.loading = false;
      }
    )
  }

  public select(id){
    this.spoiler.id_themoviedb = id;
    let exists = this.donnee.find((m) => {
      return m.id_themoviedb === Number.parseInt(this.spoiler.id_themoviedb);
    });
    if(!exists){
      this.step = 'spoil';
      let movie = this.movies.find((m: any) => {
        return m.id === Number.parseInt(this.spoiler.id_themoviedb);
      });
      console.log(movie);
      this.spoiler.titre = movie.title;
      this.spoiler.titre_original = movie.original_title;
      this.affiche = 'https://image.tmdb.org/t/p/w500'+ movie.poster_path;
    }
    else {
      this.step = "exist";
    }
  }

  public save(){
    this.loading = true;
    this.http.post(this.urlapi+"records/spoiler",this.spoiler).subscribe(
      (reponse:any) => {
        this.step = 'thanks';
        this.loading = false;
        console.log(reponse);
      },
      (error:any) => {
        this.step = 'thanks';
        this.loading = false;
        this.error = error;
        console.log(error);
      },
    )

  }


}
