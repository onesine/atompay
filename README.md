<h1 align="center">AtomPay</h1>

<p align="center">
    <a href="https://test-paydunya-atompay.vercel.app/" target="_blank">
      <img alt="AtomPay Applicationo" width="100" style="border-radius: 100%;" src="https://raw.githubusercontent.com/onesine/atompay/master/assets/img/logo.svg?raw=true">
    </a><br><br>
    AtomPay is a money transfer platform made with React and Tailwindcss.
</p>

## Pages
* <a href="https://test-paydunya-atompay.vercel.app/" target="_blank">Landing</a>
* <a href="https://test-paydunya-atompay.vercel.app/login" target="_blank">Login</a>
* <a href="https://test-paydunya-atompay.vercel.app/register" target="_blank">Register</a>
* <a href="https://test-paydunya-atompay.vercel.app/forgot-password" target="_blank">Forgot password</a>
* <a href="https://test-paydunya-atompay.vercel.app/reset-password" target="_blank">Reset password</a>
* <a href="https://test-paydunya-atompay.vercel.app/dashboard" target="_blank">Dashboard</a>
* <a href="https://test-paydunya-atompay.vercel.app/reload-account" target="_blank">Reload account</a>

## Installation

1. Clone this repo

```sh
    git clone https://github.com/onesine/atompay.git
```

2. Go into the project root directory

```sh
    cd atompay
```
3. Set up the user account
   By default, we have a user account with the login `paydunya@gmail.com` and the password `12345`. To modify this account, create an .env file from the .env.example file.

```dotenv
   REACT_APP_NAME="AtomPay"
   REACT_APP_VERSION="1"
   REACT_APP_LOGIN="paydunya@gmail.com"
   REACT_APP_PASSWORD="12345"

   REACT_APP_API_HOST="http://admin-api.com"

   REACT_APP_LARAVEL_PASSPORT_CLIENT=""
   REACT_APP_LARAVEL_PASSPORT_CLIENT_SECRET=""
```

4. Install JS dependencies

```sh
    yarn
```

5. Start the dev server

```sh
    yarn start
```

## Online Demo

You can find the online demo at [here](https://test-paydunya-atompay.vercel.app/). (login: `paydunya@gmail.com`, password: `12345`)

## Overview of some pages
**Landing page**
![Landing page](https://raw.githubusercontent.com/onesine/atompay/master/assets/img/home.png?raw=true)

**Register page**
![Register page](https://raw.githubusercontent.com/onesine/atompay/master/assets/img/register.png?raw=true)

**Dashboard page**
![Dashboard page](https://raw.githubusercontent.com/onesine/atompay/master/assets/img/dashboard.png?raw=true)

**Reload account page**
![Reload account page
](https://raw.githubusercontent.com/onesine/atompay/master/assets/img/reload-account.png?raw=true)