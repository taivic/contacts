$(document).ready(function() {

  var contacts = [];

  var Contact = function(firstName, lastName) {
    this.fullName = firstName + " " + lastName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.phoneNumber = phoneNumber;
    this.city = city;
    this.state = state;
  }

  $("#contactForm").submit(function(e) {
    e.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var phoneNumber = $("#phoneNumber").val();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();

    $("#contactList").append("<a><li class='contactName text-info'>" + 
      firstName + " " + lastName + "</li></a>");

    var newContact = new Contact(firstName, lastName);
    contacts.push(newContact);

    resetForm();
    console.log(contacts);
  });

  $(document).on("click", ".contactName", function() {
    var selectedContact = findContact($(this).text);
    console.log(selectedContact);
    $("#contactDetail").empty();
    $("#contactDetail").append("<li>" + selectedContact + "</li>");
  })

  function resetForm() {
    $("#firstName").val("");
    $("#lastName").val("");
    $("#phoneNumber").val("");
    $("#street").val("");
    $("#city").val("");
    $("#state").val("");
  }

  function findContact(name) {
    for (var i=0; i<contacts.length; i++) {
      if (contacts[i].fullName === name) {
        return contacts[i];
      }
    }
  }


})