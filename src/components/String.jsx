import React, { Component } from 'react'
import deviceType from '../hoc/deviceType'

class String extends Component {
	render() {
		const { isPhone, isTablet, isDesktop, isPrinting } = this.props
		let content

		if (isPhone) {
			content = 'This is phone'
		} else if (isTablet) {
			content = 'This is tablet'
		} else if (isDesktop) {
			content = 'This is desktop'
		} else if (isPrinting) {
			content = 'This is printing'
		}

		return <p style={{fontSize: '50px'}}>{content}</p>
	}
}

export default deviceType(String)
