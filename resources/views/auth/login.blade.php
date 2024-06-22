@extends('layouts.app')

@section('css_section')

@section('content')
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-5 login-page">
      <div class="card">
        <div class="card-header">{{ __('Acceso') }}</div>

        <div class="card-body">
          <form method="POST" action="{{ route('login') }}">
            @csrf

            <div class="row mb-3">
              <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Correo Electronico') }}</label>

              <div class="col-md-6">
                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                @error('email')
                <span class="invalid-feedback" role="alert">
                  <strong>{{ $message }}</strong>
                </span>
                @enderror
              </div>
            </div>

            <div class="row mb-3">
              <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Contraseña') }}</label>

              <div class="col-md-6">
                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                @error('password')
                <span class="invalid-feedback" role="alert">
                  <strong>{{ $message }}</strong>
                </span>
                @enderror
              </div>
            </div>

            <!-- <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div> -->

            <div class="row mb-0">
              <div class="col-md-8 offset-md-4">
                <button type="submit" class="btn btn-primary btnAccess">
                  {{ __('Acceder') }}
                </button>

                <div class="spinner-border login text-primary" role="status" style="margin-top: 0.5rem"></div>

                <!-- @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif -->
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection

@section('js_section')

<script>
  window.sessionStorage.setItem('SESSION_LIFETIME', "{{ config('session.lifetime', '15') }}");

  document.querySelector('.spinner-border.login').style.display = "none";

  document.querySelector('.btnAccess').addEventListener('click', event => {

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    if(email != "" && password != ""){
      event.srcElement.style.display = "none";
      document.querySelector('.spinner-border.login').style.display = "block";
    }
  });
</script>

@endsection
