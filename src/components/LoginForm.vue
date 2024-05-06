<template>
    <div>
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-4">
            <div class="card bg-custom">
              <div class="card-body">
                <img src="../assets/rental logo.png" alt="Logo" class="mb-4 mx-auto d-block" style="max-width: 190px;">
                
                <p class="card-text text-center text-white">To rent a car, please login with your email and password.</p>
                <form @submit.prevent="login">
                  <div class="form-group mb-3">
                    <input type="email" class="form-control" v-model="email" placeholder="Email" required>
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" v-model="password" placeholder="Password" required>
                  </div>
                  <div class="form-group">
                    <p class="text-center text-white" style="margin-top: 15px;">
      Don’t have an account? 
      <!-- Use router-link for navigation -->
      <router-link to="/registration" class="text-white" style="text-decoration: none;">
        Sign up <u>here</u>
      </router-link>
    </p>


                  </div>
                  <button type="submit" class="btn btn-custom btn-block" style="background-color: #49D06E; color: white; width: 100%;">Login</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Login Container -->
  
   <!-- Footer Container -->
<div class="footer-container" style="height: auto;">
    
  <footer class="text-center mt-4 text-white bg-custom-footer">
    
    <div class="container" >
        
      <div class="row">
        
        <!-- Logo -->
        <div class="col-md-2">
          <img src="../assets/rental logo.png" alt="Logo" style="max-width: 250px; margin-left: -15px;">
          <div style=" margin-top:25px;">
          
            <a href="#"><img src="../assets/Facebook-Logosu.png" alt="Facebook" style="max-width: 50px;"></a>
            <a href="#"><img src="../assets/ig.png" alt="Twitter" style="max-width: 40px;"></a>
            <a href="#"><img src="../assets/Telegram-logo.png" alt="Instagram" style="max-width: 50px;"></a>
        </div>
        </div>
        
        <!-- Contact Us -->
        <div class="col-md-4">
            <h5 style="color: #49D06E; margin-top: 20px;">Contact Us</h5>
            
          <p>Phone: 09206560145</p>
          <p>Email: RentX@gmail.com</p>
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
    <p>&copy; 2024 RENT-X. All rights reserved.</p>
      </div>
      
    </div>
    
  </footer>
</div>
<!-- End of Footer Container -->


    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Handle login logic here
        console.log('Login clicked');
        console.log('Email:', this.email);
        console.log('Password:', this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  .bg-custom {
    background-color: #4D5167;
    text-align: center;
  }
  
  .text-white {
    color: white;
  }
  
  .btn-custom {
    background-color: #D9D9D9;
    color: black; /* Optionally change text color to contrast with background */
    margin: 0 auto; /* Center the button */
    transition: background-color 0.3s ease; /* Smooth transition */
  }
  
  .btn-custom:hover {
    background-color: #ffffff; /* Change to white on hover */
  }
  
  .bg-custom-footer {
    background-color: #4D5167; /* Custom background color for the footer */
  }
  
  .footer-container {
    margin-top: 240px; /* Adjust the top margin to create space between the login container and the footer */
    
  }
  </style>
  