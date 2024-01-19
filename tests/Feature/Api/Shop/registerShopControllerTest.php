<?php

namespace Tests\Feature\Api\Shop;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class RegisterShopControllerTest extends TestCase
{
    use RefreshDatabase;

    private $testUser;

    public function setUp(): void
    {
        parent::setUp();
        $this->testUser = User::factory()->create();
        Sanctum::actingAs($this->testUser);
    }

    public function testShopRegisterController(): void
    {
        $testData = [
            'shop_name' => '店舗名テスト',
            'shop_tel' => '00012345678',
            'shop_address' => '名古屋市中区',
            'shop_postal_code' => '000-0000',
            'shop_email' => 'hoge@fuga.piyo',
        ];

        $response = $this->postJson('/api/shop/register', $testData);
        $response->assertStatus(200);
    }

    public function testRegisterOnlyNameAndEmail(): void
    {
        $testData = [
            'shop_name' => 'ほげほげ店舗',
            'shop_tel' => '',
            'shop_address' => '',
            'shop_postal_code' => '',
            'shop_email' => 'hoge@fuga.piyo',
        ];

        $response = $this->postJson('/api/shop/register', $testData);
        $response->assertStatus(200);
    }

    public function testNoShopNameValidation(): void
    {
        $testData = [
            'shop_name' => '',
            'shop_tel' => '00012345678',
            'shop_address' => '名古屋市中区',
            'shop_postal_code' => '000-0000',
            'shop_email' => 'hoge@fuga.piyo',
        ];
        $response = $this->postJson('api/shop/register', $testData);
        $response->assertStatus(422)->assertJsonValidationErrors([
            'shop_name' => '店舗名は必須項目です。'
        ]);
    }

    public function testOverPhoneNumber(): void
    {
        $testData = [
            'shop_name' => '電話番号16文字店舗',
            'shop_tel' => '0001234567812345',
            'shop_address' => '名古屋市中区',
            'shop_postal_code' => '000-0000',
            'shop_email' => 'hoge@fuga.piyo',
        ];

        $response = $this->postJson('api/shop/register', $testData);
        $response->assertStatus(422)->assertJsonValidationErrors([
            'shop_tel' => '店舗の電話番号は15文字以下で入力してください。'
        ]);
    }

    public function testOverPostalCode(): void
    {
        $testData = [
            'shop_name' => '郵便番号9文字店舗',
            'shop_tel' => '00012345678',
            'shop_address' => '名古屋市中区',
            'shop_postal_code' => '000-00009',
            'shop_email' => 'hoge@fuga.piyo',
        ];

        $response = $this->postJson('/api/shop/register', $testData);
        $response->assertStatus(422)->assertJsonValidationErrors([
            'shop_postal_code' => '店舗の郵便番号は8文字以下で入力してください。'
        ]);
    }

    public function testNotEmailFormat(): void
    {
        $testData = [
            'shop_name' => '郵便番号9文字店舗',
            'shop_tel' => '00012345678',
            'shop_address' => '名古屋市中区',
            'shop_postal_code' => '000-0000',
            'shop_email' => 'hoge',
        ];

        $response = $this->postJson('/api/shop/register', $testData);
        $response->assertStatus(422)->assertJsonValidationErrors([
            'shop_email' => '店舗メールアドレスの形式が不正です。'
        ]);
    }
}
