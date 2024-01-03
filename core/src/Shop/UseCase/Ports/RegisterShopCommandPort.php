<?php

namespace Core\src\Shop\UseCase\Ports;

interface RegisterShopCommandPort
{
    public function register(array $values): void;
}
