@extends('layouts.app')

@section('sidebar')
    <div class="sidebar-content bg-white shadow">

        <div class="header-sidebar-main py-3">
            <!-- <h5 class="justify-content-center pb-0 mb-0">LOGO</h5> -->
            <a href="{{Route('home')}}">
              <img src="/img/pepsico_transparente.png" alt="" height="75" width="100">
            </a>
        </div>

        <hr style="margin-top: 0 !important;">

        <!-- <div class="content close"> -->
        <div class="content close">
            <div class="header-sidebar">
                <h6 class="py-3 mb-0 ps-3 bi-my_icon">Calidad</h6>
            </div>

            <div class="body-sidebar">
                <a href="{{ Route('index_quality') }}" class="py-1 bi-my_icon">Andon</a>
                <a href="{{ Route('graphic_quality') }}" class="py-1 bi-my_icon">Historico</a>
            </div>
        </div>

        <hr>

        <div class="content close">
            <div class="header-sidebar">
                <h6 class="py-3 mb-0 ps-3 bi-my_icon">Produccion</h6>
            </div>

            <div class="body-sidebar">
                
                <div class="inner_menu pt-1 content close">
                    <div class="header-sidebar inner_menu">
                        <span class="bi-my_icon">Abortos</span>
                    </div>
                    <div class="body-sidebar inner_menu">
                        <a href="{{ Route('expulsion_production') }}" class="py-1 bi-my_icon">Andon</a>
                        <a href="{{ Route('history_expulsion_production') }}" class="py-1 bi-my_icon">Historico</a>
                    </div>
                </div>

                <div class="inner_menu pt-2 content close">
                    <div class="header-sidebar inner_menu">
                        <span class="bi-my_icon">Eficiencias</span>
                    </div>
                    <div class="body-sidebar inner_menu">
                        <a href="{{ Route('efficiency_production') }}" class="py-1 bi-my_icon">Andon</a>
                        <a href="{{ Route('history_efficiency_production') }}" class="py-1 bi-my_icon">Historico</a>
                    </div>
                </div>

                <div class="inner_menu pt-2 content close">
                    <div class="header-sidebar mb-2 inner_menu">
                        <span class="bi-my_icon">Mondinis</span>
                    </div>
                    <div class="body-sidebar inner_menu">
                        <a href="{{ Route('mondini_production') }}" class="py-1 bi-my_icon">Andon</a>
                        <a href="{{ Route('history_mondini_production') }}" class="py-1 bi-my_icon">Historico</a>
                    </div>
                </div>

            </div>
        </div>

        <hr>

        <div class="content close">
            <div class="header-sidebar">
                <h6 class="py-3 mb-0 ps-3 bi-my_icon">Mantenimiento</h6>
            </div>

            <div class="body-sidebar">
                <a href="{{ Route('index_maintenance') }}" class="py-1 bi-my_icon">Andon</a>
                <a href="{{ Route('graphic_maintenance') }}" class="py-1 bi-my_icon">Historico</a>
            </div>
        </div>

        <hr>

    </div>
@endsection