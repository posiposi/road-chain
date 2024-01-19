<?php

namespace Core\src\Shop\Domain\Models;

use Core\src\Common\Domain\Models\Address;
use Core\src\Common\Domain\Models\Email;
use Core\src\Common\Domain\Models\PhoneNumber;
use Core\src\Common\Domain\Models\PostalCode;
use Core\src\Owner\Domain\Models\OwnerId;
use Core\src\Shop\Domain\Models\ShopId;
use Core\src\Shop\Domain\Models\ShopName;
use JsonSerializable;

final class Shop implements JsonSerializable
{
    public function __construct(
        private ShopId $shopId,
        private OwnerId $ownerId,
        private ShopName $shopName,
        private PhoneNumber $shopTel,
        private Address $shopAddress,
        private PostalCode $shopPostalCode,
        private Email $shopEmail,
    ) {
    }

    public function items(): array
    {
        return [
            'shop_id' => self::shopId()->toString(),
            'owner_id' => self::ownerId()->toString(),
            'shop_name' => self::shopName()->toString(),
            'shop_tel' => self::shopTel()->toString(),
            'shop_address' => self::shopAddress()->toString(),
            'shop_postal_code' => self::shopPostalCode()->toString(),
            'shop_email' => self::shopEmail()->toString(),
        ];
    }

    public function shopId(): ShopId
    {
        return $this->shopId;
    }

    public function OwnerId(): OwnerId
    {
        return $this->ownerId;
    }

    public function shopName(): ShopName
    {
        return $this->shopName;
    }

    public function shopTel(): PhoneNumber
    {
        return $this->shopTel;
    }

    public function shopAddress(): Address
    {
        return $this->shopAddress;
    }

    public function shopPostalCode(): PostalCode
    {
        return $this->shopPostalCode;
    }

    public function shopEmail(): Email
    {
        return $this->shopEmail;
    }

    public static function fromArray(array $values): self
    {
        return new self(
            ShopId::from($values['shop_id']),
            OwnerId::from($values['owner_id']),
            ShopName::from($values['shop_name'] ?? ''),
            PhoneNumber::from($values['shop_tel'] ?? ''),
            Address::from($values['shop_address'] ?? ''),
            PostalCode::from($values['shop_postal_code'] ?? ''),
            Email::from($values['shop_email'] ?? ''),
        );
    }

    public function jsonSerialize(): mixed
    {
        return $this->items();
    }
}
