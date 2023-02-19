import React from 'react'

function NotFound() {
  return (
	<div className='mt-48 flex flex-col justify-center text-center align-middle'>	
		<h1>404</h1>
		<h3>Look like you're lost</h3>
		<p>the page you are looking for not avaible!</p>
		<a href="./" className="py-6">Go to Home</a>
	</div>
  )
}
export default NotFound