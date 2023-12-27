<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use App\Http\Requests\Shop\ShopRegisterRequest;
use Core\src\Shop\Usecase\RegisterShop\RegisterShop;

class RegisterShopController extends Controller
{
    public function __construct(private RegisterShop $registerShop)
    {
    }

    public function __invoke(ShopRegisterRequest $request)
    {
        $this->registerShop->execute($request->only([
            'shop_name',
            'shop_phone_number',
            'shop_address',
            'shop_postal_code',
            'shop_email',
        ]));
    }
}
