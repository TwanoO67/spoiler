<?php

namespace Tests;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Core\Traits\TrackUserEditing;
use Core\Models\User;

abstract class CRUDTestCase extends TestCase
{
    protected $model_class;
    protected $base_url;
    protected $verbose;

    public function setUp() : void
    {
        parent::setUp();
        $this->verbose = in_array('-v', $_SERVER['argv'], true);
    }

    /** @test */
    function it_returns_model()
    {
        $model = factory($this->model_class)->create();

        $json = $this->json('GET', $this->base_url, []);
        if($this->verbose){
            $json->dump();
        }
        $json->assertStatus(200);

        if (count($json->json())) {
            $this->assertNotNull($json->json()[0]);
        }
    }

    /** @test */
    function it_can_create_model()
    {
        $model = factory($this->model_class)->make();

        $expected = $model->toArray();

        $json = $this->json('POST', $this->base_url, $expected);
        if($this->verbose){
            $json->dump();
        }
        $json->assertStatus(201)
            ->assertJson($expected);
    }

    function it_can_get_model_info()
    {
        $model = factory($this->model_class)->make();

        $expected = $model->toArray();

        $json = $this->json('GET', $this->base_url."/".$model->_id);
        if($this->verbose){
            $json->dump();
        }
        $json->assertStatus(200)
            ->assertJson($expected);
    }

    /** @test */
    function it_can_edit_model()
    {
        $model = factory($this->model_class)->create();

        $model2 = factory($this->model_class)->make();

        $expected = $model2->toArray();
        unset($expected['updated_at']);

        $json = $this->json('PUT', $this->base_url."/".$model->_id, $model2->toArray());
        if($this->verbose){
            $json->dump();
        }
        $json->assertStatus(200)
            ->assertJson($expected);
    }

    /** @test */
    function it_can_delete_model()
    {
        $model = factory($this->model_class)->create();

        $json = $this->json('DELETE', $this->base_url."/".$model->_id);
        if($this->verbose){
            $json->dump();
        }
        $json->assertStatus(200);

        $json = $this->json('GET', $this->base_url."/".$model->_id);
        if($this->verbose){
            $json->dump();
        }
        $json->assertStatus(404);
    }


    /*public function it_track_user_editing()
    {
        //ajoute un test si le model utilise le trait de tracking
        $usingTrait = in_array(
            TrackUserEditing::class,
            array_keys((new \ReflectionClass($this->model_class))->getTraits())
        );

        if($usingTrait){
            //on est connecté
            $user = factory(User::class)->create();
            $this->actingAs($user);

            //on verifie que le user qui cree est enregistré
            $instance = factory($this->model_class)->create();
            $this->assertEquals($instance->created_user_id, $user->_id);

            //on verifie que le user qui modifie est enregistré
            $user2 = factory(User::class)->create();
            $this->actingAs($user2);
            $instance->test = "changement";
            $instance->save();
            $this->assertEquals($instance->updated_user_id, $user2->_id);

            //on verifie que le user qui delete est enregistré
            $user3 = factory(User::class)->create();
            $this->actingAs($user3);
            $instance->delete();
            $this->assertEquals($instance->deleted_user_id, $user3->_id);
        }
        else{
            $this->markTestSkipped('On ne track pas ce modele');
        }


    }*/


}
