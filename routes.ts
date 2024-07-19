/**
 * An array of routes that are accessible to the Public.
 * There routes do not require authentication
 * @type {String[]}
 */

export const publicRoutes = ["/"];

/**
 * An array of routes that are accessible to the Auth.
 * There routes will redirect logged in users to /settings
 * @type {String[]}
 */

export const authRoutes = ["/auth/login", "/auth/register"];



/**
 * The prefix for API authentication routes.
 * routes that start with this prefix are used for api authentication purposes
 * @type {String}
 */


export const apiAuthPrefix = "/api/auth";


/**
 * The default redirect path after logging in.
 * @type {String}
 */


export const DEFAULT_LOGIN_REDIRECT = "/settings";
