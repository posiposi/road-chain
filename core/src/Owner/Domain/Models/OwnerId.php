<?php

namespace Core\src\Owner\Domain\Models;

use App\Trait\ValueObjectString;

final class OwnerId
{
    use ValueObjectString;

    const ID_MAX_LENGTH = 26;

    public function __construct(private string $value)
    {
        $this->validateNotEmpty('オーナーIDが存在しません');
        $this->validateLengthLimit(self::ID_MAX_LENGTH, 'オーナーIDが不正です');
    }
}
