<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Core\src\Shop\Domain\Models\SearchShopKeyword;
use Core\src\Shop\UseCase\SearchShopByKeyword\SearchShopByKeyword;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SearchShopByKeywordController extends Controller
{
    public function __construct(private SearchShopByKeyword $searchShopByKeyword)
    {
    }

    public function __invoke(Request $request): Response
    {
        $shopList = $this->searchShopByKeyword->execute(SearchShopKeyword::from($request->query('searchText')));

        $shopListArray = iterator_to_array($shopList->getIterator());
        return Inertia::render('Shop/ShopList', ['shopList' => $shopListArray]);
    }
}
