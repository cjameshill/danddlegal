@extends('app')
@section('container')

    <div class="contentWrapper">

        @include('partials._header')

        @include('partials._dropdown')

        @yield('content')

        @include('partials._footer')

    </div>

@endsection