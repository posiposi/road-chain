<?php

namespace Core\src\Common\Domain\Models;

use Core\src\Trait\ValueObjectString;

final class PostalCode
{
    use ValueObjectString;

    const POSTAL_CODE_MAX_LENGTH = 8;
    const INVALID_MESSAGE = '郵便番号が不正です';

    public function __construct(private ?string $value)
    {
        if ($value) {
            $this->validateNotEmpty('郵便番号が存在しません');
            $this->validateLengthLimit(self::POSTAL_CODE_MAX_LENGTH, self::INVALID_MESSAGE);
            $this->validateSpaceOnly($this->value, self::INVALID_MESSAGE);
            $this->validateNumberAndHyphenOnly($this->value);
        }
    }

    private function validateNumberAndHyphenOnly(string $value)
    {
        if (preg_match('/[^0-9-]/', $value)) {
            throw new InvalidException(self::INVALID_MESSAGE);
        }
    }
}
