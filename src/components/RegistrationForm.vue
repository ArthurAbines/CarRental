<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-7">
        <div class="card bg-custom">
          <div class="card-body">

            <img src="../assets/rental logo.png" alt="Logo" class="mb-4 mx-auto d-block" style="max-width: 250px;">
                
               
            <h2 class="card-title text-center text-white mb-4">Please fill up the following</h2>
            <form @submit.prevent="register">
              <div class="form-group row">
                <div class="col">
                  <input type="text" class="form-control" v-model="firstName" placeholder="First Name" required>
                </div>
                <div class="col">
                  <input type="text" class="form-control" v-model="lastName" placeholder="Last Name" required>
                </div>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" v-model="email" placeholder="Email" required>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" v-model="password" placeholder="Password" required>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" v-model="confirmPassword" placeholder="Confirm Password" required>
              </div>
              <div class="form-group">
                <label class="text-white">Gender:</label>
                <select class="form-control" v-model="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div class="form-group row">
                <div class="col">
                  <label class="text-white">Date of Birth:</label>
                  <div class="row">
                    <div class="col">
                      <input type="number" class="form-control" v-model="day" placeholder="Day" min="1" max="31" required>
                    </div>
                    <div class="col">
                      <input type="number" class="form-control" v-model="month" placeholder="Month" min="1" max="12" required>
                    </div>
                    <div class="col">
                      <input type="number" class="form-control" v-model="year" placeholder="Year" min="1900" max="2024" required>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
  <div class="col">
    <div class="form-group">
      <label class="text-white">Upload Profile Image:</label>
      <input type="file" class="form-control-file" @change="handleProfileImageUpload" required>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <label class="text-white">Upload Valid ID:</label>
      <input type="file" class="form-control-file" @change="handleValidIdUpload" required>
    </div>
  </div>
</div>

<div class="d-flex justify-content-center">
  <button type="submit" class="btn btn-custom" style="background-color: #49D06E; color: white; width: 30%; height: 50px;">
    Confirm
  </button>
</div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-container" style="height: auto;">
    <footer class="text-center mt-4 text-white bg-custom-footer">
      <div class="container" >
        <div class="row">
          <div class="col-md-2">
            <img src="../assets/rental logo.png" alt="Logo" style="max-width: 250px; margin-left: -15px;">
            <div style=" margin-top:25px;">
              <a href="#"><img src="../assets/Facebook-Logosu.png" alt="Facebook" style="max-width: 50px;"></a>
              <a href="#"><img src="../assets/ig.png" alt="Twitter" style="max-width: 40px;"></a>
              <a href="#"><img src="../assets/Telegram-logo.png" alt="Instagram" style="max-width: 50px;"></a>
            </div>
          </div>
          <div class="col-md-4">
            <h5 style="color: #49D06E; margin-top: 20px;">Contact Us</h5>
            <p>Phone: 09206560145</p>
            <p>Email: RentX@gmail.com</p>
          </div>
          <div class="col-md-3">
            <h5 style="color: #49D06E; margin-top: 20px;">Quick Links</h5>
            <ul class="list-unstyled">
              <li><a href="#" style="color: white;">FAQ</a></li>
              <li><a href="#" style="color: white;">Why Choose Us?</a></li>
            </ul>
          </div>
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
          <p>&copy; 2024 RENT-X. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      email: '',
      gender: 'male',
      day: '',
      month: '',
      year: '',
      profileImage: null,
      validId: null
    };
  },
  methods: {
    register() {
      // Handle registration logic here
      console.log('Registration clicked');
      console.log('First Name:', this.firstName);
      console.log('Last Name:', this.lastName);
      console.log('Password:', this.password);
      console.log('Confirm Password:', this.confirmPassword);
      console.log('Email:', this.email);
      console.log('Gender:', this.gender);
      console.log('Date of Birth:', `${this.day}/${this.month}/${this.year}`);
      console.log('Profile Image:', this.profileImage);
      console.log('Valid ID:', this.validId);
    },
    handleProfileImageUpload(event) {
      this.profileImage = event.target.files[0];
    },
    handleValidIdUpload(event) {
      this.validId = event.target.files[0];
    }
  }
};
</script>

<style scoped>
.bg-custom {
  background-color: #4D5167;
}

.text-white {
  color: white;
}

.btn-custom {
  background-color: #49D06E;
  color: white;
  border: none;
}

.btn-custom:hover {
  background-color: #3B8C53;
}

.card {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-control {
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

.card-body {
  padding: 40px;
}
.bg-custom-footer {
    background-color: #4D5167; /* Custom background color for the footer */
  }
</style>
