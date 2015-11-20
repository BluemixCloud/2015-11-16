var expect  = require("chai").expect;
var request = require('supertest');
var server = require('../app');

describe('Home', function(){
  it('Gets the home page', function(done){
    request(server).get('/').end(function(err, res){
      expect(res.text).to.contain('IBM');
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});

describe('Other', function(){
  it('Gets the other page', function(done){
    request(server).get('/other').end(function(err, res){
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
