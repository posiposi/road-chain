<?php

namespace App\Providers;

use App\Adapters\Shop\RegisterShopAdapter;
use Core\src\Shop\Usecase\Ports\RegisterShopCommandPort;
use Illuminate\Support\ServiceProvider;

class ShopServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(RegisterShopCommandPort::class, RegisterShopAdapter::class);
    }

    public function boot(): void
    {
        //
    }
}
