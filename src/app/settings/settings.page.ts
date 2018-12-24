import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
//API http://test.weberantoine.fr/SPOILER/api.php/records/spoiler
//https://phpmyadmin.ovh.net/db_structure.php?server=1&db=weberantspoiler&table=spoiler
export class SettingsPage {

  private titre = "";
  private movies = [];
  private movie = "";
  private apikey = "a733f160bd9f4737a83301a1f72af0c1";
  private urltmdb = "https://api.themoviedb.org/3/";
  private urlapi = "http://test.weberantoine.fr/SPOILER/api.php/";
  private spoiler: any = {};
  private step = 1;
  private loading = false;

  constructor(
    private http: HttpClient
  ) {
  }

  public search(){
    this.loading = true;
    this.http.get(this.urltmdb+"search/movie?api_key="+this.apikey+"&language=fr&query="+this.titre).subscribe(
      (reponse:any) => {
        this.movies = reponse.results;
        this.step = 2;
        this.loading = false;
        console.log(reponse);
      }
    )
  }

  public save(){
    this.loading = true;
    console.log(this.movies,this.spoiler.id_themoviedb);
    let movie = this.movies.find((m: any) => {
      return m.id === Number.parseInt(this.spoiler.id_themoviedb);
    });
    console.log(movie);
    this.spoiler.titre = movie.title;
    this.spoiler.titre_original = movie.original_title;
    this.http.post(this.urlapi+"records/spoiler",this.spoiler).subscribe(
      (reponse:any) => {
        this.step = 4;
        this.loading = false;
        console.log(reponse)
      }
    )

  }


}
