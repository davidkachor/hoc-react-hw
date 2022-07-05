import React, { Component } from 'react'
import matchMediaComponent from '../hoc/matchMediaComponent'

class Heading extends Component {
	render() {
		const { matchMedia, mediaQuery } = this.props

		return (
			<h1 style={{ color: matchMedia ? 'green' : 'red' }}>
				{matchMedia
					? `Match query "${mediaQuery}" matches!`
					: 'Match query doesn`t match'}
			</h1>
		)
	}
}

export default matchMediaComponent(Heading, 'screen and (min-width:641px)')
