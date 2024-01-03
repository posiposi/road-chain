<?php

namespace App\Trait;

trait ValueObject
{
    public static function from($value): self
    {
        if ($value instanceof static) {
            return $value;
        }

        return new self($value);
    }
}
