
let SubmitBtn = document.querySelector('#submit-subscribe')
let email = document.querySelector('#input-email')
let email_error = document.querySelector('#email_error')
let thanks_section = document.querySelector('.thanks')
let content_section = document.querySelector('.content')
let dismiss_btn = document.querySelector('#dismiss-message')

let email_sended = document.querySelector('.email-sended')

email.addEventListener('keyup',()=> {
     if(emailValidator(email.value) !== true) {
          email_error.textContent = 'valid email required'
          email_error.classList.add('error')
          email.classList.add('invalid-email')
     } else {
          email_error.textContent = ''
          email.classList.remove('invalid-email')
     }
     if (email.value.length === 0) {
          email_error.textContent = ''
          email.classList.remove('invalid-email')
     }
})

SubmitBtn.addEventListener('click',() => {
     if(email.value.length === 0 || emailValidator(email.value) !== true) {
     email_error.textContent = 'valid email required'
     email_error.classList.add('error')
     email.classList.add('invalid-email')

   } else {
        email_error.textContent = ''
        email_sended.innerHTML = `${email.value}`
        content_section.classList.add('hide')
        thanks_section.classList.add('show')
   }
})
dismiss_btn.addEventListener('click',() => {
        email.value = ''
        email.classList.remove('invalid-email')
        thanks_section.classList.remove('show')
        content_section.classList.remove('hide')
       
})

function emailValidator(email) {
     let validation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
     return validation.test(email)
}
