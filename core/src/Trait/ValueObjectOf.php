<?php

namespace App\Trait;

trait ValueObjectOf
{
    public static function of($value): self
    {
        if ($value instanceof static) {
            return $value;
        }

        return new self($value);
    }
}
