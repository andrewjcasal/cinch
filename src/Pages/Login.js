<!DOCTYPE html>
<html lang="en">

<head>
  <title>Login</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
  <link href="../style/master.css" rel="stylesheet">
</head>

<body>
  <div class="container text-center">
    <h2 class="login-header-text xlight-montserrat" style="letter-spacing: 0px; font-weight:100; font-size: 34pt; margin: 78px; text-shadow: -1px 0 rgb(150,150,150), 0 .5px rgb(150,150,150), 1px 0 rgb(150,150,150), 0 -1px rgb(150,150,150);">Login</h2>
    <div class="card login-container mx-auto mb-2" style="border-radius: 10px; padding: 48px 50px; width: 470px; height: 667px;">
      <div class="card-body login-form-box py-4 px-0" style="padding: 0px 50px; width: 370px; height: 553px;">
        <img src="../images/bitmap.png" class="login-header-image" alt="Cinch Logo">
        <span style="font-size: 24pt; font-weight: 200; padding: 0px 30px;"> + </span>
        <img src="../images/Arsenal_FC.svg.png" class="login-header-image" alt="Arsenal Logo" style="width: 94px; height: 110px;">
        <form>
          <div class="row justify-content-center mb-2" style="margin-top: 60px;">
            <div class="form-group col-md-12 text-left" style="width: 370px !important;">
              <label for="login-email" class="text-uppercase light-montserrat">E-Mail</label>
              <input type="email" class="login-input-text form-control py-3 px-0 light-montserrat" id="login-email" placeholder="Your Email Address" style="width: 370px !important; border-radius: 2px;">
            </div>
          </div>
          <div class="row justify-content-center my-3">
            <div class="form-group col-md-12 text-left">
              <label for="login-password" class="text-uppercase light-montserrat" style="width: 370px !important;">Password</label>
              <input type="password" class="login-input-text form-control py-3 px-0 light-montserrat" id="login-password" placeholder="Password" style="width: 370px !important; border-radius: 2px;">
            </div>
          </div>
          <div class="col text-center align-items-center">
            <div class="row justify-content-center" style="width: 370px !important;">
              <button type="submit" class="btn btn-cinch btn-block py-3 my-1 text-uppercase light-montserrat" style="border-radius: 6px; width: 370px !important;">Login</button>
            </div>
            <div class="row justify-content-center" style="width: 370px !important;">
              <button type="submit" class="btn btn-facebook btn-block text-light py-2 my-2 lato d-flex justify-content-center align-items-center" style="width: 370px !important; font-weight: 100 !important;"> 
                <img src="../images/Facebook Logo.png" style="margin-right: 50px;"> Sign in with Facebook
              </button>
            </div>
            <div class="row justify-content-center mb-4" style="width: 370px !important;">
              <button type="submit" class="btn btn-google btn-block mt-2 mb-5 py-2 roboto d-flex justify-content-center align-items-center" style="width: 370px !important; color: rgb(120,120,120); padding-right: 30px; font-weight: 100 !important;"> 
                <img src="../images/logo_googleg_48dp.png" style="margin-right: 50px;"> Sign in with Google
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <h6 class="light-montserrat" style="letter-spacing: .2px">Don't have a Cinch Account?<a class="text-dark" href="#"><u>Create an Account</u></a>
    </h6>
  </div>
</body>

</html>