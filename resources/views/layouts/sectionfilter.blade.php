<div class="card">
	<div class="card-header">{{ __('Filtros') }}</div>

	<div class="card-body bg-white filters">

		<div class="row">

			<div class="col-md-6">
				<label for="">Seleccione una linea</label>
				<select name="" id="" class="form-select bg-white">
					<option value="">Linea 1</option>
					<option value="">Linea 2</option>
					<option value="">Linea 3</option>
					<!-- Obtener informacion de catalogo -->
				</select>
			</div>

			<div class="col-md-6">
				<label for="">Seleccione un lado</label>
				<select class="form-select bg-white" name="" id="">
					<option value="">Lado A</option>
					<option value="">Lado B</option>
					<option value="">Ambos</option>
				</select>
			</div>

			<hr style="margin: 1rem 0 1rem 0;">

			<div class="modulesFilterHistory">
				<div class="row">
					<div class="col-md-12">
						<h6>Buscar por:</h6>		
					</div>
				</div>

				<div class="row typeSearch mb-3">
					<div class="col-md-12">

						<button class="searchHours btn btn-info btn-sm">Horas</button>
						<button class="searchDays btn btn-outline-info btn-sm">Dias</button>
						<button class="searchMonth btn btn-outline-info btn-sm">Mes</button>

					</div>
				</div>

				<div class="selectorsFilters">
					<div class="row search searchHours">
						<div class="col-md-6">

							<label for="" class="mt-2">Hora Inicio</label>
							<input type="time" name="" id="" class="form-control bg-white">

						</div>
						<div class="col-md-6">

							<label for="" class="mt-2">Hora fin</label>
							<input type="time" name="" id="" class="form-control">

						</div>
					</div>

					<div class="row search searchDays hidden">
						<div class="col-md-6">

							<label for="" class="mt-2">Fecha Inicio</label>
							<input type="date" name="" id="" class="form-control">

						</div>
						<div class="col-md-6">

							<label for="" class="mt-2">Fecha fin</label>
							<input type="date" name="" id="" class="form-control">

						</div>
					</div>

					<div class="row search searchMonth hidden">
						<div class="col-md-12">

							<label for="" class="mt-2">Seleccione mes</label>
							<input type="month" name="" id="" class="form-control">

						</div>
					</div>
				</div>

				<hr style="margin: 1rem 0 1rem 0;">

			</div>

			<div class="row justify-content-end">
				<div class="col-md-7">
					<div class="groupButtons">
						<button class="btn btn-primary btn-download">Descargar</button>
						<button class="btn btn-success btn-search">Consultar</button>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>