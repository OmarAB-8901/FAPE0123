@extends('layouts.sidebar')

@section('content')
<div class="container">

  <div class="row justify-content-center">
    <div class="col-md-9">
      <div class="card shadow">
        <div class="card-header">{{ __('Produccion') }}</div>

        <div class="card-body bg-white">

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

        <div class="card-body bg-white hasTable horizontalScroll">

          <table class="table table-hover table-sm tableAbortKgs">
            <thead>
              <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
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
    <script src="/js/produccion/eficiencia/history.js" type="module"></script>
@endsection