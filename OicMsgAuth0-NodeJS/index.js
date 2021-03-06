  /* Main */

  var clockTimestamp = 1000000000; 
  var BasicIdToken = require('./node_modules/src/models/tokenProfiles/basicIdToken');  
  var GoogleIdToken = require('./node_modules/src/models/tokenProfiles/googleIdToken');
  
  var basicIdToken2 = new BasicIdToken('issuer','subject', clockTimestamp, "jti");
  basicIdToken2.addNonStandardClaims({"aud" : "audience", "nbf" : clockTimestamp + 2, "exp" : clockTimestamp + 3});
  basicIdToken2.setNoneAlgorithm(true);
  var signedJWT = basicIdToken2.toJWT('shhhh');

  var decodedPayload = basicIdToken2.fromJWT(signedJWT, 'shhhh', {"iss" : "issuer", "sub": "subject", "aud" : "audience", 'maxAge': '1d', 'clockTolerance' : 10, "jti": "jti"}, {'clockTimestamp' : clockTimestamp});

  var googleIdToken = new GoogleIdToken('name', 'email@google.com', '/pathToPic', 'issuer','subject', clockTimestamp);
  googleIdToken.addNonStandardClaims({"aud" : "audience", "exp" : clockTimestamp + 3});
  googleIdToken.setNoneAlgorithm(true);        
 
  var standardClaims = googleIdToken.getStandardClaims();  

  var nonStandardClaims = googleIdToken.getNonStandardClaims();  


 var basicIdToken2 = new BasicIdToken('issuer','subject', clockTimestamp, "jti");
 basicIdToken2.addNonStandardClaims({"aud" : "audience", "nbf" : clockTimestamp + 2, "exp" : clockTimestamp + 3});
 basicIdToken2.setNoneAlgorithm(true);        
 var nonStandardClaims = basicIdToken2.getNonStandardClaims();  

 var googleIdToken = new GoogleIdToken('name', 'email@google.com', '/pathToPic', 'issuer','subject', clockTimestamp);
 googleIdToken.setNoneAlgorithm(true);
 var signedJWT = googleIdToken.toJWT('shhhh');

 var decodedPayload = googleIdToken.fromJWT(signedJWT, 'shhhh', {"name":"name", "email": "email@google.com", "picture":"/pathToPic", "iss" : "issuer", "sub": "subject", 'maxAge': '1d'}, {'clockTimestamp' : clockTimestamp});
 console.log(decodedPayload);
 
 