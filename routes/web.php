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
    
    // Routes of modules requied by the client
    Route::get('/produccion/index', [App\Http\Controllers\Produccion\ProduccionController::class, 'index'])->name('production');
    Route::get('/produccion/eficiencia', [App\Http\Controllers\Produccion\ProduccionEficienciaController::class, 'index'])->name('efficiency_production');
    Route::get('/produccion/mondini', [App\Http\Controllers\Produccion\ProduccionMondiniController::class, 'index'])->name('mondini_production');
    
    Route::get('/mantenimiento/index', [App\Http\Controllers\Mantenimiento\MantenimientoController::class, 'index'])->name('maintenance');
    Route::get('/mantenimiento/graphic', [App\Http\Controllers\Mantenimiento\MantenimientoGraphController::class, 'index'])->name('grapic_maintenance');
    
    Route::get('/calidad/index', [App\Http\Controllers\Calidad\CalidadController::class, 'index'])->name('quality');
    Route::get('/calidad/graphic', [App\Http\Controllers\Calidad\CalidadGraphController::class, 'index'])->name('grapic_quality');

    Route::get('/reports', function(){ echo "<p>Hola reportes</p> <p><a href='/'>Regresar</a></p>"; })->name('reports');
});
