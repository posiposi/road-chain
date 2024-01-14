<?php

namespace Core\src\Common\Domain\Models;

use Core\src\Trait\ValueObjectString;

final class Email
{
    use ValueObjectString;

    public function __construct(private ?string $value)
    {
        if ($value) {
            $this->validateNotEmpty('メールアドレスが存在しません');
            $this->validateNotEmail();
        }
    }

    private function validateNotEmail()
    {
        if (!filter_var($this->value, FILTER_VALIDATE_EMAIL)) {
            throw new InvalidException('メールアドレスが不正です');
        }
    }
}
