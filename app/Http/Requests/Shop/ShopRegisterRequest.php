<?php

namespace App\Http\Requests\Shop;

use Illuminate\Foundation\Http\FormRequest;

class ShopRegisterRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'shop_name' => ['required'],
            'shop_tel' => ['max:15'],
            'shop_postal_code' => ['max:8'],
            'shop_email' => ['email'],
        ];
    }

    public function messages(): array
    {
        return [
            'shop_name.required' => '店舗名は必須項目です。',
            'shop_tel.max' => '店舗の電話番号は15文字以下で入力してください。',
            'shop_postal_code.max' => '店舗の郵便番号は8文字以下で入力してください。',
            'shop_email.email' => '店舗メールアドレスの形式が不正です。',
        ];
    }
}
