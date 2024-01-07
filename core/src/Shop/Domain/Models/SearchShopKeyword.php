<?php

namespace Core\src\Shop\Domain\Models;

use Core\src\Trait\ValueObjectString;

final class SearchShopKeyword
{
    use ValueObjectString;

    public function __construct(private string $value)
    {
        $this->validateNotEmpty('検索キーワードが存在しません');
    }
}
