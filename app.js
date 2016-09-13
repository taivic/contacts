$(document).ready(function() {

  var contacts = [];

  var Contact = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName
  }

  $("#contact").submit(function(e) {
    e.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();

    $("#contactList").append("<a><li class='contactName text-info'>" + 
      firstName + " " + lastName + "</li></a>");
    resetForm();
  });

  function resetForm() {
    $("#firstName").val("");
    $("#lastName").val("");
  }

})