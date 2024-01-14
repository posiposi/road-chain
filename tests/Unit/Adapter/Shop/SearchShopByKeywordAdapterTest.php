<?php

namespace Tests\Unit\Adapter\Shop;

use App\Adapters\Shop\SearchShopByKeywordAdapter;
use App\Exceptions\common\NotFoundException;
use App\Models\Shop\EloquentShop;
use Core\src\Shop\Domain\Models\SearchShopKeyword;
use Core\src\Shop\Domain\Models\ShopList;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SearchShopByKeywordAdapterTest extends TestCase
{
    use RefreshDatabase;

    /** @var SearchShopByKeywordAdapter */
    private $adapter;

    public function setUp(): void
    {
        parent::setUp();
        $this->adapter = new SearchShopByKeywordAdapter(
            new EloquentShop()
        );
    }

    /**
     * @dataProvider SearchByKeywordDataProvider
     */
    public function testSearchByKeyword(int $expected, array $testData): void
    {
        foreach ($testData as $data) {
            EloquentShop::factory()->create($data);
        }
        $result = $this->adapter->searchByKeyword(SearchShopKeyword::from('名古屋'));
        $this->assertInstanceOf(ShopList::class, $result);
        // $this->assertCount($expected, $result->items());
    }

    public function testNotFoundException(): void
    {
        $this->expectException(NotFoundException::class);
        $this->adapter->searchByKeyword(SearchShopKeyword::from(''));
    }

    public static function SearchByKeywordDataProvider(): array
    {
        return [
            '店舗名で該当' => [
                'expected' => 2,
                'testData' => [
                    [
                        'shop_name' => '愛知大学',
                        'shop_address' => '名古屋市'
                    ],
                    [
                        'shop_name' => '名古屋市立大学駅',
                        'shop_address' => '愛知県名古屋市中村区'
                    ],
                ],
            ],
            '住所で該当' => [
                'expected' => 1,
                'testData' => [
                    [
                        'shop_name' => '百貨店',
                        'shop_address' => '名古屋駅'
                    ],
                    [
                        'shop_name' => '百貨店',
                        'shop_address' => '栄',
                    ],
                ],
            ],
            '該当なし' => [
                'expected' => 0,
                'testData' => [
                    [
                        'shop_name' => '東京駅',
                        'shop_address' => '東京都'
                    ],
                ]
            ],
        ];
    }
}
