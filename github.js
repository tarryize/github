var https=require("https");

function getRepos(username,callback)
{
var options={
host:'api.github.com',
path:'/users/'+username+'/repos',
method:'GET',
headers:{'user-agent':'node.js'}

};

var req=https.request(options,function(response){
var body='';
 var repos=[];
 var json;
 response.on("data",function(chunk){
  body+=chunk;
 });
 response.on('end',function(){
 json=JSON.parse(body);
 json.forEach(function(repo)
 {
 repos.push({
  name:json.name,
  description:json.description
 });
 });
 callback(repos);
 });
 

});

req.end();

}



module.exports.getRepos=getRepos;
