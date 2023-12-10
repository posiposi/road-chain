<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('shops', function (Blueprint $table) {
            $table->ulid('shop_id')->primary();
            $table->string('owner_id');
            $table->string('shop_name');
            $table->string('shop_tel')->nullable();
            $table->string('shop_address')->nullable();
            $table->string('shop_postal_code')->nullable();
            $table->string('shop_email')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('shops');
    }
};
