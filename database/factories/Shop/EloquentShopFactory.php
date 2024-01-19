<?php

namespace Database\Factories\Shop;

use App\Models\Shop\EloquentShop;
use Illuminate\Database\Eloquent\Factories\Factory;
use Symfony\Component\Uid\Ulid;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class EloquentShopFactory extends Factory
{
    protected $model = EloquentShop::class;

    public function definition(): array
    {
        return [
            'shop_id' => (string)Ulid::generate(),
            'owner_id' => (string)Ulid::generate(),
            'shop_name' => $this->faker->company(),
            'shop_tel' => $this->faker->phoneNumber(),
            'shop_address' => substr($this->faker->address(), 9),
            'shop_postal_code' => $this->faker->postcode(),
            'shop_email' => $this->faker->email(),
        ];
    }
}
