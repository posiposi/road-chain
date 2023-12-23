<?php

namespace App\Models\Shop;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
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
            'shop_tel' => $values['shop_phone_number'],
            'shop_address' => $values['shop_address'],
            'shop_postal_code' => $values['shop_postal_code'],
            'shop_email' => $values['shop_email'],
        ]);
    }
}
