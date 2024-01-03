<?php

namespace Tests\Unit\UseCase\Shop;

use Core\src\Shop\UseCase\Ports\RegisterShopCommandPort;
use Core\src\Shop\UseCase\RegisterShop\RegisterShop;
use Mockery;
use Tests\TestCase;

class RegisterShopTest extends TestCase
{
    private $registerShopCommandPort;
    private $useCase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->registerShopCommandPort = Mockery::mock(RegisterShopCommandPort::class);
        $this->useCase = new RegisterShop($this->registerShopCommandPort);
    }

    public function testExecute(): void
    {
        $array = [
            'shop_name' => '店舗名テスト',
            'shop_tel' => '00012345678',
            'shop_address' => '名古屋市中区',
            'shop_postal_code' => '000-0000',
            'shop_email' => 'xxxx@yyyyy.zzzz',
        ];

        $this->registerShopCommandPort->shouldReceive('register')
            ->once()
            ->with($array);
        $result = $this->useCase->execute($array);
        $this->assertNull($result);
    }

    protected function tearDown(): void
    {
        parent::tearDown();
        Mockery::close();
    }
}
