<template>

 <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #4D5167;">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img :src="require('@/assets/rental logo.png')" alt="Logo" width="80">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#" style="color: white;">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style="color: white;">Rentals</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style="color: white;">Booking</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style="color: white;">Forum</a>
          </li>
        </ul>
        <form class="d-flex ms-auto">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>


  <!-- Name of Car -->
  <div class="container mt-4">
    <div class="row align-items-center ">
     <div class="col">
  <h1 class="text-center" style="color: #783D07; font-weight: bold;">NISSAN PATROL <img src="@/assets/Nissan_2020_logo.png" alt="Nissan Patrol Logo" width="50"></h1>
  </div>
    </div>
  </div>

   

  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-6">


 <!-- Card of the car -->
<div class="card card-hover" style="width: 700px; height: 430px; margin-left: -80px; background-color: #F0F0F0; border-color: #D9D9D9;">
  <div class="card-body">
    <img src="@/assets/NISSAN-PATROL.png" alt="Car" style="max-width: 100%; max-height: 100%; transition: transform 0.3s ease;">
    <div class="mt-3" style="color: black;">
      <p class="d-inline" style="float: left;">Pricing: 1000/day</p>
      <button class="btn btn-custom float-end" style="background-color: #4D5167; color: white;">Rent Now</button> <!-- Added white font color -->
    </div>
  </div>
</div>
</div>

        <!-- Nissan Patrol Overview -->
      <div class="col-lg-5 text-center mt-5"> <!-- Added margin top -->
        <h2>Nissan Patrol Overview</h2>
        <p>
The Nissan Patrol is the brand's flagship SUV model in the Philippines. It comes with Nissan's latest iteration of the V-motion look and comes with a futuristic and modern design. </p>
      </div>
    </div>
  </div>

  <!-- Specifications Header Left -->
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <h3>Nissan Patrol Specifications</h3>
        <table class="table table-striped mt-1" style="border-collapse: collapse; border: 1px solid #D9D9D9;"> <!-- Adjusted width of the table -->
          <tbody>
            <tr>
              <td style="border: 1px solid #D9D9D9;">Body Type</td>
              <td style="border: 1px solid #D9D9D9;">SUV</td>
            </tr>
            <tr>
              <td style="border: 1px solid #D9D9D9;">No. of seats</td>
              <td style="border: 1px solid #D9D9D9;">8</td>
            </tr>
             <tr>
              <td style="border: 1px solid #D9D9D9;">Fuel Type</td>
              <td style="border: 1px solid #D9D9D9;">Gasoline</td>
            </tr>
             <tr>
              <td style="border: 1px solid #D9D9D9;">Transmission</td>
              <td style="border: 1px solid #D9D9D9;">Automatic</td>
            </tr>
             <tr>
              <td style="border: 1px solid #D9D9D9;">Airbags</td>
              <td style="border: 1px solid #D9D9D9;">6</td>
            </tr>
            <tr>
              <td style="border: 1px solid #D9D9D9;">Front Parking Sensors</td>
              <td style="border: 1px solid #D9D9D9;">Available</td>
            </tr>
            <tr>
              <td style="border: 1px solid #D9D9D9;">Rear Parking Sensors</td>
              <td style="border: 1px solid #D9D9D9;">Available</td>
            </tr>
             <tr>
              <td style="border: 1px solid #D9D9D9;">Drivetrain</td>
              <td style="border: 1px solid #D9D9D9;">Four-Wheel Drive</td>
            </tr>
            <tr>
              <td style="border: 1px solid #D9D9D9;">Fuel Capacity</td>
              <td style="border: 1px solid #D9D9D9;">100 to 140 liters</td>
            </tr>
            <tr>
              <td style="border: 1px solid #D9D9D9;">Power Windows</td>
              <td style="border: 1px solid #D9D9D9;">Available</td>
            </tr>
            <tr>
              <td style="border: 1px solid #D9D9D9;">Key less Entry</td>
              <td style="border: 1px solid #D9D9D9;">Yes</td>
            </tr>
            <tr>
              <td style="border: 1px solid #D9D9D9;">Navigation Ready</td>
              <td style="border: 1px solid #D9D9D9;">Available</td>
            </tr>
          </tbody>
        </table>
      </div>
 <div class="col-md-6">
  <div class="d-flex justify-content-start"> <!-- Adjusted justify-content to start -->
    <div style="margin-right: 0;  margin-left: 130px"> <!-- Adjusted margin-right -->
      <h3 class="mb-0">Pros</h3> <!-- Moved "Pros" header to the left -->
    </div>
    <div style="margin-right: 100px; margin-left: 250px;"> <!-- Adjusted margin-left and added negative margin-right -->
      <h3 class="mb-0">Cons</h3> <!-- Added "Cons" header -->
    </div>
  </div>

  <!-- Specifications Header Right -->
  <table class="table table-striped mt-1" style="border-collapse: collapse; border: 1px solid #D9D9D9;"> <!-- Adjusted width of the table -->
    <tbody>
      <tr>
        <td style="border: 1px solid #D9D9D9;">Off-Road Capability</td>
        <td style="border: 1px solid #D9D9D9;">Fuel Inefficient</td>
      </tr>
      <tr>
        <td style="border: 1px solid #D9D9D9;">Powerful Engine</td>
        <td style="border: 1px solid #D9D9D9;">Less Smooth Handling</td>
      </tr>
      <tr>
        <td style="border: 1px solid #D9D9D9;">Spacious Interior</td>
        <td style="border: 1px solid #D9D9D9;">Outdated Technology</td>
      </tr>
      <tr>
        <td style="border: 1px solid #D9D9D9;">Towing Capacity</td>
        <td style="border: 1px solid #D9D9D9;"></td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  </div>


  <!-- FOOTER -->
  <div class="footer-container" style="height: auto;">
