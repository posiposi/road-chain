<?php

namespace Core\src\Shop\UseCase\ShopDetail;

use Core\src\Shop\Domain\Models\Shop;
use Core\src\Shop\Domain\Models\ShopId;
use Core\src\Shop\UseCase\Ports\SearchShopByShopIdQueryPort;

final class ShopDetail
{
    public function __construct(private SearchShopByShopIdQueryPort $searchShopByShopIdQueryPort)
    {
    }

    public function execute(ShopId $shopId): Shop
    {
        return $this->searchShopByShopIdQueryPort->searchByShopId($shopId);
    }
}
