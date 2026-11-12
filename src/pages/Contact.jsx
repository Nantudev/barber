import React from 'react'

function Contact() {
  return (
    <div>
      <div id="body">
              <h1><span>let's keep in touch</span></h1>
              <form action="contact.html" method="post" id="contact" autocomplete="off">
                <input type="text" name="fname" id="fname" value="name" />
                <input type="text" name="address" id="address" value="address" />
                <input type="text" name="email" id="email" value="email" />
                <input type="text" name="phone" id="phone" value="phone number" />
                <textarea name="message" id="message" placeholder="message" />
                <input type="submit" name="send" id="send" value="send" />
              </form>
	    </div>
    </div>
  )
}

export default Contact