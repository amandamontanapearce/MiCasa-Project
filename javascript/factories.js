angular
	.module('myApp')
	.factory('dataFactory', ['$http', '$q', function($http, $q) {
		return {
			getAll: function () {
				return $http.get('http://localhost:3000/businesses')
				.then(function(data) {
					let results = data.data
					return $q.resolve(results)
				})
			},
			getById: function(id) {
				return $http.get('http://localhost:3000/businesses/' + id)
					.then(function(data) {
						let business = data.data
						return $q.resolve(business)
					})
			},
			updateBusiness: function(body) {
				newData = {
					'id': body.business_id,
					'name': body.name,
					'address1': body.address1,
					'city': body.city,
					'state': body.state,
					'zip': body.zip,
					'email': body.email,
					'phone': body.phone,
					'industry_id': parseInt(body.industry_id),
					'date_opened': body.date_opened,
					'date_closed': body.date_closed,
					'good_standing': body.good_standing,
					'description': body.description,
					'website': body.website
				}
				return $http.put('http://localhost:3000/businesses/' + body.business_id, newData)
			},
			addBusiness: function (business, owner) {
				businessData = {
					'name': business.name,
					'address1': business.address1,
					'city': business.city,
					'state': business.state,
					'zip': business.zip,
					'email': business.email,
					'phone': business.phone,
					'industry_id': business.industry_id,
					'date_opened': business.date_opened,
					'date_closed': business.date_closed,
					'good_standing': business.good_standing,
					'description': business.description,
					'website': business.website
				}

				ownerData = {
					'first_name': owner.first_name,
					'last_name': owner.last_name,
					'email': owner.email,
					'phone': owner.phone
				}

				if (owner.did_graduate == "Yes") {
					owner.did_graduate = true;
				} else if (owner.did_graduate == "No") {
					owner.did_graduate = false;
				}

				classData = {
					'did_graduate': owner.did_graduate,
					'year': parseInt(owner.year),
					'semester': owner.semester,
					'class_id': parseInt(owner.class_id)
				}

				var data = [businessData,ownerData,classData]

				return $http.post('http://localhost:3000/businesses/add', data).then(function(data) {
					return data.data.business_id
				})
			},

			getAllIndustries: $http.get('http://localhost:3000/businesses/industries')
				.then(function(data) {
					let results = data.data
					return $q.resolve(results)
				}),
			getAllClasses: $http.get('http://localhost:3000/businesses/classes')
					.then(function(data) {
						let results = data.data
						return $q.resolve(results)
				}),
			getAllCities: $http.get('http://localhost:3000/businesses/cities')
				.then(function(data) {
					let results = data.data
					return $q.resolve(results)
				}),
			postNote: function (id, note) {
				newNote = {
					account_id: 1,
					business_id: id,
					date: new Date(),
					notes: note
				}
				return $http.post('http://localhost:3000/businesses/' + id + '/addNote', newNote)
			},
		 	getLogin: function (username, password) {
			console.log('hitting factory');
			 params = {
				 'username': username,
				 'password': password
			 }
			console.log(params);
			 return $http.post('http://localhost:3000/login', params);
		 }
		}
	}])
