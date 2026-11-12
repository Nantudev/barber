import React from 'react'

function Header() {
  return (
    <div>
        <div id="header">
		<a href="index.html" class="logo"/>
			<img src="assets/images/logo.jpg" alt=""/>
		
            <ul id="navigation">
                <li class="selected">
                    <a href="/">home</a>
                </li>
                <li>
                    <a href="/about">about</a>
                </li>
                <li>
                    <a href="/gallery">gallery</a>
                </li>
                <li>
                    <a href="/blog">blog</a>
                </li>
                <li>
                    <a href="/contact">contact</a>
                </li>
            </ul>
	  </div>


    </div>
  )
}

export default Header