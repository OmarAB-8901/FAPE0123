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
                <h6 class="py-3 mb-0 ps-3"> Calidad</h6>
            </div>

            <div class="body-sidebar" style="height: 6vh;">
                <a href="{{ Route('index_quality') }}" class="pt-1">Andon</a>
                <a href="{{ Route('graphic_quality') }}" class="pt-1">Historico</a>
            </div>
        </div>

        <hr>

        <div class="content close">
            <div class="header-sidebar">
                <h6 class="py-3 mb-0 ps-3"> Produccion</h6>
            </div>

            <div class="body-sidebar" style="height: 10.3vh;">
                
                <div class="inner_menu pt-1 content close">
                    <div class="header-sidebar">
                        <span class="">Abortos</span>
                    </div>
                    <div class="body-sidebar">
                        <a href="{{ Route('expulsion_production') }}" class="mt-0">Andon</a>
                        <a href="{{ Route('history_expulsion_production') }}" class="mt-1">Historico</a>
                    </div>
                </div>

                <div class="pt-2 inner_menu content close">
                    <div class="header-sidebar">
                        <span class="">Eficiencias</span>
                    </div>
                    <div class="body-sidebar">
                        <a href="{{ Route('efficiency_production') }}" class="mt-0">Andon</a>
                        <a href="{{ Route('history_efficiency_production') }}" class="mt-1">Historico</a>
                    </div>
                </div>

                <div class="pt-2 inner_menu content close">
                    <div class="header-sidebar mb-2">
                        <span class="">Mondinis</span>
                    </div>
                    <div class="body-sidebar">
                        <a href="{{ Route('mondini_production') }}" class="mt-0">Andon</a>
                        <a href="{{ Route('history_mondini_production') }}" class="mt-1">Historico</a>
                    </div>
                </div>

            </div>
        </div>

        <hr>

        <div class="content close">
            <div class="header-sidebar">
                <h6 class="py-3 mb-0 ps-3"> Mantenimiento</h6>
            </div>

            <div class="body-sidebar" style="height: 6vh;">
                <a href="{{ Route('index_maintenance') }}" class="pt-1">Andon</a>
                <a href="{{ Route('graphic_maintenance') }}" class="pt-1">Historico</a>
            </div>
        </div>

        <hr>

    </div>
@endsection