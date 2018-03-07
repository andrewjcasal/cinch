<!DOCTYPE html>
<html lang="en">

<head>
  <title>Register</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
    crossorigin="anonymous">
 
  <link href="../style/master.css" rel="stylesheet">
</head>

<body>
  <div class="container" style="margin-top: 90px;">
    <div class="row align-self-center justify-content-center light-montserrat">
      <h2 style="font-size: 34pt; letter-spacing: -0.6pt; font-weight: 300; text-shadow: -1px 0 rgb(150,150,150), 0 1px rgb(150,150,150), 1px 0 rgb(150,150,150), 0 -1px rgb(150,150,150);
"> <strong>Create Your Account<strong></h2>
    </div>
    <div class="row justify-content-center">
      <form style="width: 570px; margin-top: 40px">
        <div class="form-row">
          <div class="form-group col-md-6 pr-3">
            <label class="light-montserrat text-uppercase register-input-label" for="inputFirstName">First Name</label>
            <input type="FirstName" class="register-input-text light-montserrat form-control" placeholder="Your First Name">
          </div>
          <div class="form-group col-md-6 pl-3">
            <label class="light-montserrat text-uppercase register-input-label" for="inputLastName">Last Name</label>
            <input type="LastName" class="register-input-text light-montserrat form-control" placeholder="Your Last Name">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6 pr-3">
            <label class="light-montserrat text-uppercase register-input-label" for="inputEmail">Email</label>
            <input type="email" class="register-input-text light-montserrat form-control" placeholder="Your Email">
          </div>
          <div class="form-group col-md-6 pl-3">
            <label class="light-montserrat text-uppercase register-input-label" for="inputPassword4">Password</label>
            <input type="password" class="register-input-text light-montserrat form-control" placeholder="Password">
          </div>
        </div>
        <div class="form-group">
          <label class="light-montserrat text-uppercase register-input-label" for="inputAddress">Address</label>
          <input type="text" class="register-input-text light-montserrat form-control col-md-12" placeholder="Your Address">
        </div>
        <div class="form-row">
          <div class="form-group col-md-6 pr-3">
            <label class="light-montserrat text-uppercase register-input-label" for="inputCity">City</label>
            <input type="text" class="register-input-text light-montserrat form-control" placeholder="Your City">
          </div>
          <div class="form-group col-md-6 pl-3">
            <label class="light-montserrat text-uppercase register-input-label" for="inputZip">Zip</label>
            <input type="text" class="register-input-text light-montserrat form-control" placeholder="Your Zip Code">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6 pr-3">
            <label class="light-montserrat text-uppercase register-input-label" for="inputCity">State</label>
            <input type="text" class="register-input-text light-montserrat form-control" placeholder="Your State">
          </div>
          <!--<div class="form-group col-md-6 pl-3">
            <label class="light-montserrat text-uppercase register-input-label" for="inputState">Country</label>
            <select id="inputState" class="form-control register-input-text" style="height: 50px !important;">
              <option selected>United States</option>
              <option>...</option>
            </select>
          </div>-->
          <div class="form-group col-md-6 pl-3 dropdown" style="width: 240px !important;">
            <label for="inputSport" class="text-uppercase light-montserrat" style="letter-spacing: 1.4px; font-size: 9pt;">Country</label>
            <button id="inputSport" class="form-control align-text-left register-input-text detail-search-input-dropdown light-montserrat" style="text-align: left; padding: 15px 10px 15px 20px; border-radius: 3px !important;">
              <span class="dropdown-label" style="color: rgba(0, 0, 0, .2)">United States</span>
            </button>
            <ul class="dropdown-menu">
              <li>...</li>
              <li>...</li>
            </ul>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <div class="row align-items-start mx-0 px-0">
              <div class="px-0 mr-3">
                <div class="rounded-circle align-items-center justify-content-center text-center" style="height: 22px; width: 22px !important; background-color: black;">
                  <img src="../images/Arrow.png">
                </div> 
              </div>
              <div class="light-montserrat col-auto px-0" style="letter-spacing: 0px;">
                 I agree with
                <a href="#">
                  <u class="text-dark">Terms and Conditions</u>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row m-0">
          <button type="submit" class="btn btn-dark register-cinch-submit light-montserrat text-uppercase btn-cinch">
            Create my account
          </button>
        </div>
        <div class="row m-0 justify-content-around" style="padding-top: 10px;">
          <button type="submit" class="btn btn-facebook lato d-flex justify-content-around align-items-center" style="width: 275px; height: 42px;"> 
            <img src="../images/Facebook Logo.png"> 
            <span> Sign up with Facebook </span>
          </button>
          <button type="submit" class="btn btn-google roboto d-flex justify-content-around align-items-center" style="width: 286px; margin-left: 5px; color: rgba(0, 0, 0, .5)"> 
            <img src="../images/logo_googleg_48dp.png"> Sign up with Google
          </button>
        </div>
      </form>
    </div>
  </div>
</body>

</html>