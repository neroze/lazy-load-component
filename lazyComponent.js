import React from 'react'

class LazyComponent extends React.Component {
	constructor (props) {
		super(props)
		this.mounted = false
		this.state = {
			intervalId: null,
			currentCount: 0
		}
	}

	startTimer = (timeInterval) => {
		this.setState({
			currentCount: timeInterval
		})
		const intervalId = setInterval(() => {
			if (this.mounted) {
				const newCount = this.state.currentCount - 1
				if (newCount >= 0) {
					this.setState({
						currentCount: newCount
					})
				} else {
					clearInterval(this.state.intervalId)
				}
			}
		}, 1000)

		this.setState({
			intervalId: intervalId
		})
	}

	componentDidMount = function () {
		this.mounted = true
		this.startTimer(this.props.timeInterval)
	}

	componentWillReceiveProps (nextProps) {
		this.startTimer(nextProps.timeInterval)
	}

	componentWillUnmount = function () {
		this.mounted = false
		clearInterval(this.state.intervalId)
	}

	getLabelWithCount = (counter) => {
		let _defaultLabel = ' %timer% seconds'
		if (this.props.label) {
			_defaultLabel = this.props.label
		}
		return _defaultLabel.replace('%timer%', counter)
	}

	render () {
		return (
			<div
				className='u-box__inline u-text__disabled u-box__pl12'
			>
				{!this.state.currentCount ? this.props.children : this.getLabelWithCount(this.state.currentCount)}
			</div>
		)
	}
}

export default LazyComponent
