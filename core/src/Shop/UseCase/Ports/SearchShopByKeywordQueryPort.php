<?php

namespace Core\src\Shop\UseCase\Ports;

use Core\src\Shop\Domain\Models\SearchShopKeyword;
use Core\src\Shop\Domain\Models\ShopList;

interface SearchShopByKeywordQueryPort
{
    public function searchByKeyword(SearchShopKeyword $keyword): ShopList;
}
