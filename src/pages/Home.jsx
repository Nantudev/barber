import React from 'react'

function Home() {
  return (
    <div>
        
    <div id="body">
		<div id="featured">
			<img src="assets/images/the-beacon.jpg" alt=""/>
			<div>
				<h2>the beacon to all mankind</h2>
				<span/>Our website templates are created with
				<span/>inspiration, checked for quality and originality
				<span/>and meticulously sliced and coded.
				<a href="blog-single-post.html" class="more"/>read more
			</div>
		</div>
		<ul>
			<li>
				<a href="gallery.html">
					<img src="assets/images/the-father.jpg" alt=""/>
					<span/>the father
				</a>
			</li>
			<li>
				<a href="gallery.html">
					<img src="assets/images/the-actor.jpg" alt=""/>
					<span/>the actor
				</a>
			</li>
			<li>
				<a href="gallery.html">
					<img src="assets/images/the-nerd.jpg" alt=""/>
					<span/>the nerd
				</a>
			</li>
		</ul>
	</div>
	
    </div>
  )
}

export default Home