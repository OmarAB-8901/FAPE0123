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

    <div class="row mt-3 justify-content-left">
        <div class="col-md-9">
            <div class="card shadow abortKgs">
                <div class="card-header">{{ __('Abortos Kilos') }}</div>

                <div class="card-body horizontalScroll report">
                    
                    <table class="table table-striped tableAbortKgs">
                        <thead>
                            <tr>
                                <!-- Lado B -->
                                <th>Linea</th>
                                <th>Aborto Kgs</th>
                                <th>Carril 1</th>
                                <th>Carril 2</th>
                                <th>Carril 3</th>
                                <th>Carril 4</th>
                                <th>Carril 5</th>
                                <th>Carril 6</th>
                                <th>Carril 7</th>
                                <th>Carril 8</th>
                                <th>Carril 9</th>
                                <th>Carril 10</th>
                                <!-- Lado B -->
                                <!-- <th>Carril 11</th>
                                <th>Carril 12</th>
                                <th>Carril 13</th>
                                <th>Carril 14</th>
                                <th>Carril 15</th>
                                <th>Carril 16</th>
                                <th>Carril 17</th>
                                <th>Carril 18</th>
                                <th>Carril 19</th>
                                <th>Carril 20</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <!-- Lado A -->
                                <td>1</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <!-- Lado B -->
                                <!-- <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td> -->
                            </tr>
                            <tr>
                                 <!-- Lado A -->
                                 <td>2</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <!-- Lado B -->
                                <!--<td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td> -->
                            </tr>
                            <tr>
                                 <!-- Lado A -->
                                 <td>3</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <!-- Lado B -->
                                <!--<td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td> -->
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
    <script src="/js/produccion/andon.js"></script>
    <script src="/js/produccion/graphics.js"></script>
@endsection