const btn = document.querySelector('#btn')
const inputs = document.querySelector('form')
btn.addEventListener('click', function (e) {
  e.preventDefault()
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var subject = document.getElementById('subject').value
  var message = document.getElementById('message').value
  var body =
    'name:' +
    name +
    '</br> email:' +
    email +
    '</br> subject:' +
    subject +
    '</br> message:' +
    message

  console.log('h1')
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'dev.joseronaldo@gmail.com',
    Password: '90C0578FDC10A0D7EE275F99480FB80B8261',
    To: 'dev.joseronaldo@gmail.com',
    From: email,
    Subject: subject,
    Body: body
  }).then(message => alert(message))
})
