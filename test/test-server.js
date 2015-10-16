var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();
chai.use(chaiHttp);


describe('Routes', function (){

  it('should get a 200 on hitting the main route', function (done){
    chai.request(server)
    .get('/')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
  });


});
