<?php

namespace Tests\Unit\Adapter\Shop;

use App\Adapters\Shop\SearchShopByShopIdAdapter;
use App\Models\Shop\EloquentShop;
use Core\src\Shop\Domain\Models\ShopId;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SearchShopByShopIdAdapterTest extends TestCase
{
    use RefreshDatabase;

    /** @var SearchShopByShopIdAdapter */
    private $adapter;

    protected function setUp(): void
    {
        parent::setUp();
        $this->adapter = new SearchShopByShopIdAdapter(
            new EloquentShop()
        );
        $values = [
            [
                'shop_id' => '1',
                'shop_name' => '明治大学',
            ],
            [
                'shop_id' => '2',
                'shop_name' => '明治大学',
            ]
        ];

        foreach ($values as $value) {
            EloquentShop::factory()->create($value);
        }
    }

    public function testSearchByShopId(): void
    {
        $searchResult = $this->adapter->searchByShopId(ShopId::from('1'));
        $this->assertEquals($searchResult->shopId()->toString(), '1');
        $this->assertEquals($searchResult->shopName()->toString(), '明治大学');
        $this->assertNotEquals($searchResult->shopId()->toString(), '2');
    }
}
