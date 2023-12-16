<?php

namespace App\Exceptions\common;

use Exception;

class InvalidException extends Exception
{
    public function __construct(string $message = '不正な値です', int $code = 400)
    {
        parent::__construct($message, $code);
    }
}
