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
CREATE DATABASE laravel
exit
exit
./enter
php artisan mig:fresh
php artisan db:seed



## TODO

* Refaire l'api en laravel + test
* Utiliser le background ici: https://codepen.io/supah/pen/WwoYjO
* Renouveller la SPA sur derniere version IONIC
