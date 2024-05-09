 @extends('layouts.sidebar')

@section('content')
<div class="container">

    <div class="row justify-content-center">
        <div class="col-md-9">
            <div class="card shadow">
                <div class="card-header">{{ __('Produccion') }}</div>

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
                <div class="card-header">{{ __('Abortos Kilos') }}</div>

                <div class="card-body hasTable   bg-white horizontalScroll">
                    
                    <table class="table table-striped tableMaintenance">
                        <thead>
                            <tr>
                                <th>Equipo L1</th>
                                <th>MTTR</th>
                                <th>MTBF</th>
                                <th>MTTF</th>
                                <th>TM x L1</th>
                                <th>Horas Negras</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>

                </div>
            </div>
        </div>

    </div>
    
</div>
@endsection

@section('css_section')
    <link rel="stylesheet" href="/css/chartjs/main.css"></link>
    <link rel="stylesheet" href="/css/mantenimiento/main.css"></link>
@endsection

@section('js_section')
    <script src="/js/mantenimiento/history.js" type="module"></script>
@endsection