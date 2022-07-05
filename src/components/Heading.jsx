import React, { Component } from 'react'
import matchMediaComponent from '../hoc/matchMediaComponent'

class Heading extends Component {
	render() {
		return (
			<h1>{this.props.matchMedia ? 'match media matches!' : 'hello world'}</h1>
		)
	}
}

export default matchMediaComponent(Heading, '(max-width: 600px)')
