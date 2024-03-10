<?php

namespace App\Http\Responses;

use Illuminate\Http\JsonResponse;

final class SuccessResponse
{
    public function __construct($data)
    {
        $this->data = $data;
    }

    public function toResponse(): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => '店舗登録が完了しました',
            'data' => $this->data,
        ]);
    }
}
