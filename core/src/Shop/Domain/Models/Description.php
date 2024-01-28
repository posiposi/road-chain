<?php

namespace Core\src\Shop\Domain\Models;

use Core\src\Trait\ValueObjectString;

final class Description
{
    use ValueObjectString;

    const TEXT_MAX_LENGTH = 255;
    const INVALID_MAX_LENGTH_MESSAGE = '説明文の文字数が最大値を超えています';

    public function __construct(private ?string $value)
    {
        $this->validateLengthLimit(self::TEXT_MAX_LENGTH, self::INVALID_MAX_LENGTH_MESSAGE);
    }
}
