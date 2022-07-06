import React from 'react'

const matchMediaComponent = (
	WrappedComponent,
	mediaQuery,
	propName = 'matchMedia'
) => {
	class MatchMediaComponent extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				matches: matchMedia(mediaQuery).matches,
			}
		}

		resizeHandler() {
			this.setState({
				matches: matchMedia(mediaQuery).matches,
			})
		}

		componentDidMount() {
			window.addEventListener('resize', this.resizeHandler.bind(this))
		}

		componentWillUnmount() {
			window.removeEventListener('resize', this.resizeHandler.bind(this))
		}

		render() {
			const properties = {
				...this.props,
				mediaQuery,
				[propName]: this.state.matches,
			}

			return <WrappedComponent {...properties} />
		}
	}
	return MatchMediaComponent
}

export default matchMediaComponent
