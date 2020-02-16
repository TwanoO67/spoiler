<?php

namespace Tests\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\CRUDTestCase;
use App\Models\Spoiler;
use Data;

class SpoilerTest extends CRUDTestCase
{

    protected $model_class = Spoiler::class;
    protected $base_url = "api/spoiler";

    use RefreshDatabase, DatabaseMigrations;

    public function setUp(): void
    {
        parent::setUp();

        // you can call
        //$this->artisan('db:seed');

        // or
        $this->seed();
    }


}
