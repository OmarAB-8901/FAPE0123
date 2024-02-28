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

Auth::routes(['register' => false]);

Route::get('/', function () { return redirect('/home'); });

Route::group(['middleware' => ['auth']], function () {

    Route::get('/welcome', function () { return redirect('/login'); });
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    
    // Modules Of routes for Producction
    Route::get('/produccion/expulsion', [App\Http\Controllers\Produccion\ProduccionAbortoController::class, 'index'])->name('expulsion_production');
    Route::get('/produccion/history-expulsion', [App\Http\Controllers\Produccion\ProduccionAbortoHistoryController::class, 'index'])->name('history_expulsion_production');

    Route::get('/produccion/efficiency', [App\Http\Controllers\Produccion\ProduccionEficienciaController::class, 'index'])->name('efficiency_production');
    Route::get('/produccion/history-efficiency', [App\Http\Controllers\Produccion\ProduccionEficienciaHistoryController::class, 'index'])->name('history_efficiency_production');
   
    Route::get('/produccion/mondini', [App\Http\Controllers\Produccion\ProduccionMondiniController::class, 'index'])->name('mondini_production');
    Route::get('/produccion/history-mondini', [App\Http\Controllers\Produccion\ProduccionMondiniHistoryController::class, 'index'])->name('history_mondini_production');
    // END

    // Modules Of routes for Maintenance
    Route::get('/mantenimiento/maintenance', [App\Http\Controllers\Mantenimiento\MantenimientoController::class, 'index'])->name('index_maintenance');
    Route::get('/mantenimiento/history-maintenance', [App\Http\Controllers\Mantenimiento\MantenimientoHistoryController::class, 'index'])->name('graphic_maintenance');
    // END
    
    // Module Of routes for Quality
    Route::get('/calidad/quality', [App\Http\Controllers\Calidad\CalidadController::class, 'index'])->name('index_quality');
    Route::get('/calidad/history-quality', [App\Http\Controllers\Calidad\CalidadHistoryController::class, 'index'])->name('graphic_quality');
    // END

    Route::get('/reports', function(){ echo "<p>Hola reportes</p> <p><a href='/'>Regresar</a></p>"; })->name('reports');
});
