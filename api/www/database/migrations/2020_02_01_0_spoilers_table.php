<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SpoilersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('spoilers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('titre_original');
            $table->text('titre');
            $table->longText('description');
            $table->integer('id_themoviedb');
            $table->boolean('valid');
            $table->timestamp('created_at');
            $table->timestamp('updated_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('spoilers');
    }
}
