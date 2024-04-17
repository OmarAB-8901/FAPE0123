<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Auth::routes();
// Auth::routes(['register' => false]);

Route::get('/', function () { return redirect('/home'); });

Route::group(['middleware' => ['auth']], function () {

    Route::get('/welcome', function () { return redirect('/login'); });
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    
    // Modules Of routes for Producction
    Route::get('/production/expulsion/andon', [App\Http\Controllers\Produccion\ProduccionAbortoController::class, 'index'])->name('expulsion_production');
    Route::get('/production/expulsion/history', [App\Http\Controllers\Produccion\ProduccionAbortoHistoryController::class, 'index'])->name('history_expulsion_production');
    Route::get('/production/expulsion/obtaindatahistory', [App\Http\Controllers\Produccion\ProduccionAbortoHistoryController::class, 'obtainDataHistory'])->name('obtain_data_history_expulsion');

    Route::get('/production/efficiency/andon', [App\Http\Controllers\Produccion\ProduccionEficienciaController::class, 'index'])->name('efficiency_production');
    Route::get('/production/efficiency/history', [App\Http\Controllers\Produccion\ProduccionEficienciaHistoryController::class, 'index'])->name('history_efficiency_production');
    Route::get('/production/efficiency/obtaindatahistory', [App\Http\Controllers\Produccion\ProduccionEficienciaHistoryController::class, 'obtainDataHistory'])->name('obtain_data_history_efficiency');
   
    Route::get('/production/mondini/andon', [App\Http\Controllers\Produccion\ProduccionMondiniController::class, 'index'])->name('mondini_production');
    Route::get('/production/mondini/history', [App\Http\Controllers\Produccion\ProduccionMondiniHistoryController::class, 'index'])->name('history_mondini_production');
    Route::get('/production/mondini/obtaindatahistory', [App\Http\Controllers\Produccion\ProduccionMondiniHistoryController::class, 'obtainDataHistory'])->name('obtain_data_history_mondini     ');
    // END

    // Modules Of routes for Maintenance
    Route::get('/maintenance/andon', [App\Http\Controllers\Mantenimiento\MantenimientoController::class, 'index'])->name('index_maintenance');
    Route::get('/maintenance/history', [App\Http\Controllers\Mantenimiento\MantenimientoHistoryController::class, 'index'])->name('graphic_maintenance');
    Route::get('/maintenance/obtaindatahistory', [App\Http\Controllers\Mantenimiento\MantenimientoHistoryController::class, 'obtainDataHistory'])->name('obtain_data_history_maintenance');
    // END
    
    // Module Of routes for Quality
    Route::get('/quality/andon', [App\Http\Controllers\Calidad\CalidadController::class, 'index'])->name('index_quality');
    Route::get('/quality/history', [App\Http\Controllers\Calidad\CalidadHistoryController::class, 'index'])->name('graphic_quality');
    Route::get('/quality/obtaindatahistory', [App\Http\Controllers\Calidad\CalidadHistoryController::class, 'obtainDataHistory'])->name('obtain_data_history_quality');
    // END

    Route::get('/reports', function(){ echo "<p>Hola reportes</p> <p><a href='/'>Regresar</a></p>"; })->name('reports');
});
