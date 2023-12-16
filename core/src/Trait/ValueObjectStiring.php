<?php

namespace App\Trait;

trait ValueObjectString
{
    use ValueObject;

    private $value;

    private function __construct(string $value)
    {
        $this->value = $value;
    }

    public function toString(): string
    {
        return $this->value;
    }
}
