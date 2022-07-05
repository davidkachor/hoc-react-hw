import React from 'react'

const deviceType = WrappedComponent => {
	class DeviceTypeComponent extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				isPhone:
					matchMedia('screen and (max-width:641px) and (min-width:320px)')
						.matches && !matchMedia('print').matches,
				isTablet:
					matchMedia('screen and (max-width:1025px) and (min-width:641px)')
						.matches && !matchMedia('print').matches,
				isDesktop:
					matchMedia('screen and (min-width:1025px)').matches &&
					!matchMedia('print').matches,
				isPrinting: matchMedia('print').matches,
			}
		}

		resizeHandler() {
			this.setState({
				isPhone:
					matchMedia('screen and (max-width:641px) and (min-width:320px)')
						.matches && !matchMedia('print').matches,
				isTablet:
					matchMedia('screen and (max-width:1025px) and (min-width:641px)')
						.matches && !matchMedia('print').matches,
				isDesktop:
					matchMedia('screen and (min-width:1025px)').matches &&
					!matchMedia('print').matches,
			})
		}

		beforePrintHandler() {
			console.log('before')
			this.setState({
				isPhone: false,
				isTablet: false,
				isDesktop: false,
				isPrinting: true,
			})
		}

		afterPrintHandler() {
			console.log('after')
			this.setState({
				isPhone:
					matchMedia('screen and (max-width:641px) and (min-width:320px)')
						.matches && !matchMedia('print').matches,
				isTablet:
					matchMedia('screen and (max-width:1025px) and (min-width:641px)')
						.matches && !matchMedia('print').matches,
				isDesktop:
					matchMedia('screen and (min-width:1025px)').matches &&
					!matchMedia('print').matches,
				isPrinting: false,
			})
		}

		componentDidMount() {
			window.addEventListener('resize', this.resizeHandler.bind(this))
			window.addEventListener('beforeprint', this.beforePrintHandler.bind(this))
			window.addEventListener('afterprint', this.afterPrintHandler.bind(this))
		}

		componentWillUnmount() {
			window.removeEventListener('resize', this.resizeHandler.bind(this))
			window.removeEventListener('beforeprint', this.resizeHandler.bind(this))
			window.removeEventListener(
				'afterprint',
				this.afterPrintHandler.bind(this)
			)
		}

		render() {
			const { isPhone, isTablet, isDesktop, isPrinting } = this.state

			return (
				<WrappedComponent
					isPhone={isPhone}
					isTablet={isTablet}
					isDesktop={isDesktop}
					isPrinting={isPrinting}
				>
					{this.props.children}
				</WrappedComponent>
			)
		}
	}
	return DeviceTypeComponent
}

export default deviceType
