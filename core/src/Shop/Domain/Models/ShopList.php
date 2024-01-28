<?php

namespace Core\src\Shop\Domain\Models;

use ArrayIterator;
use IteratorAggregate;

class ShopList implements IteratorAggregate
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

    public function getIterator(): ArrayIterator
    {
        return new ArrayIterator($this->items);
    }

    public function toArrayFromModel(): array
    {
        return array_map(fn ($shop) => $shop->items(), $this->items);
    }
}
