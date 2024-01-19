<?php

namespace Tests\Feature\Api\Shop;

use App\Models\Shop\EloquentShop;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class SearchShopByKeywordControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testSearchShopByKeywordController(): void
    {
        EloquentShop::factory()->create([
            'shop_name' => 'テスト店舗',
            'shop_address' => '名古屋市中区',
        ]);
        EloquentShop::factory()->create([
            'shop_name' => '東京店',
            'shop_address' => '東京都中央区'
        ]);

        Sanctum::actingAs(
            User::factory()->create(),
            ['*']
        );
        $response = $this->get(route('api.shop.search.keyword', ['searchText' => '名古屋']));
        $response->assertOk();
        $response->assertJsonCount(1);
        $response->assertJsonStructure([
            '*' => [
                'shop_id',
                'shop_name',
                'shop_address',
                'shop_tel',
                'shop_postal_code',
                'shop_email',
            ]
        ]);
    }
}
