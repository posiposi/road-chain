<?php

namespace Core\src\Common\Domain\Models;

use App\Exceptions\common\InvalidException;
use App\Trait\ValueObjectString;

final class PhoneNumber
{
    use ValueObjectString;

    const PHONE_NUMBER_MAX_LENGTH = 15;
    const INVALID_MESSAGE = '電話番号が不正です';

    public function __construct(private string $value)
    {
        $this->validateNotEmpty('電話番号が存在しません');
        $this->validateLengthLimit(self::PHONE_NUMBER_MAX_LENGTH, self::INVALID_MESSAGE);
        $this->validateSpaceOnly($this->value, self::INVALID_MESSAGE);
        $this->validateNumberAndHyphenOnly($this->value);
    }

    private function validateNumberAndHyphenOnly(string $value)
    {
        if (preg_match('/[^0-9-]/', $value)) {
            throw new InvalidException(self::INVALID_MESSAGE);
        }
    }
}
