<?php

namespace App\Models\Shop;

use Core\src\Shop\Domain\Models\SearchShopKeyword;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use Symfony\Component\Uid\Ulid;

class EloquentShop extends Model
{
    use HasFactory;

    protected $table = 'shops';
    protected $fillable = [
        'shop_id',
        'owner_id',
        'shop_name',
        'shop_tel',
        'shop_address',
        'shop_postal_code',
        'shop_email',
        'description',
    ];

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
            'description' => $values['description'],
        ]);
    }

    public function findByKeyword(SearchShopKeyword $keyword): Collection
    {
        $keyword = mb_convert_kana($keyword->toString(), 's');
        $separetedKeywords = explode(' ', $keyword);
        $query = $this->newQuery();
        foreach ($separetedKeywords as $separetedKeyword) {
            $query->orWhere(function ($query) use ($separetedKeyword) {
                $query->where('shop_name', 'like', '%' . $separetedKeyword . '%')
                    ->orWhere('shop_address', 'like', '%' . $separetedKeyword . '%');
            });
        }
        return $query->get();
    }
}
