<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KeywordTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arrData = [
            ['type' => 'S', 'vietnamese' => 'Chủ ngữ', 'created_by' => 1, 'updated_by' => 1],
            ['type' => 'V', 'vietnamese' => 'Động từ', 'created_by' => 1, 'updated_by' => 1],
            ['type' => 'O', 'vietnamese' => 'Tân ngữ', 'created_by' => 1, 'updated_by' => 1],
        ];

        DB::table('keyword_types')->insert($arrData);
    }
}
