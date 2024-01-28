<?php

namespace Core\src\Shop\UseCase\SearchShopByKeyword;

use Core\src\Shop\Domain\Models\SearchShopKeyword;
use Core\src\Shop\Domain\Models\ShopList;
use Core\src\Shop\UseCase\Ports\SearchShopByKeywordQueryPort;

class SearchShopByKeyword
{
    public function __construct(private SearchShopByKeywordQueryPort $port)
    {
    }

    public function execute(SearchShopKeyword $keyword): ShopList
    {
        return $this->port->searchByKeyword($keyword);
    }
}
