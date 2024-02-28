@extends('layouts.sidebar')

@section('content')
<div class="container">

  <div class="row justify-content-center">
    <div class="col-md-9">
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

          <div><canvas id="chartProduccion"></canvas></div>
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

        <div class="card-body horizontalScroll">

          <table class="table table-striped tableAbortKgs">
            <thead>
              <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
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
@endsection

@section('js_section')
    <script src="/js/produccion/history.js"></script>
    <script src="/js/produccion/graphics.js"></script>
@endsection