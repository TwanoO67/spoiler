<?php

use Illuminate\Database\Seeder;

use App\Models\Spoiler;

class DatabaseSeeder extends Seeder
{    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // 20200216094048
        // http=>//test.weberantoine.fr/SPOILER/api.php/records/spoiler?filter=valid,eq,1


        $spoilers = [
            [
                "id"=> 4,
                "description"=> "et à la fin, les pierres étaient cachées dans le ventre de la diva",
                "titre"=> "Le Cinquième Élément",
                "titre_original"=> "The Fifth Element",
                "id_themoviedb"=> 18,
                "valid"=> 1,
            ],
            [
                "id"=> 5,
                "description"=> "... et à la fin, il se rend compte que son psy est mort",
                "titre"=> "Sixième Sens",
                "titre_original"=> "The Sixth Sense",
                "id_themoviedb"=> 745,
                "valid"=> 1
            ],
            [
                "id"=> 10,
                "description"=> "... et à la fin, les singes ne dominent pas le monde",
                "titre"=> "La Planète des singes",
                "titre_original"=> "Planet of the Apes",
                "id_themoviedb"=> 869,
                "valid"=> 1
            ],
            [
                "id"=> 11,
                "description"=> "... et à la fin, il perd wilson",
                "titre"=> "Seul au monde",
                "titre_original"=> "Cast Away",
                "id_themoviedb"=> 8358,
                "valid"=> 1
            ],
            [
                "id"=> 12,
                "description"=> "... et à la fin, ils retrouvent le crimier.",
                "titre"=> "RRRrrrr!!!",
                "titre_original"=> "RRRrrrr!!!",
                "id_themoviedb"=> 21778,
                "valid"=> 1
            ],
            [
                "id"=> 13,
                "description"=> "... et à la fin, il jette l'anneau dans le volcan.",
                "titre"=> "Le Seigneur des anneaux => La Communauté de l'anneau",
                "titre_original"=> "The Lord of the Rings=> The Fellowship of the Ring",
                "id_themoviedb"=> 120,
                "valid"=> 1
            ],
            [
                "id"=> 14,
                "description"=> "... et à la fin, ils ont tous des noms de couleurs.",
                "titre"=> "Reservoir Dogs",
                "titre_original"=> "Reservoir Dogs",
                "id_themoviedb"=> 500,
                "valid"=> 1
            ],
            [
                "id"=> 15,
                "description"=> "... et à la fin, il ne dit plus non.",
                "titre"=> "Yes Man",
                "titre_original"=> "Yes Man",
                "id_themoviedb"=> 10201,
                "valid"=> 1
            ],
            [
                "id"=> 16,
                "description"=> "... et à la fin, il n'a pas gâché Noël.",
                "titre"=> "Le Grinch",
                "titre_original"=> "The Grinch",
                "id_themoviedb"=> 360920,
                "valid"=> 1
            ],
            [
                "id"=> 18,
                "description"=> "... et à la fin, il vit toujours la journée de la marmotte.",
                "titre"=> "Un Jour sans fin",
                "titre_original"=> "Groundhog Day",
                "id_themoviedb"=> 137,
                "valid"=> 1
            ],
            [
                "id"=> 19,
                "description"=> "... et à la fin, ce n'était pas toutes des femelles.",
                "titre"=> "Jurassic Park",
                "titre_original"=> "Jurassic Park",
                "id_themoviedb"=> 329,
                "valid"=> 1
            ],
            [
                "id"=> 20,
                "description"=> "... et à la fin, la mort les a tous rattrapé.",
                "titre"=> "Destination finale",
                "titre_original"=> "Final Destination",
                "id_themoviedb"=> 9532,
                "valid"=> 1
            ],
            [
                "id"=> 21,
                "description"=> "... et à la fin, il reprend l'usine de friandises.",
                "titre"=> "Charlie et la chocolaterie",
                "titre_original"=> "Charlie and the Chocolate Factory",
                "id_themoviedb"=> 118,
                "valid"=> 1
            ],
            [
                "id"=> 22,
                "description"=> "... et à la fin, il perd le black pearl.",
                "titre"=> "Pirates des Caraïbes => La Malédiction du Black Pearl",
                "titre_original"=> "Pirates of the Caribbean=> The Curse of the Black Pearl",
                "id_themoviedb"=> 22,
                "valid"=> 1
            ],
            [
                "id"=> 23,
                "description"=> "... et à la fin, le méchant se relève du milieu de la pièce.",
                "titre"=> "Saw",
                "titre_original"=> "Saw",
                "id_themoviedb"=> 176,
                "valid"=> 1
            ],
            [
                "id"=> 24,
                "description"=> "... et à la fin, il se rend compte qu'il est Tyler Durden.",
                "titre"=> "Fight Club",
                "titre_original"=> "Fight Club",
                "id_themoviedb"=> 550,
                "valid"=> 1
            ],
            [
                "id"=> 25,
                "description"=> "... et à la fin, il s'arrête de boiter.",
                "titre"=> "Usual suspects",
                "titre_original"=> "The Usual Suspects",
                "id_themoviedb"=> 629,
                "valid"=> 1
            ],
            [
                "id"=> 28,
                "description"=> "et à la fin, la tour n'est pas détruite et l'enfant deviens un pistoleros",
                "titre"=> "La Tour sombre",
                "titre_original"=> "The Dark Tower",
                "id_themoviedb"=> 353491,
                "valid"=> 1
            ],
            [
                "id"=> 29,
                "description"=> "...et à la fin, Néo est l'élu.",
                "titre"=> "Matrix",
                "titre_original"=> "The Matrix",
                "id_themoviedb"=> 603,
                "valid"=> 1
            ],
            [
                "id"=> 30,
                "description"=> "...et à la fin, c'est la mere folle qui avait tué le bébé.",
                "titre"=> "The Guilty",
                "titre_original"=> "Den skyldige",
                "id_themoviedb"=> 486947,
                "valid"=> 1
            ],
            [
                "id"=> 31,
                "description"=> "...et à la fin, ils n'ont pas refermé les couloirs du temps.",
                "titre"=> "Les Visiteurs",
                "titre_original"=> "Les Visiteurs",
                "id_themoviedb"=> 11687,
                "valid"=> 1
            ],
            [
                "id"=> 32,
                "description"=> "Et à la fin, il découvre que le méchant est son père",
                "titre"=> "L'Empire contre-attaque",
                "titre_original"=> "The Empire Strikes Back",
                "id_themoviedb"=> 1891,
                "valid"=> 1
            ],
            [
                "id"=> 33,
                "description"=> "et à la fin, il se rend compte qu'il vit dans une emission de télé.",
                "titre"=> "The Truman show",
                "titre_original"=> "The Truman Show",
                "id_themoviedb"=> 37165,
                "valid"=> 1
            ],
            [
                "id"=> 34,
                "description"=> "...et à la fin, l'homme de verre avait provoqué toutes les catastrophes. ",
                "titre"=> "Incassable",
                "titre_original"=> "Unbreakable",
                "id_themoviedb"=> 9741,
                "valid"=> 1
            ],
            [
                "id"=> 35,
                "description"=> "...et à la fin, il s'échappe de la famille raciste\n",
                "titre"=> "Get Out",
                "titre_original"=> "Get Out",
                "id_themoviedb"=> 419430,
                "valid"=> 1
            ]
        ];

        foreach($spoilers as $s){
            Spoiler::create($s);
        }



    }
}
