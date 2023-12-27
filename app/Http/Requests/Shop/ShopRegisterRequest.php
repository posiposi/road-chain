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
            'shop_phone_number' => ['required', 'string', 'max:15'],
            'shop_address' => ['required', 'string'],
            'shop_postal_code' => ['required', 'string', 'max:8'],
            'shop_email' => ['required', 'email'],
        ];
    }
}
