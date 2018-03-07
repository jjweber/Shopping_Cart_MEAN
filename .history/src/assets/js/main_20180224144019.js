const stripe = Stripe('pk_test_leOVDvImSlAU4OqzfLUKaWZx');
const elements = stripe.elements();

$form.submit(function(event) {
  $form.find('button').prop('disabled', true);
  stripe.createToken(card).then(function(result) {
    // Handle result.error or result.token
  });
})



(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();