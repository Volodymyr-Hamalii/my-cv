(function () {
  // Ph
  var part1 = "+380";
  var part2 = "66";
  var part3 = "196";
  var part4 = 2510 + 1;
  var phoneDisplay = part1 + " " + part2 + " " + part3 + " " + part4;
  var telLink = "tel:" + (part1 + part2 + part3 + part4);
  var contactLink = document.getElementById("contact-phone");
  contactLink.href = telLink;
  contactLink.textContent = phoneDisplay;

  // Em
  var part5 = "hamalii.";
  var part6 = "volodymyr@gmail.com";
  var mailDisplay = part5 + part6;
  var mail = "mailto:" + mailDisplay;
  var mailLink = document.getElementById("contact-mail");
  mailLink.href = mail;
  mailLink.textContent = mailDisplay;
})();
