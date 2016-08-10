angular.module('directoryApp', [] )
	.controller('directoryController', function() {

		var dirList = this;
		dirList.list = [{name:'Scott' , age:20},
				{name:'Ross' , age:21},
				{name:'Ben' , age:22},
				{name:'Courtney' , age:23}
			];
		dirList.addPerson = function(){
			dirList.list.push({
				name : dirList.name,
				age : dirList.age
			});

		dirList.name='';
		dirList.age= 0;
		}
	});