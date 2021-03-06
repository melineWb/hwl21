function AppView(id) {
  this.el = $('#' + id);
  this.el.html(new BookView().el);
  console.log('In debugger we trust. c !== с');
}

function BookCollection(){
  this.data = [];
  users.forEach(function(user){
    if (user.id){
      this.data.push( new UserModel(user) );
    } else {
      throw 'Error: user should have "id" property'
    }
  }, this);
  return this.data;
}

var users = [
  {
    "id": "aac51bbc-aeba-4fe2-b4da-85721b4adefa",
    "age": 33,
    "name": "Sexton Moses",
    "gender": "male"
  },
  {
    "id": "43df2f3c-7c13-4dab-95ac-38cbc526c7a8",
    "age": 31,
    "name": "Schmidt Waller",
    "gender": "male"
  },
  {
    "id": "d7897a36-462c-4645-9152-2fbab7a63cb7",
    "age": 24,
    "name": "Samantha Chase",
    "gender": "female"
  },
  {
    "id": "51a20263-e515-49c2-8555-19eb039501e0",
    "age": 36,
    "name": "Riggs Cervantes",
    "gender": "male"
  },
  {
    "id": "665d045c-3746-4100-b38b-52a5d4d40145",
    "age": 26,
    "name": "Moss Dunn",
    "gender": "male"
  },
  {
    "id": "9eed0e01-c9c1-4e0f-8d7b-59ae50bb2d58",
    "age": 25,
    "name": "Frances Bradshaw",
    "gender": "female"
  },
  {
    "id": "9eed0e01-c9c1-4e0f-8d7b-59ae50bb2d58",
    "age": 35,
    "name": "Taylor Ford",
    "gender": "female"
  }
]

var BookView = (function(){
  var tmpl = _.template('<div class="address-book">'+
                          '<h1><%= contacts.length %> Users</h1>'+
                          '<ul><% _.each(contacts, function(contact) { %>'+
                            '<li><%= contact.model.name %></li><% }); %>'+
                          '</ul>');

  return function(){
    this.tmpl = tmpl;
    this.collection = BookCollection();
    this.el = $( this.render( this.collection ) );
  }
})();

BookView.prototype.render = function(contacts){
  return this.tmpl({contacts: contacts});
}

function UserModel (data) {
  this.model = data;
}
