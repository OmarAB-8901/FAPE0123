@extends('layouts.sidebar')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-9">
            <div class="card shadow abortKgs">
                <div class="card-header">{{ __('Abortos Kilos') }}</div>

                <div class="card-body horizontalScroll">
                    
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

        <div class="col-md-3">
            @include('layouts.sectionfilter')  
        </div>

    </div>

    <div class="row mt-3">
        <div class="col-md-9">
            <div class="card shadow abortKgs">
                <div class="card-header">{{ __('Mondinis') }}</div>

                <div class="card-body">

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Mondini L1 - A</th>
                                <th>Mondini L1 - B</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>xx ciclos por minuto</td>
                                <td>xx ciclos por minuto</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
    
</div>
@endsection
