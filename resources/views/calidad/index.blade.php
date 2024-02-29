@extends('layouts.sidebar')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-9">
            <div class="card shadow">
                <div class="card-header">{{ __('Calidad') }}</div>

                <div class="card-body bg-white hasTable">
                
                    <table class="table table-hover table-sm">
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
                            <tr>
                                <td>Humedad en frito (In FL-710)</td>
                                <td>FLOTANTE</td>
                                <td>10</td>
                                <td>9</td>
                                <td>FREIDOR, SAZONADO</td>
                            </tr>
                            <tr>
                                <td>Adicion de Emulsificante ACTIVA</td>
                                <td>BOOL</td>
                                <td>TRUE</td>
                                <td>TRUE</td>
                                <td>DRY MIX</td>
                            </tr>
                            <tr>
                                <td>Adicion de Emulsificante LECTURA</td>
                                <td>FLOTANTE</td>
                                <td>10</td>
                                <td>9</td>
                                <td>DRY MIX</td>
                            </tr>
                            <tr>
                                <td>Temperartura de el freidor</td>
                                <td>FLOTANTE</td>
                                <td>10</td>
                                <td>9</td>
                                <td>FREIDOR</td>
                            </tr>
                            <tr>
                                <td>Temperartura de residencia en freidor</td>
                                <td>FLOTANTE</td>
                                <td>10</td>
                                <td>9</td>
                                <td>FREIDOR</td>
                            </tr>
                            <tr>
                                <td>Feeders en funcionamiento</td>
                                <td>BOOL</td>
                                <td>FALSE</td>
                                <td>TRUE</td>
                                <td>SASONADO</td>
                            </tr>
                            <tr>
                                <td>Docificacion de flake ACTIVA</td>
                                <td>BOOL</td>
                                <td>10</td>
                                <td>9</td>
                                <td>DRY MIX</td>
                            </tr>
                            <tr>
                                <td>Docificacion de flake LECTURA</td>
                                <td>FLOTANTE</td>
                                <td>10</td>
                                <td>9</td>
                                <td>DRY MIX</td>
                            </tr>
                            <tr>
                                <td>Docificacion de minors ACTIVA</td>
                                <td>BOOL</td>
                                <td>10</td>
                                <td>9</td>
                                <td>DRY MIX</td>
                            </tr>
                            <tr>
                                <td>Docificacion de minors LECTURA</td>
                                <td>FLOTANTE</td>
                                <td>10</td>
                                <td>9</td>
                                <td>DRY MIX</td>
                            </tr>
                            <tr>
                                <td>Docificacion Sucrosa ACTIVA</td>
                                <td>BOOL</td>
                                <td>10</td>
                                <td>9</td>
                                <td>DRY MIX</td>
                            </tr>
                            <tr>
                                <td>Docificacion Sucrosa LECTURA</td>
                                <td>FLOTANTE</td>
                                <td>10</td>
                                <td>9</td>
                                <td>DRY MIX</td>
                            </tr>
                            <tr>
                                <td>Adicion de agua en Pavan ACTIVO</td>
                                <td>BOOL</td>
                                <td>10</td>
                                <td>9</td>
                                <td>DRY MIX</td>
                            </tr>
                            <tr>
                                <td>Adicion de agua en Pavan LECTURA</td>
                                <td>FLOTANTE</td>
                                <td>10</td>
                                <td>9</td>
                                <td>DRY MIX</td>
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

@section('css_section')
    <link rel="stylesheet" href="/css/calidad/main.css"></link>
@endsection

@section('js_section')
    <script src="/js/calidad/andon.js"></script>
    <!-- <script src="/js/calidad/graphics.js"></script> -->
@endsection