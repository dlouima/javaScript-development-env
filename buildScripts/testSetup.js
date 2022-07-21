// this file isn't transpilled so must use commonJs and ES5

//Register babel to transpiled before our test run
require("@babel/register")();

//Desable wepack feature that Mocha doesn't understand
require.extensions[".css"] = function () {};
