<?php

namespace Tests;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Page;
use App\Models\Instance;
use Data;

abstract class CRUDTestCase extends TestCase
{
    protected $model_class;
    protected $base_url;

    /** @test */
    function it_returns_model()
    {
        $model = factory($this->model_class)->create();

        $json = $this->json('GET', $this->base_url, [])
        ->assertStatus(200);

        if (count($json->json())) {
            $this->assertNotNull($json->json()[0]);
        }
    }

    /** @test */
    function it_can_create_model()
    {
        $model = factory($this->model_class)->make();

        $expected = $model->toArray();

        $json = $this->json('POST', $this->base_url, $expected)
            ->assertStatus(201)
            ->assertJson($expected);
    }

    function it_can_get_model_info()
    {
        $model = factory($this->model_class)->make();

        $expected = $model->toArray();

        $json = $this->json('GET', $this->base_url."/".$model->_id)
            ->assertStatus(200)
            ->assertJson($expected);
    }

    /** @test */
    function it_can_edit_model()
    {
        $model = factory($this->model_class)->create();

        $model2 = factory($this->model_class)->make();

        $expected = $model2->toArray();
        unset($expected['updated_at']);

        $json = $this->json('PUT', $this->base_url."/".$model->_id, $model2->toArray())
        ->dump()
            ->assertStatus(200)
            ->assertJson($expected);
    }

    /** @test */
    function it_can_delete_model()
    {
        $model = factory($this->model_class)->create();

        $json = $this->json('DELETE', $this->base_url."/".$model->_id)
            ->assertStatus(200);

        $json = $this->json('GET', $this->base_url."/".$model->_id)
            ->assertStatus(404);
    }
}
