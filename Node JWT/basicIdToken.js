'use strict';


function BasicIdToken(iss, sub, aud){
    this.iss = iss;
    this.sub = sub;
    this.aud = aud;
 
    this.validateRequiredFields();
    
};

BasicIdToken.prototype.standard_claims = {};

BasicIdToken.prototype.non_standard_claims = {};

BasicIdToken.prototype.NoneAlgorithm = false;

BasicIdToken.prototype.options_to_payload = {
    'iss': 'iss',
    'sub': 'sub',
    'aud': 'aud',

};
  
BasicIdToken.prototype.options_for_objects = [
    'expiresIn',
    'notBefore',
    'noTimestamp',
    'audience',
    'issuer',
    'subject',
    'jwtid',
];

BasicIdToken.prototype.knownNonStandardClaims = {
    'nbf' : 'nbf',
    'jti' : 'jti',
};

BasicIdToken.prototype.validateRequiredFields = function(){
    if (this.iss == undefined){
        throw new Error("You are missing a required parameter : iss");
    }else if (this.sub == undefined){
        throw new Error("You are missing the required parameter : sub");
    }else if (this.aud == undefined){
        throw new Error("You are missing the required parameter : aud");        
    }
};

BasicIdToken.prototype.addNonStandardClaims = function(nonStandardClaims){
    BasicIdToken.prototype.non_standard_claims = nonStandardClaims;
};

BasicIdToken.prototype.getStandardClaims = function(){
    BasicIdToken.prototype.standard_claims = { "iss" : this.iss, "sub" : this.sub, "aud" : this.aud};
    return BasicIdToken.prototype.standard_claims;         
};

BasicIdToken.prototype.getNonStandardClaims = function(nonStandardClaims){
    return BasicIdToken.prototype.non_standard_claims;
}; 

/* User explicitly wants to set None Algorithm attribute */
BasicIdToken.prototype.setNoneAlgorithm = function(boolVal){
    BasicIdToken.prototype.NoneAlgorithm = boolVal;
};

BasicIdToken.prototype.getNoneAlgorithm = function(boolVal){
    return BasicIdToken.prototype.NoneAlgorithm;
};

module.exports = BasicIdToken;

