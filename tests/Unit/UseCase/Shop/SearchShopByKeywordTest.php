<?php

namespace Tests\Unit\UseCase\Shop;

use Core\src\Shop\Domain\Models\SearchShopKeyword;
use Core\src\Shop\Domain\Models\ShopList;
use Core\src\Shop\UseCase\Ports\SearchShopByKeywordQueryPort;
use Core\src\Shop\UseCase\SearchShopByKeyword\SearchShopByKeyword;
use Mockery;
use Tests\TestCase;

class SearchShopByKeywordTest extends TestCase
{
    private $searchShopByKeywordQueryPort;
    /** @var SearchShopByKeyword */
    private $useCase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->searchShopByKeywordQueryPort = Mockery::mock(SearchShopByKeywordQueryPort::class);
        $this->useCase = new SearchShopByKeyword($this->searchShopByKeywordQueryPort);
    }

    public function testExecute(): void
    {
        $keyword = SearchShopKeyword::from('名古屋');
        $this->searchShopByKeywordQueryPort->shouldReceive('searchByKeyword')
            ->once()
            ->with($keyword);
        $result = $this->useCase->execute($keyword);
        $this->assertInstanceOf(ShopList::class, $result);
    }

    protected function tearDown(): void
    {
        parent::tearDown();
        Mockery::close();
    }
}
