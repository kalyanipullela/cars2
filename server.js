var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect("mongodb://kalyani:kalyani@ds062178.mlab.com:62178/crudoperations");
var Car = mongoose.model('Car', mongoose.Schema({
	Name : String,
	Length : Number,
	Weight : Number,
	Color : String,
	Fueltype : String,
	Cost : String,
	Details  : String
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/cars', function(req, res){
	Car.find(function(err, cars){
		if(err)
			res.send(err);
		res.json(cars);
	});
});

app.get('/api/cars/:id', function(req, res){
	Car.findOne({_id:req.params.id}, function(err, car){
		if(err)
			res.send(err);
		res.json(car);
	});
});
app.post('/api/cars', function(req, res){
	Car.create( req.body, function(err, cars){
		if(err)
			res.send(err);
		res.json(cars);
	});
});

app.delete('/api/cars/:id', function(req, res){
	Car.findOneAndRemove({_id:req.params.id}, function(err, car){
		if(err)
			res.send(err);
		res.json(car);
	});
});
app.put('/api/cars/:id', function(req, res){
	var query = {
		Name:req.body.Name,
		Length:req.body.Length,
		Weight:req.body.Weight,
		Color:req.body.Color,
		Fueltype:req.body.Fueltype,
		Cost:req.body.Cost,
		Details:req.body.Details
	};
	Car.findOneAndUpdate({_id:req.params.id}, query, function(err, car){
		if(err)
			res.send(err);
		res.json(car);
	});
});
app.listen(process.env.PORT||3000);

