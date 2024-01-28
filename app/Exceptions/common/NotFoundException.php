<?php

namespace App\Exceptions\common;

use Exception;

class NotFoundException extends Exception
{
    public function __construct(string $message = 'Not Found', int $code = 404)
    {
        parent::__construct($message, $code);
    }
}
