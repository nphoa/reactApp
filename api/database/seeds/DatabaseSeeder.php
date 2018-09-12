<?php

use Illuminate\Database\Seeder;
use App\Services\AuthencationService;
//use KeywordTypeTableSeeder;
class DatabaseSeeder extends Seeder
{
    protected $authencationService;
    public function __construct(AuthencationService $authencationService)
    {
        $this->authencationService = $authencationService;
    }
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(KeywordTypeTableSeeder::class);
//        $userAdmin = [
//          'email'    => 'admin@gmail.com',
//          'name'     => 'Administrator',
//          'password' => '123456'
//        ];
//        $this->authencationService->register($userAdmin);
    }
}
