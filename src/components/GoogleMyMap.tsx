// components/Countdown.tsx
import React from 'react'
import Iframe from 'react-iframe'

const GoogleMaps: React.FC = () => {
	return (
		<Iframe
			url="https://www.google.com/maps/d/embed?mid=1VJ-nNE1Lh8NjEzRZW1jNkflhKEeiEQ0&ehbc=2E312F"
			width="720px"
			height="480px"
			className=""
			display="block"
			position="relative"
		/>
	)
}

export default GoogleMaps
