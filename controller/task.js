const redis = require('redis')
const client = redis.createClient()


exports.get = function(req,res){
    client.get('framework', function(err, reply) {
        res.send({status:true,reply})
    })
}


exports.save = function(req,res){
    client.set('framework', 'AngularJS', function(err, reply) {
        if(err) res.send({status:false,err})
        else res.send({status:true,reply})
      })
}


exports.hmset= function(req,res){
    client.hmset('frameworks', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express', function(err, reply) {
        res.send({status:true,reply})
    })
}


exports.hgetall = function(req,res){
    client.hgetall('frameworks', function(err, reply) {
        if(err) res.send({status:false,err})
        else res.send({status:true,reply})
      })
}



