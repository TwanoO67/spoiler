import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public spoiler:any = {};
  public reponse = "";
  public bonne_reponse = "";
  public total = 0;
  public tentative = 0;
  public max_tentative = 3;
  public taille_partie = 10;
  public past = 0;
  public affiche;
  private available = [];
  private apikey = "a733f160bd9f4737a83301a1f72af0c1";

  private donnee = [
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

  constructor(
  private http: HttpClient
) { }

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
          this.bonne_reponse = "Bonne réponse! c'était bien "+this.spoiler.titre;
          this.nextSpoiler();
        }
        else{
          this.bonne_reponse = "Mauvaise réponse... retente ta chance";
          this.checkTentative();
        }
      }
    )
    /*if(
      this.transform(this.reponse) === this.transform(this.spoiler.titre)
      || (this.spoiler.titre_alternatif !== "" && this.transform(this.reponse) === this.transform(this.spoiler.titre_alternatif))
    )*/

  }

  private transform(str){
    str = this.remplace_diacritiques_latins(str);
    return str.toLowerCase();
  }

  private remplace_diacritiques_latins(chaine){

    var diac_fr = [
    // Tous les diacritiques codés sur un octet et Ÿ Œ œ
    ['a',/[\u00AA\u00E0\u00E1\u00E2\u00E3\u00E4\u00E5]/g], // a
    ['A',/[\u00C0\u00C1\u00C2\u00C3\u00C4\u00C5]/g], // A
    ['ae',/[\u00E6]/g], // ae
    ['Ae',/[\u00C6]/g], // Ae
    ['c',/[\u00E7]/g], // c
    ['C',/[\u00C7]/g], // C
    ['d',/[\u00F0]/g], // d
    ['D',/[\u00D0]/g], // D
    ['e',/[\u00E8\u00E9\u00EA\u00EB]/g], // e
    ['E',/[\u00C8\u00C9\u00CA\u00CB\u1EBA]/g], // E
    ['i',/[\u00EC\u00ED\u00EE\u00EF]/g], // i
    ['I',/[\u00CC\u00CD\u00CE\u00CF]/g], // I
    ['n',/[\u00F1]/g], // n
    ['N',/[\u00D1\u1E44]/g], // N
    ['o',/[\u00BA\u00F2\u00F3\u00F4\u00F5\u00F6\u00F8]/g], // o
    ['O',/[\u00D2\u00D3\u00D4\u00D5\u00D6\u00D8]/g], // O
    ['Oe',/[\u0152]/g], // Oe
    ['oe',/[\u0153]/g], // oe
    ['ss',/[\u00DF]/g], // ss
    ['T',/[\u1E6C]/g], // T
    ['Th',/[\u00DE]/g], // Th
    ['th',/[\u00FE]/g], // th
    ['u',/[\u00F9\u00FA\u00FB\u00FC\u1EE7]/g], // u
    ['U',/[\u00D9\u00DA\u00DB\u00DC]/g], // U
    ['W',/[\u1E84]/g], // W
    ['X',/[\u1E8C]/g], // X
    ['y',/[\u00FD\u00FF]/g], // y
    ['Y',/[\u00DD\u0178]/g] // Y
    ];

    var diac_autres =[
    // Tous les diacritiques sauf ceux codés sur un octet et Ÿ Œ œ
    ['A',/[\u0100\u0102\u0104\u01CD\u01FA\u0200\u0202\u023A\u1E00\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6]/g], // A
    ['a',/[\u0101\u0103\u0105\u01CE\u01FB\u0201\u0203\u1E01\u1E9A\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7]/g], // a
    ['Ae',/[\u01FC]/g], // Ae
    ['ae',/[\u01FD]/g], // ae
    ['B',/[\u1E02\u1E04\u1E06]/g], // B
    ['b',/[\u1E03\u1E05\u1E07]/g], // b
    ['C',/[\u0106\u0108\u010A\u010C\u023B\u1E08]/g], // C
    ['c',/[\u0107\u0109\u010B\u010D\u023C\u1E09]/g], // c
    ['D',/[\u010E\u0110\u1E0A\u1E0C\u1E0E\u1E10\u1E12]/g], // D
    ['d',/[\u010F\u0111\u1E0B\u1E0D\u1E0F\u1E11\u1E13]/g], // d
    ['DZ',/[\u01C4\u01F1]/g], // DZ
    ['DZ',/[\u01C5\u01F2]/g], // DZ
    ['dz',/[\u01C6\u01F3]/g], // dz
    ['E',/[\u0112\u0114\u0116\u0118\u011A\u0204\u0206\u0228\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6]/g], // E
    ['e',/[\u0113\u0115\u0117\u0119\u011B\u0205\u0207\u0229\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7]/g], // e
    ['f',/[\u0192\u1E1F]/g], // f
    ['F',/[\u1E1E]/g], // F
    ['G',/[\u011C\u011E\u0120\u0122\u01F4\u1E20]/g], // G
    ['g',/[\u011D\u011F\u0121\u0123\u01F5\u1E21]/g], // g
    ['H',/[\u0124\u0126\u1E22\u1E24\u1E26\u1E28\u1E2A]/g], // H
    ['h',/[\u0125\u0127\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E96]/g], // h
    ['I',/[\u0128\u012A\u012C\u012E\u0130\u01CF\u0208\u020A\u1E2C\u1E2E\u1EC8\u1ECA]/g], // I
    ['i',/[\u0129\u012B\u012D\u012F\u0131\u01D0\u0209\u020B\u1E2D\u1E2F\u1EC9\u1ECB]/g], // i
    ['IJ',/[\u0132]/g], // IJ
    ['ij',/[\u0133]/g], // ij
    ['J',/[\u0134]/g], // J
    ['j',/[\u0135]/g], // j
    ['K',/[\u0136\u1E30\u1E32\u1E34]/g], // K
    ['k',/[\u0137\u1E31\u1E33\u1E35]/g], // k
    ['L',/[\u0139\u013B\u013D\u013F\u0141\u023D\u1E36\u1E38\u1E3A\u1E3C]/g], // L
    ['l',/[\u013A\u013C\u013E\u0140\u0142\u1E37\u1E39\u1E3B\u1E3D]/g], // l
    ['LJ',/[\u01C7]/g], // LJ
    ['Lj',/[\u01C8]/g], // Lj
    ['lj',/[\u01C9]/g], // lj
    ['M',/[\u1E3E\u1E40\u1E42]/g], // M
    ['m',/[\u1E3F\u1E41\u1E43]/g], // m
    ['N',/[\u0143\u0145\u0147\u01F8\u1E44\u1E46\u1E48\u1E4A]/g], // N
    ['n',/[\u0144\u0146\u0148\u01F9\u1E45\u1E47\u1E49\u1E4B]/g], // n
    ['NJ',/[\u01CA]/g], // NJ
    ['Nj',/[\u01CB]/g], // Nj
    ['nj',/[\u01CC]/g], // nj
    ['O',/[\u014C\u014E\u0150\u01A0\u01D1\u01FE\u020C\u020E\u022A\u022C\u022E\u0230\u1E4C\u1E4E\u1E50\u1E52\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2]/g], // O
    ['o',/[\u014D\u014F\u0151\u01A1\u01D2\u01FF\u020D\u020F\u022B\u022D\u022F\u0231\u1E4D\u1E4F\u1E51\u1E53\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3]/g], // o
    ['P',/[\u1E54\u1E56]/g], // P
    ['p',/[\u1E55\u1E57]/g], // p
    ['R',/[\u0154\u0156\u0158\u0210\u0212\u1E58\u1E5A\u1E5C\u1E5E]/g], // R
    ['r',/[\u0155\u0157\u0159\u0211\u0213\u1E59\u1E5B\u1E5D\u1E5F]/g], // r
    ['S',/[\u015A\u015C\u015E\u0160\u0218\u1E60\u1E62\u1E64\u1E66\u1E68]/g], // S
    ['s',/[\u015B\u015D\u015F\u0161\u017F\u0219\u023F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E9B]/g], // s
    ['SS',/[\u1E9E]/g], // SS
    ['T',/[\u0162\u0164\u0166\u021A\u023E\u1E6A\u1E6C\u1E6E\u1E70]/g], // T
    ['t',/[\u0163\u0165\u0167\u021B\u1E6B\u1E6D\u1E6F\u1E71\u1E97]/g], // t
    ['U',/[\u0168\u016A\u016C\u016E\u0170\u0172\u01AF\u01D3\u01D5\u01D7\u01D9\u01DB\u0214\u0216\u1E72\u1E74\u1E76\u1E78\u1E7A\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0]/g], // U
    ['u',/[\u0169\u016B\u016D\u016F\u0171\u0173\u01B0\u01D4\u01D6\u01D8\u01DA\u01DC\u0215\u0217\u1E73\u1E75\u1E77\u1E79\u1E7B\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1]/g], // u
    ['V',/[\u1E7C\u1E7E]/g], // V
    ['v',/[\u1E7D\u1E7F]/g], // v
    ['W',/[\u0174\u1E80\u1E82\u1E84\u1E86\u1E88]/g], // W
    ['w',/[\u0175\u1E81\u1E83\u1E85\u1E87\u1E89\u1E98]/g], // w
    ['X',/[\u1E8A\u1E8C]/g], // X
    ['x',/[\u1E8B\u1E8D]/g], // x
    ['Y',/[\u0176\u0232\u1E8E\u1EF2\u1EF4\u1EF6\u1EF8]/g], // Y
    ['y',/[\u0177\u0233\u1E8F\u1E99\u1EF3\u1EF5\u1EF7\u1EF9]/g], // y
    ['Z',/[\u0179\u017B\u017D\u1E90\u1E92\u1E94]/g], // Z
    ['z',/[\u017A\u017C\u017E\u0240\u1E91\u1E93\u1E95]/g] // z
    ];

    // suppression des signes diacritiques isolés
    var diac_seuls = /[\u0300-\u036F\u1DC0-\u1DFF]/g; // bloc des diacritiques et des bloc des diacritiques suppléments
    chaine = chaine.replace(diac_seuls,'');

    // traitement en deux étapes, pour accélerer le traitement des chaînes sans caractères codés sur deux octets
    // suppression des signes diacritiques sur 1 octet + 3 lettres pour le français français
    for (var i = 0; i < diac_fr.length; i++) {
      chaine = chaine.replace(diac_fr[i][1],diac_fr[i][0]);
    }

    // suppression des signes diacritiques sur 2 octets, uniquement s'il y en a
    var car_etendus = /[\u0100-\u1EFE]/g;
    if (car_etendus.test (chaine)) {
      for (var i = 0; i < diac_autres.length; i++) {
        chaine = chaine.replace(diac_autres[i][1],diac_autres[i][0]);
      }
    }

    return chaine;
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
    this.spoiler.done = true;
    //on remplace l'affiche si existante
    if(!this.spoiler.id_themoviedb ){
      this.affiche = 'http://i.imgrpost.com/imgr/2017/07/29/bond4.jpg';
    }
    else {
      this.http.get("https://api.themoviedb.org/3/movie/"+this.spoiler.id_themoviedb+"?api_key="+this.apikey).subscribe(
        (reponse: any) => {
          console.log(reponse);
          this.affiche = 'https://image.tmdb.org/t/p/w500'+ reponse.poster_path;
      });
    }

    this.available = this.donnee.filter((spoil) => {
      return !spoil.done;
    });
    this.tentative = 0;
    this.past++;
    if(this.available.length === 0 || this.past > this.taille_partie){
      alert('Partie terminée! Votre score: '+this.total+'/10');
      return true;
    }
    this.reponse = "";
    this.findRandSpoiler();


  }

  ngOnInit(){
    this.nextSpoiler();
  }
}
