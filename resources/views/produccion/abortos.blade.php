@extends('layouts.sidebar')

@section('content')
<div class="container">

    <div class="row justify-content-center">
        <div class="col-md-9">
            <div class="card shadow">
                <div class="card-header">{{ __('Produccion') }}</div>

                <div class="card-body bg-white">

                    <!-- <div class="doughnutsCharts"></div> -->
                    <!-- <div><canvas id="chartLineProduction"></canvas></div> -->
                    <div><canvas id="chartBarProduction"></canvas></div>

                </div>
            </div>
        </div>

        <div class="col-md-3">
            @include('layouts.sectionfilter')
        </div>
    </div>

    <div class="row mt-3 justify-content-left">
        <div class="col-md-9">
            <div class="card shadow abortKgs">
                <div class="card-header">{{ __('Abortos Kilos Lado') }}</div>

                <div class="card-body bg-white hasTable horizontalScroll report">

                    <table class="table table-hover table-sm tableAbortKgs">
                        <thead>
                            <tr>
                                <!-- Lado B -->
                                <th>Linea</th>
                                <th>Aborto Kgs</th>
                                <th>Carril <span class="nLine"></span></th>
                                <th>Carril <span class="nLine"></span></th>
                                <th>Carril <span class="nLine"></span></th>
                                <th>Carril <span class="nLine"></span></th>
                                <th>Carril <span class="nLine"></span></th>
                                <th>Carril <span class="nLine"></span></th>
                                <th>Carril <span class="nLine"></span></th>
                                <th>Carril <span class="nLine"></span></th>
                                <th>Carril <span class="nLine"></span></th>
                                <th>Carril <span class="nLine"></span></th>
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

@endsection

@section('js_section')
    <script src="/js/produccion/aborto/andon.js" type="module"></script>
@endsection
