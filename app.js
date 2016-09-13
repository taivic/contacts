$(document).ready(function() {

  var contacts = [];

  var Contact = function(firstName, lastName) {
    this.fullName = firstName + " " + lastName;
    this.firstName = firstName;
    this.lastName = lastName
  }

  $("#contact").submit(function(e) {
    e.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();

    $("#contactList").append("<a><li class='contactName text-info'>" + 
      firstName + " " + lastName + "</li></a>");

    var newContact = new Contact(firstName, lastName);
    contacts.push(newContact);

    resetForm();
    console.log(contacts);
  });

  $(document).on("click", ".contactName", function() {
    var selectedContact = findContact($(this).text());
    console.log(selectedContact);
  })

  function resetForm() {
    $("#firstName").val("");
    $("#lastName").val("");
  }

  function findContact(name) {
    for (var i=0; i<contacts.length; i++) {
      if (contacts[i].fullName === name) {
        return contacts[i];
      }
    }
  }

})