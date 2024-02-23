@extends('layouts.sidebar')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-9 justify-content-left">
            <div class="card shadow">
                <div class="card-header">{{ __('Mantenimiento') }}</div>

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
</div>
@endsection

@section('jsSection')
    <script src="/js/mantenimiento/graphics.js"></script>
@endsection