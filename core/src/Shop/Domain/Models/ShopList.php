<?php

namespace Core\src\Shop\Domain\Models;

class ShopList
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

    public function toArrayFromModel(): array
    {
        return array_map(fn ($shop) => $shop->items(), $this->items);
    }
}
