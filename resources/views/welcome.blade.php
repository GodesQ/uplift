<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>UPLIFT</title>
        <link rel="shortcut icon" type="image/x-icon" href="../../../images/logos/uplift_logo.png">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <style>
            body {
                font-family: 'Varela Round', sans-serif;
                background: #F0F0F0;
            }
        </style>

    </head>
    <body class="antialiased">
        <div id="root"></div>
        <script src="{{ asset('js/spark/module/logic/connection.js')}}"></script>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
