@extends('layouts.sidebar')

@section('content')
<div class="container">

    <div class="row justify-content-center">
        <div class="col-md-9">
            <div class="card shadow">
                <div class="card-header">{{ __('Historico Calidad') }}</div>

                <div class="card-body bg-white">

                    <div class="doughnutsCharts"></div>
                    <div><canvas id="chartBarProduction"></canvas></div>

                </div>
            </div>
        </div>

        <div class="col-md-3">
            @include('layouts.sectionfilter')
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-md-9">
            <div class="card shadow abortKgs">
                <div class="card-header">{{ __('Historico Calidad') }}</div>

                <div class="card-body bg-white hasTable horizontalScroll">

                    <table class="table table-hover table-sm tableQuality">
                        <thead>
                            <tr>
                                <th>Evento</th>
                                <th>Tipo de dato</th>
                                <th>Valor referencia</th>
                                <th>Valor Real</th>
                                <th>PLC</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    </div>

</div>
@endsection

@section('css_section')
    <link rel="stylesheet" href="/css/chartjs/main.css"></link>
    <link rel="stylesheet" href="/css/calidad/main.css"></link>
@endsection

@section('js_section')
    <script src="/js/calidad/history.js" type="module"></script>
@endsection