<?php

namespace App\Adapters\Shop;

use Core\src\Shop\UseCase\Ports\RegisterShopCommandPort;
use App\Models\Shop\EloquentShop;

class RegisterShopAdapter implements RegisterShopCommandPort
{
    public function __construct(private EloquentShop $eloquentShop)
    {
    }

    public function register(array $values): void
    {
        $this->eloquentShop->register($values);
    }
}
