# spoiler


## Démarrage

- démarrer l'api
cd api && ./dcp up -d
./enter
composer install
composer update
chmod -R 777 storage

- démarrer l'app ionic
cd ..
./dcp up -d

-initialiser la base
cd api
./enter_db
mysql -u root -proot
CREATE DATABASE laravel;
exit
exit

./enter
cp .env.example .env
vi .env
DB_HOST=spoiler_db
DB_PASSWORD=root

php artisan key:gen
php artisan mig:fresh
php artisan db:seed



## TODO

[] Ne pas proposer des films déja eu lors d'une precedentes parties
[] Envoyer les scores sur un serveur (pour stat)
[] Ajouter des indices (citations)
[x] Refaire l'api en laravel + test
[] MaJ Laravel pour dependance
[] Utiliser le background ici: https://codepen.io/supah/pen/WwoYjO
[x] Renouveller la SPA sur derniere version IONIC
