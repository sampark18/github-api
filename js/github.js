function Constructor(param) {
  this.param = param;
  // Constructor
}

Constructor.prototype.templateName = function(methodParameter) {
  // method code
};

exports.constructorModule = Constructor;


var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
