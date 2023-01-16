import env from "./helpers/env";

const config = {
    APP_NAME: env("NAME"),
    AUTH: {
        DRIVER: localStorage,
        TYPE: "LARAVEL_PASSPORT",
        REDIRECT_LOGIN: "/",
        REDIRECT_LOGOUT: "/login",
        API_HOST: env("API_HOST"),
        LARAVEL_PASSPORT: {
            CLIENT: env("LARAVEL_PASSPORT_CLIENT") ? env("LARAVEL_PASSPORT_CLIENT") : "",
            CLIENT_SECRET: env("LARAVEL_PASSPORT_CLIENT_SECRET")
                ? env("LARAVEL_PASSPORT_CLIENT_SECRET")
                : ""
        }
    }
};

export default config;
