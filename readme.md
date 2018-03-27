## Delay component load <br />
Just delays component rendering time with counter
<br />
![Alt text](images/image2.png?raw=true "Image 2")
![Alt text](images/image1.png?raw=true "Image 1")
![Alt text](images/image3.png?raw=true "Image 3")

### Uses <br/>
```
	const SET_TIME_INTERVAL = 10;
	.
	.
	.
	<Lazy
		timeInterval={this.state.timeInterval}
		label={`You can resend in %timer% seconds`}
	>
		<span
			className='textbutton textbutton--small'
			onClick={(e) => {
				// this.handleInvite(e, false, false)
				this.setState({
					timeInterval: SET_TIME_INTERVAL
				})
			}}
		>
			Resend
		</span>
	</Lazy>
```


