@extends('layouts.sidebar')

@section('content')
<div class="container">

    <div class="row">
        <div class="col-md-9 justify-content-left">
            <div class="card shadow">
                <div class="card-header">{{ __('Produccion') }}</div>

                <div class="card-body">
                    

                    <div class="doughnutsCharts">
                        <div style="width: 14%;"><canvas id="chartDoughnut_1"></canvas></div>
                        <div style="width: 14%;"><canvas id="chartDoughnut_2"></canvas></div>
                        <div style="width: 14%;"><canvas id="chartDoughnut_3"></canvas></div>
                        <div style="width: 14%;"><canvas id="chartDoughnut_4"></canvas></div>    
                        <!-- <div style="width: 14%;"><canvas id="chartDoughnut_5"></canvas></div>    
                        <div style="width: 14%;"><canvas id="chartDoughnut_6"></canvas></div>     -->
                    </div>
                    
                    <div style="width: 100%; height: 34rem; margin-top: 2rem;"><canvas id="chartProduccion"></canvas></div>
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
                <div class="card-header">{{ __('Eficiencia por linea') }}</div>

                <div class="card-body">

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Receta en PAVAN</th>
                                <th>Botes x hora (SAZON)</th>
                                <th>Botes x hora (ORIGINAL)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3.5</td>
                                <td>8900</td>
                                <td>8000</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>9200</td>
                                <td>8300</td>
                            </tr>
                            <tr>
                                <td>4.5</td>
                                <td>9500</td>
                                <td>8500</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>

</div>
@endsection

@section('jsSection')
    <script src="/js/produccion/graphics.js"></script>
@endsection