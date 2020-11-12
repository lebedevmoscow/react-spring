import React from 'react'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'

const Routes = (props) => {
	return (
		<>
			<ul className='router-nav'>
				<NavLink to='/'>One</NavLink>
				<NavLink to='/two'>Two</NavLink>
				<NavLink to='/three'>Three</NavLink>
			</ul>
			<Main {...props} />
		</>
	)
}

const Main = (props) => {
	const { location } = props

	const transitions = useTransition(location, (location) => location.key, {
		from: {
			opacity: 0,
			position: 'absolute',
			width: '100%',
			transform: 'translate3d(100%, 0, 0)',
		},
		enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
		leave: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
	})

	return transitions.map(({ item, props: transition, key }) => {
		return (
			<animated.div key={key} style={transition}>
				<Switch location={item}>
					<Route exact path='/' component={One}></Route>
					<Route exact path='/two' component={Two}></Route>
					<Route exact path='/three' component={Three}></Route>
				</Switch>
			</animated.div>
		)
	})
}

const NavLink = (props) => {
	return (
		<li>
			<Link {...props} />
		</li>
	)
}

const One = () => {
	return (
		<div className='page-route'>
			<h1>One</h1>
		</div>
	)
}

const Two = () => {
	return (
		<div className='page-route two'>
			<h1>Two</h1>
		</div>
	)
}

const Three = () => {
	return (
		<div className='page-route three'>
			<h1>Three</h1>
		</div>
	)
}

export default withRouter(Routes)
