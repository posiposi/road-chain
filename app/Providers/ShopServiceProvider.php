<?php

namespace App\Providers;

use App\Adapters\Shop\RegisterShopAdapter;
use App\Adapters\Shop\SearchShopByKeywordAdapter;
use Core\src\Shop\Usecase\Ports\RegisterShopCommandPort;
use Core\src\Shop\UseCase\Ports\SearchShopByKeywordQueryPort;
use Illuminate\Support\ServiceProvider;

class ShopServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(RegisterShopCommandPort::class, RegisterShopAdapter::class);
        $this->app->bind(SearchShopByKeywordQueryPort::class, SearchShopByKeywordAdapter::class);
    }

    public function boot(): void
    {
        //
    }
}
