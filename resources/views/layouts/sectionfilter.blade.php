<div class="card">
	<div class="card-header">{{ __('Filtros') }}</div>

	<div class="card-body bg-white filters">

		<div class="row">

			<div class="col-md-6">
				<label for="lineSelect">Seleccione una linea</label>
				<select name="" id="lineSelect" class="form-select bg-white lineSelect">
					<option value="1">Linea 1</option>
					<!-- Obtener informacion de catalogo -->
				</select>
			</div>

			<div class="col-md-6">
				<label for="sideSelect">Seleccione un lado</label>
				<select class="form-select bg-white sideSelect" name="" id="sideSelect">
					<option value="a">Lado A</option>
					<option value="b">Lado B</option>
					<!-- <option value="z">Ambos</option> -->
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

							<label for="startHour" class="mt-2">Hora Inicio</label>
							<input type="time" name="" id="startHour" class="form-control bg-white startHour" value="00:00">

						</div>
						<div class="col-md-6">

							<label for="endHour" class="mt-2">Hora fin</label>
							<input type="time" name="" id="endHour" class="form-control bg-white endHour" value="23:59">

						</div>
					</div>

					<div class="row search searchDays hidden">
						<div class="col-md-6">

							<label for="startDate" class="mt-2">Fecha Inicio</label>
							<input type="date" name="" id="startDate" class="form-control bg-white startDate">

						</div>
						<div class="col-md-6">

							<label for="endDate" class="mt-2">Fecha fin</label>
							<input type="date" name="" id="endDate" class="form-control bg-white endDate">

						</div>
					</div>

					<div class="row search searchMonth hidden">
						<div class="col-md-12">

							<label for="month" class="mt-2">Seleccione mes</label>
							<input type="month" name="" id="startMonth" class="form-control bg-white startMonth">

							<input type="hidden" name="" id="endMonth" class="form-control bg-white endMonth" value="endMonth">
						</div>
					</div>
				</div>

				<hr style="margin: 1rem 0 1rem 0;">

			</div>

			<div class="additionalSection">
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