<footer class="text-center mt-4 text-white" style="background-color: #4D5167;">
    <div class="container" >
      <div class="row">
        
        <!-- Logo -->
        <div class="col-md-2">
          <img src="../assets/rental logo.png" alt="Logo" style="max-width: 250px; margin-left: -15px;">
          <div style=" margin-top:25px;">
          
            <a href="#"><img src="@/assets/Facebook-Logosu.png" alt="Facebook" style="max-width: 50px;"></a>
            <a href="#"><img src="@/assets/ig.png" alt="Twitter" style="max-width: 40px;"></a>
            <a href="#"><img src="@/assets/Telegram-logo.png" alt="Instagram" style="max-width: 50px;"></a>
        </div>
        </div>
        
        <!-- Contact Us -->
        <div class="col-md-4">
            <h5 style="color: #49D06E; margin-top: 20px;">Contact Us</h5>
            
          <p>Phone: +1234567890</p>
          <p>Email: example@gmail.com</p>
        </div>
        <!-- Quick Links -->
        <div class="col-md-3">
            <h5 style="color: #49D06E; margin-top: 20px;">Quick Links</h5>
          <ul class="list-unstyled">
            <li><a href="#" style="color: white;">FAQ</a></li>
            <li><a href="#" style="color: white;">Why Choose Us?</a></li>
          </ul>
        </div>

        <!-- Questions and Queries -->
        <div class="col-md-3">
            <h5 style="color: #49D06E; margin-top: 20px;">Questions and Queries</h5>
          <form>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter your query" style="height: 70px;">
            </div>
            <button type="submit" class="btn btn-custom btn-block" style="background-color: #3BA859;color: white; margin-top: 10px; width: 100%;">Submit</button>
          </form>
        </div>
        <hr style="border-top: 2px solid black; margin-top: 20px;">
        
    <!-- All Rights Reserved -->
    <p>&copy; 2024 Car Rental. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>
</template>

<style>
.btn-custom {
    background-color: #4D5167;
    border-color: #4D5167;
    color: white;
  }
  /* Define alternate row colors */
  .table-striped tbody tr:nth-of-type(odd) {
    background-color: #f9f9f9; /* Alternate row color */
  }
  .table-striped tbody tr:nth-of-type(even) {
    background-color: #ffffff; /* Default row color */
  }
   /* CSS for hover effect */
  .card:hover {
    transform: translateY(-5px); /* Move the card up slightly on hover */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  }
</style>
