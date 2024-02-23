@extends('layouts.sidebar')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-9">
            <div class="card shadow">
                <div class="card-header">{{ __('Mantenimiento') }}</div>

                <div class="card-body">
                    
                    <table class="table table-striped tableMaintenance">
                        <thead>
                            <tr>
                                <th>Equipo L1</th>
                                <th>MTTR</th>
                                <th>MTBF</th>
                                <th>MTTF</th>
                                <th>TM x L1</th>
                                <th>Horas Negras - paro programado(Nuevo campo)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DRY MIX</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>PAVAN</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>FREIDOR</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>ZAZONADO</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr> 
                            <tr>
                                <td>VIBRADORES</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr> 
                            <tr>
                                <td>WCC SIDE A</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr> 
                            <tr>
                                <td>WCC SIDE B</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr> 
                            <tr>
                                <td>GARVEY INFINITY</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr> 
                            <tr>
                                <td>MONDINI SIDE A</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr> 
                            <tr>
                                <td>MONDINI SIDE B</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr> 
                            <tr>
                                <td>KRONES</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr> 
                            <tr>
                                <td>TM DEPALETIZADO</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr> 
                            <tr>
                                <td>TM CALDERA</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
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
</div>
@endsection
