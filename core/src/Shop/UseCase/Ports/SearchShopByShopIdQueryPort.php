<?php

namespace Core\src\Shop\UseCase\Ports;

use Core\src\Shop\Domain\Models\Shop;
use Core\src\Shop\Domain\Models\ShopId;

interface SearchShopByShopIdQueryPort
{
    public function searchByShopId(ShopId $shopId): Shop;
}
