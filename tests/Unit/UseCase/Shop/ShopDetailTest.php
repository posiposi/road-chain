<?php

namespace Tests\Unit\UseCase\Shop;

use Core\src\Shop\Domain\Models\Shop;
use Core\src\Shop\Domain\Models\ShopId;
use Core\src\Shop\UseCase\Ports\SearchShopByShopIdQueryPort;
use Core\src\Shop\UseCase\ShopDetail\ShopDetail;
use Tests\TestCase;
use DG\BypassFinals;
use Mockery;

class ShopDetailTest extends TestCase
{
    private $portMock;
    private $useCase;

    protected function setUp(): void
    {
        BypassFinals::enable();
        parent::setUp();
        $this->portMock = Mockery::mock(SearchShopByShopIdQueryPort::class);
        $this->useCase = new ShopDetail($this->portMock);
    }

    public function testExecute(): void
    {
        $shop = Shop::fromArray([
            'shop_id' => '1',
            'owner_id' => '2',
            'shop_name' => '店舗名テスト',
            'shop_tel' => '00012345678',
            'shop_address' => '名古屋市中区',
            'shop_postal_code' => '000-0000',
            'shop_email' => '',
        ]);

        $this->portMock->shouldReceive('searchByShopId')
            ->once()->andReturn($shop);
        $result = $this->useCase->execute(ShopId::from('1'));
        $this->assertInstanceOf(Shop::class, $result);
    }
}
