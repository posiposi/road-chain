<?php

namespace App\Exceptions\Shop;

use RuntimeException;

final class ShopRegisterFailedException extends RuntimeException
{
    public function __construct(
        string $message = '店舗登録に失敗しました。',
        int $code = 500,
        $previous = null
    ) {
        parent::__construct($message, $code, $previous);
    }
}
