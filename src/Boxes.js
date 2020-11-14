import React from 'react'
import { useTrail, animated } from 'react-spring'

const items = [0, 1, 2, 3, 4]

const Boxes = () => {
	const trail = useTrail(items.length, {
		from: {
			opacity: 0,
		},
		to: {
			opacity: 1,
		},
	})

	return (
		<div className='boxes-grid'>
			{trail.map((animation) => (
				<animated.div style={animation} className='box'></animated.div>
			))}
		</div>
	)
}

export default Boxes
