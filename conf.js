//  conf.js
//  Created by Paul Lai on 01/10/2016.
//  Copyright (c)

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./tests/deBijenkorf.shop.spec.js'],

  // group by test types/levels, currently unused, for scalable tests
  // suites: {  
  //     smoke: ["./tests/deBijenkorf.shop.spec.js"],
  //     regression: ["./tests/deBijenkorf.shop.spec.js"]
  // },
  
  onPrepare: function() {
      global.isAngularSite = function(flag){ //provides a more semantic method to set AngularJS site flag
          browser.ignoreSynchronization = !flag;
      };
  },
  
  multiCapabilities: [{ //runs on multiple web browsers for cross browsers compatibility
    'browserName': 'chrome'
  }, {
    'browserName': 'firefox'
  }],
}