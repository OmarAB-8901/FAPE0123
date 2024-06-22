<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <link rel="shortcut icon" href="/img/icons/favicon-pepsico.png" type="image/x-icon">

        <link rel="stylesheet" href="/css/bootstrap/bootstrapIcons.css">
        <link rel="stylesheet" href="/css/bootstrap/bootstrap_5-3-3.min.css">

        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

        <link rel="stylesheet" href="/css/main.css">
        <link rel="stylesheet" href="/css/sidebar.css">
        <link rel="stylesheet" href="/css/filterModule.css">
        <link rel="stylesheet" href="/css/loader.css">

        @yield('css_section')

        <!-- Scripts -->
        @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    </head>
    <body>

        <div id="app">
            <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div class="container">
                    <a class="navbar-brand" href="{{ url('/') }}">
                        {{ config('app.name', 'Laravel') }}
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Left Side Of Navbar -->
                        <ul class="navbar-nav me-auto">

                        </ul>

                        <!-- Right Side Of Navbar -->
                        <ul class="navbar-nav ms-auto">
                            <!-- Authentication Links -->
                            <!-- @guest
                                @if (Route::has('login'))
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                    </li>
                                @endif -->

                                <!-- @if (Route::has('register'))
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                    </li>
                                @endif -->
                            <!-- @else -->
                                <li class="nav-item dropdown">
                                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre style="padding: 0; display: flex; gap: 0.25rem; align-items: center;">
                                        <i class="bi bi-person-circle" style="margin-right: 0.25rem; font-size: 23px"></i>
                                        {{ Auth::user()->name }}
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" style="width: 100%;">
                                        <a class="dropdown-item exit" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                            <i class="bi bi-box-arrow-left"></i>
                                            {{ __('Cerrar Sesión') }}
                                        </a>

                                        <!-- <a class="dropdown-item" href="{{ route('home') }}">
                                            <i class="bi bi-gear"></i>
                                            {{ __('Configuración') }}
                                        </a> -->

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                            @csrf
                                        </form>

                                        <!-- <a class="dropdown-item" href="/"onclick="">
                                            {{ __('Registrar') }}
                                        </a> -->
                                    </div>
                                </li>
                            <!-- @endguest -->
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="row">
                <div class="sidebar col-md-2">
                    @yield('sidebar')
                </div>

                <div class="col-md-10 mainContent">

                    <main class="py-4">
                        @yield('content')
                    </main>
                </div>

                <div class="col-md-10 spinner noDisplay" style="display: flex; justify-content: center; align-items: center;"><div class="spinner-border text-primary" role="status" style="font-size: 20px; width: 10rem; height: 10rem;"></div></div>
            </div>
        </div>

        <!-- <script src="/js/bootstrap/bootstrap_5-3-3.min.js"></script> -->

        <script src="/js/chartjs/main.js"></script>
        <script src="/js/main.js"></script>
        <script src="/js/sidebar.js"></script>
        <script src="/js/filterModule.js"></script>

        @yield('js_section')

    </body>
</html>
