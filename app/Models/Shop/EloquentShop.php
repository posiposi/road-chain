<?php

namespace App\Models\Shop;

use Core\src\Shop\Domain\Models\SearchShopKeyword;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use Symfony\Component\Uid\Ulid;

class EloquentShop extends Model
{
    protected $table = 'shops';

    protected $fillable = [
        'shop_id',
        'owner_id',
        'shop_name',
        'shop_tel',
        'shop_address',
        'shop_postal_code',
        'shop_email',
    ];

    use HasFactory;

    public function register(array $values)
    {
        $query = $this->newQuery();
        $query->create([
            'shop_id' => (string)Ulid::generate(),
            'owner_id' => (string)Ulid::generate(),
            'shop_name' => $values['shop_name'],
            'shop_tel' => $values['shop_tel'],
            'shop_address' => $values['shop_address'],
            'shop_postal_code' => $values['shop_postal_code'],
            'shop_email' => $values['shop_email'],
        ]);
    }

    public function findByKeyword(SearchShopKeyword $keyword): Collection
    {
        $query = $this->newQuery();
        // MOC段階なので店舗名、住所に検索キーワードを含むものを取得する
        return $query
            ->where('shop_name', 'like', '%' . $keyword->toString() . '%')
            ->orWhere('shop_address', 'like', '%' . $keyword->toString() . '%')
            ->get();
    }
}
