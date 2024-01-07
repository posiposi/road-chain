<?php

namespace App\Adapters\Shop;

use App\Models\Shop\EloquentShop;
use Core\src\Shop\Domain\Models\SearchShopKeyword;
use Core\src\Shop\Domain\Models\ShopList;
use Core\src\Shop\UseCase\Ports\SearchShopByKeywordQueryPort;

class SearchShopByKeywordAdapter implements SearchShopByKeywordQueryPort
{
    public function __construct(private EloquentShop $eloquentShop)
    {
    }

    public function searchByKeyword(SearchShopKeyword $keyword): ShopList
    {
        $values = $this->eloquentShop->findByKeyword($keyword)->toArray();
        return ShopList::fromArray($values);
    }
}
