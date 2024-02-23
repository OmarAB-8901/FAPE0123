@extends('layouts.app')

@section('sidebar')
    <div class="sidebar-content shadow">

        <div class="header-sidebar-main py-4">
            <h5 class="justify-content-center pb-0 mb-0">LOGO</h5>
        </div>

        <hr style="margin-top: 0 !important;">

        <!-- <div class="content close"> -->
        <div class="content close">
            <div class="header-sidebar">
                <h6 class="pt-3"><span class="menuOpenClose"></span> Calidad</h6>
            </div>

            <div class="body-sidebar">
                <a href="{{ Route('quality') }}" class="pt-1">Inicio</a>
                <a href="{{ Route('grapic_quality') }}" class="pt-1">Grafica</a>
                <!-- <a href="{{ Route('reports') }}" class="pt-1">Reporte</a> -->
            </div>
        </div>

        <hr>

        <!-- <div class="content close"> -->
        <div class="content close">
            <div class="header-sidebar">
                <h6 class="pt-3"><span class="menuOpenClose"></span> Produccion</h6>
            </div>

            <div class="body-sidebar">
                <a href="{{ Route('production') }}" class="pt-1">Abortos</a>
                <a href="{{ Route('efficiency_production') }}" class="pt-1">Eficiencia</a>
                <a href="{{ Route('mondini_production') }}" class="pt-1">Mondinis</a>
                <!-- <a href="{{ Route('reports') }}" class="pt-1">Reporte</a> -->
            </div>
        </div>

        <hr>

        <!-- <div class="content close"> -->
        <div class="content close">
            <div class="header-sidebar">
                <h6 class="pt-3"><span class="menuOpenClose"></span> Mantenimiento</h6>
            </div>

            <div class="body-sidebar">
                <a href="{{ Route('maintenance') }}" class="pt-1">Inicio</a>
                <a href="{{ Route('grapic_maintenance') }}" class="pt-1">Grafica</a>
                <!-- <a href="{{ Route('reports') }}" class="pt-1">Reporte</a> -->
            </div>
        </div>

        <hr>

    </div>
@endsection
