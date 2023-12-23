<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Core\src\Shop\Usecase\RegisterShop\RegisterShop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class RegisterShopController extends Controller
{
    public function __construct(private RegisterShop $registerShop)
    {
    }

    public function __invoke(Request $request)
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
