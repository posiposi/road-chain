<?php

namespace Tests\Unit\Domein\Models\Shop;

use App\Models\Shop\EloquentShop;
use Core\src\Shop\Domain\Models\Shop;
use Core\src\Shop\Domain\Models\ShopList;
use Tests\TestCase;

class ShopListTest extends TestCase
{
    private $shopList;

    public function setUp(): void
    {
        parent::setUp();
        $this->shopList = EloquentShop::factory()->count(2)->make()->toArray();
    }

    public function testToArrayFromModel(): void
    {
        $shops = array_map(fn ($value) => Shop::fromArray($value), $this->shopList);
        $result = ShopList::fromArray($shops)->toArrayFromModel();
        $this->assertSame($this->shopList, $result);
    }
}
