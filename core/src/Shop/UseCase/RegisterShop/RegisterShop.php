<?php

namespace Core\src\Shop\UseCase\RegisterShop;

use Core\src\Shop\Usecase\Ports\RegisterShopCommandPort;

class RegisterShop
{
    public function __construct(private RegisterShopCommandPort $commandPort)
    {
    }

    public function execute(array $values): void
    {
        $this->commandPort->register($values);
    }
}
