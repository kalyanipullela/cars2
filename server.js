var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cars');
var Car = mongoose.model('Car', mongoose.Schema({
	Name:String,
	Length:String,
	Weight:String,
	Color:String,
	Fueltype:String,
	Cost:String
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/cars', function(req, res){
	Car.find(function(err, carspecs){
		if(err)
			res.send(err);
		res.json(carspecs);
	});
});

app.get('/api/cars/:id', function(req, res){
	Car.findOne({_id:req.params.id},function(err, carspecs){
		if(err)
			res.send(err);
		res.json(carspecs);
	});
});

app.post('/api/cars', function(req, res){
	Car.create(req.body,function(err, carspecs){
		if(err)
			res.send(err);
		res.json(carspecs);
	});
});
app.delete('/api/cars/:id', function(req, res){
	Car.findOndAndRemove({_id:req.params.id},function(err, carspecs){
		if(err)
			res.send(err);
		res.json(carspecs);
	});
});
app.put('/api/cars/:id', function(req, res){
    var query ={
        Name:req.body.Name,
        Length:req.body.Length,
        Weight:req.body.Weight,
        Color:req.body.Color,
        Fueltype:req.body.Fueltype,
        Cost:req.body.Cost
    }
	Car.findOndAndUpdate({_id:req.params.id}, query, function(err, carspecs){
		if(err)
			res.send(err);
		res.json(carspecs);
	});
});

app.listen(3000,function(){
    console.log('server is running');
});
