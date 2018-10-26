<?php

namespace App\Repositories;

use App\Models\Keyword;
interface KeywordRepositoryInterface {
    /**
     * @param Keyword $keyword
     * @return mixed
     */
    public function save(Keyword $keyword);

    /**
     * @param null
     * @return mixed
     */
    public function getAll($dataSearch,$page);


    /**
     * @param Int $id
     * @return mixed
     */
    public function getKeywordById(int $id);

    /**
     * @param Int $id
     * @return mixed
     */
    public function deleteKeywordById(int $id);

}
