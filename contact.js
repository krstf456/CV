//Contact me code start down here

$(document).ready(function() {
    $('.submit').click(function (event){
      event.preventDefault()
      let name = $('.name').val()
      let subject = $('.subject').val()
      let email = $('.email').val()
      let infoMsg = $('.info_msg')
      
      infoMsg.empty()
     
      if(name.length >= 2){
        console.log('Valid name')
      }
      else {
       event.preventDefault() 
       infoMsg.append('<div>Name must be at least 2 letter</div>')
      
      }
      if(email.length > 5 && email.includes('@') && email.includes('.')) {
        console.log('Valid email')
      }
      else {
        event.preventDefault()
        infoMsg.append('<div>Email must include "@" and "."</div>')
      }
      if(subject.length > 4){
        console.log('Valid subject')
      } else {
        event.preventDefault()
        infoMsg.append('<div>Subject must be at least 4 letter </div>')
      }
    })
  }) 
 