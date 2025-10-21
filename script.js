document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Merci pour votre messag  Je vous répondrai bientôt !");
  this.reset();
});