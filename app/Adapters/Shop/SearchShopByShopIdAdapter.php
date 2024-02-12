<?php

namespace App\Adapters\Shop;

use App\Models\Shop\EloquentShop;
use Core\src\Shop\Domain\Models\Shop;
use Core\src\Shop\Domain\Models\ShopId;
use Core\src\Shop\UseCase\Ports\SearchShopByShopIdQueryPort;

class SearchShopByShopIdAdapter implements SearchShopByShopIdQueryPort
{
    public function __construct(private EloquentShop $eloquentShop)
    {
    }

    public function searchByShopId(ShopId $shopId): Shop
    {
        $shop = $this->eloquentShop->findByShopId($shopId);
        return Shop::fromArray($shop->toArray());
    }
}
