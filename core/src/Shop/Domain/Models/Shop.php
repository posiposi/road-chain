<?php

namespace Core\src\Bike\Domain\Models;

use Core\src\Owner\Domain\Models\OwnerId;
use Core\src\Shop\Domain\Models\ShopId;

final class Shop
{
    public function __construct(private ShopId $shopId, private OwnerId $ownerId)
    {
    }

    public function shopId(): ShopId
    {
        return $this->shopId;
    }

    public function OwnerId(): OwnerId
    {
        return $this->ownerId;
    }

    public function fromArray(array $values): self
    {
        return new self(
            ShopId::from($values['shop_id']),
            OwnerId::from($values['owner_id'])
        );
    }
}
