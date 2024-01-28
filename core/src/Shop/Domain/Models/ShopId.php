<?php

namespace Core\src\Shop\Domain\Models;

use Core\src\Trait\ValueObjectString;

final class ShopId
{
    use ValueObjectString;

    const ID_MAX_LENGTH = 26;

    public function __construct(private string $value)
    {
        $this->validateNotEmpty('ショップIDが存在しません');
        $this->validateLengthLimit(self::ID_MAX_LENGTH, 'ショップIDが不正です');
    }
}
