<script setup>
import Bookings from './Bookings.vue'
</script>
<template>
  <head>
    <title>Home page</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
   <!-- change when done hbs-->
    <link rel="stylesheet" href="/style.css">
    <!-- to use socket.io -->
    <!--<script src="https://cdn.socket.io/4.5.4/socket.io.min.js"></script> -->
  </head>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
            <img src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
            <span class="menu-collapsed">Taxi Booking Operation</span>
        </a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Booking</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Driver</a>
                </li>
                <!-- This menu is hidden in bigger devices with d-sm-none.The sidebar isn't proper for smaller screens imo, so this dropdown menu can keep all the useful sidebar itens exclusively for smaller screens  -->
                <li class="nav-item dropdown d-sm-block">
                    <a class="nav-link dropdown-toggle" href="#" id="smallerscreenmenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Menu
                    </a>
                    <div class="dropdown-menu" aria-labelledby="smallerscreenmenu">
                        <a class="dropdown-item" href="#">Dashboard</a>
                        <a class="dropdown-item" href="#">Bookings</a>
                        <a class="dropdown-item" href="#">Drivers</a>
                    </div>
                </li>
                <!-- Smaller devices menu END -->
            </ul>
        </div>
    </nav>
    <!-- title-->
    <!-- booking component-->
  <Bookings/>
    <!-- handlebars{{{ body }}}-->
    <!--Footer-->
    <footer class="fixed-bottom">
        <div class="container bg-dark text-white">
            Copyright by BIZ OP
        </div>
    </footer>
</template>
