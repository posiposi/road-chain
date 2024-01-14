<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Core\src\Shop\Domain\Models\SearchShopKeyword;
use Illuminate\Http\Request;
use Core\src\Shop\UseCase\SearchShopByKeyword\SearchShopByKeyword;

class SearchShopByKeywordController extends Controller
{
    public function __construct(private SearchShopByKeyword $searchShopByKeyword)
    {
    }

    public function __invoke(Request $request)
    {
        $shopList = $this->searchShopByKeyword->execute(SearchShopKeyword::from($request->query('searchText')));
        return response()->json($shopList->toArrayFromModel());
    }
}
