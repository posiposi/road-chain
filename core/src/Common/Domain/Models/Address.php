<?php

namespace Core\src\Common\Domain\Models;

use Core\src\Trait\ValueObjectString;

final class Address
{
    use ValueObjectString;

    const ADDRESS_MAX_LENGTH = 255;

    public function __construct(private ?string $value)
    {
        if ($value) {
            $this->validateNotEmpty('住所が入力されていません');
            $this->validateLengthLimit(self::ADDRESS_MAX_LENGTH, '住所が不正です');
        }
    }
}
