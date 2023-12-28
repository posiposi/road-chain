<?php

namespace App\Http\Requests\Shop;

use Illuminate\Foundation\Http\FormRequest;

class ShopRegisterRequest extends FormRequest
{
    public function authorize()
    {
        return false;
    }

    public function rules(): array
    {
        return [
            'shop_name' => ['required', 'string'],
            'shop_tel' => ['string', 'max:15'],
            'shop_address' => ['string'],
            'shop_postal_code' => ['string', 'max:8'],
            'shop_email' => ['email'],
        ];
    }
}
