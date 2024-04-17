@extends('layouts.sidebar')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-9">
            <div class="card shadow">
                <div class="card-header">{{ __('Mantenimiento') }}</div>

                <div class="card-body hasTable bg-white">
                    
                    <table class="table table-hover table-sm tableMaintenance">
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
                        <tbody class="table-group-divider"></tbody>
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

@section('css_section')
    <link rel="stylesheet" href="/css/mantenimiento/main.css"></link>
@endsection

@section('js_section')
    <script src="/js/mantenimiento/andon.js" type="module"></script>
@endsection
