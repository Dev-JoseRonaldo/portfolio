const btn = document.querySelector('#btn')
const inputs = document.querySelector('form')
btn.addEventListener('click', function (e) {
  e.preventDefault()
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var subject = document.getElementById('subject').value
  var message = document.getElementById('message').value

  console.log('h1')
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'dev.joseronaldo@gmail.com',
    Password: '90C0578FDC10A0D7EE275F99480FB80B8261',
    To: 'dev.joseronaldo@gmail.com',
    From: 'dev.joseronaldo@gmail.com',
    Subject: subject,
    Body: `Name: ${name} <br/> 
    Email: ${email} <br/> <br/> 
    Subject: ${subject} <br/> 
    Message: ${message}`
  }).then(message => alert('Email enviado com sucesso'))
})
