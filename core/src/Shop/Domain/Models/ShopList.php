<?php

namespace Core\src\Shop\Domain\Models;

final class ShopList
{
    public function __construct(private array $items = [])
    {
    }

    public function items(): array
    {
        return $this->items;
    }

    public static function fromArray(array $values = []): self
    {
        return new self($values);
    }
}
