<?php

namespace App\Providers;

use App\Adapters\Shop\RegisterShopAdapter;
use App\Adapters\Shop\SearchShopByKeywordAdapter;
use App\Adapters\Shop\SearchShopByShopIdAdapter;
use Core\src\Shop\Usecase\Ports\RegisterShopCommandPort;
use Core\src\Shop\UseCase\Ports\SearchShopByKeywordQueryPort;
use Core\src\Shop\UseCase\Ports\SearchShopByShopIdQueryPort;
use Illuminate\Support\ServiceProvider;

class ShopServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(RegisterShopCommandPort::class, RegisterShopAdapter::class);
        $this->app->bind(SearchShopByKeywordQueryPort::class, SearchShopByKeywordAdapter::class);
        $this->app->bind(SearchShopByShopIdQueryPort::class, SearchShopByShopIdAdapter::class);
    }

    public function boot(): void
    {
        //
    }
}
