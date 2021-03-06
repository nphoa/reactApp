<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(
            \App\Repositories\SidebarRepositoryInterface::class,
            \App\Repositories\eloquent\SidebarRepository::class
        );

        $this->app->singleton(
            \App\Repositories\KeywordRepositoryInterface::class,
            \App\Repositories\eloquent\KeywordRepository::class
        );

    }
}
