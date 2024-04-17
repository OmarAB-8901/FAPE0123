@extends('layouts.sidebar')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-9">
            <div class="card shadow">
                <div class="card-header">{{ __('Calidad') }}</div>

                <div class="card-body bg-white hasTable">
                
                    <table class="table table-hover table-sm tableQuality">
                        <thead>
                            <tr>
                                <th>Evento</th>
                                <th>Tipo de dato</th>
                                <th>Valor referencia</th>
                                <th>Valor Real</th>
                                <th>PLC</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            
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

@section('css_section')
    <link rel="stylesheet" href="/css/calidad/main.css"></link>
@endsection

@section('js_section')
    <script src="/js/calidad/andon.js" type="module"></script>
@endsection