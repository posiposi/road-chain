<?php

namespace Tests\Unit\Adapter\Shop;

use App\Adapters\Shop\RegisterShopAdapter;
use App\Models\Shop\EloquentShop;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

final class RegisterShopTest extends TestCase
{
    use RefreshDatabase;

    /** @var RegisterShopAdapter */
    private $adapter;
    /** @var array */
    private $testData;

    public function setUp(): void
    {
        parent::setUp();

        $this->adapter = new RegisterShopAdapter(
            new EloquentShop()
        );
    }

    public function testRegister(): void
    {
        $this->testData = [
            'shop_name' => '店舗名テスト',
            'shop_tel' => '00012345678',
            'shop_address' => '名古屋市中区',
            'shop_postal_code' => '000-0000',
            'shop_email' => 'abcd@xxxx.yyyy',
        ];
        $this->adapter->register($this->testData);
        $this->assertDatabaseHas('shops', $this->testData);
    }
}
