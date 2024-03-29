<?php

namespace Core\src\Shop\Domain\Models;

use Core\src\Trait\ValueObjectString;

final class ShopName
{
    use ValueObjectString;

    const NAME_MAX_LENGTH = 255;
    const INVALID_MESSAGE = 'ショップ名が不正です';

    public function __construct(private ?string $value)
    {
        $this->validateNotEmpty('ショップ名が空白です');
        $this->validateLengthLimit(self::NAME_MAX_LENGTH, self::INVALID_MESSAGE);
        $this->validateSpaceOnly($this->value, self::INVALID_MESSAGE);
    }
}
