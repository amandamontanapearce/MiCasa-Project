angular
	.module('myApp')
	.factory('dataFactory', ['$http', '$q', function($http, $q) {
		return {
			getAll:
			function () {
				return $http.get('http://localhost:3000/businesses')
				.then(function(data) {
					let results = data.data
					console.log(results);
					return $q.resolve(results)
				})
			},
			getBusinessById: function(id) {
				return $http.get('http://localhost:3000/businesses/' + id)
					.then(function(data) {
						let business = data.data
						return $q.resolve(business)
					})
			},
			getEntrepreneurById: function (id) {
				return $http.get('http://localhost:3000/entrepreneurs/' + id).then(function(data) {
					let entrepreneur = data.data
					return $q.resolve(entrepreneur);
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
					'businessPhone': body.phone,
					'industry_id': parseInt(body.industry_id),
					'date_opened': body.date_opened,
					'date_closed': body.date_closed,
					'good_standing': body.good_standing,
					'description': body.description,
					'website': body.website
				}
				return $http.put('http://localhost:3000/businesses/' + body.business_id, newData)
			},
			updateEntrepreneur: function(body, id) {
				ownerData = {
					'id': id,
					'first_name': body.first_name,
					'last_name': body.last_name,
					'email': body.email,
					'ownerPhone': body.ownerPhone,
					'gender': body.gender,
					'languageSpoken': body.languageSpoken,
					'isMinority': body.isMinority
				}
				return $http.put('http://localhost:3000/entrepreneurs/' + id, ownerData)
			},
			addBusiness: function (business, owner) {
				businessData = {
					'name': business.name,
					'address1': business.address1,
					'city': business.city,
					'state': business.state,
					'zip': business.zip,
					'email': business.email,
					'businessPhone': business.businessPhone,
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
					'isMinority': owner.isMinority,
					'gender': owner.gender
				}

				if (owner.isMinority == 'true') {
					owner.isMinority = true;
				} else if (owner.isMinority == 'false') {
					owner.isMinority = false;
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

			addBusinessById: function (id, business) {
				businessData = {
					'name': business.name,
					'address1': business.address1,
					'city': business.city,
					'state': business.state,
					'zip': business.zip,
					'email': business.email,
					'businessPhone': business.businessPhone,
					'industry_id': parseInt(business.industry_id),
					'date_opened': business.date_opened,
					'date_closed': business.date_closed,
					'good_standing': business.good_standing,
					'description': business.description,
					'website': business.website
				}
				console.log(businessData);
				return $http.post('http://localhost:3000/businesses/' + id + '/addById', businessData)
			},

			deleteBusinessById: function(id) {
				return $http.get('http://localhost:3000/businesses/' + id + '/delete', id)
			},

			addOwner: function (owner) {
				ownerData = {
					'first_name': owner.first_name,
					'last_name': owner.last_name,
					'email': owner.email,
					'ownerPhone': owner.ownerPhone,
					'gender': owner.gender,
					'languageSpoken': owner.languageSpoken,
					'isMinority': owner.isMinority
				}
				classData = {
					'did_graduate': owner.did_graduate,
					'year': parseInt(owner.year),
					'semester': owner.semester,
					'class_id': parseInt(owner.class_id)
				}
				var data = [ownerData, classData]
				return $http.post('http://localhost:3000/entrepreneurs/add', data).then(function(data){
					return data
				})
			},

			deleteEntrepreneurById: function(id) {
				return $http.get('http://localhost:3000/entrepreneurs/' + id + '/delete', id)
			},

			addClasstoOwner: function(id, classInfo) {
				console.log("adding class to owner");
				return $http.post('http://localhost:3000/entrepreneurs/' + id + '/addClassToOwner', classInfo)
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
			}
		}
	}])
