module.exports = function (wallaby) {
  return {
    files: [
      'app/**/*.js'
    ],

    tests: [
      'app/**/*Spec.js'
    ],
     testFramework: 'mocha'
  };
};