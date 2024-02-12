<?php

namespace App\Http\Controllers;

use Core\src\Shop\Domain\Models\ShopId;
use Core\src\Shop\UseCase\ShopDetail\ShopDetail;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ShopDetailController extends Controller
{
    public function __construct(private ShopDetail $shopDetail)
    {
    }

    public function __invoke(Request $request): Response
    {
        $shop = $this->shopDetail->execute(ShopId::from($request->input('shopId')))->items();
        return Inertia::render('Shop/ShopDetail', ['shop' => $shop]);
    }
}
