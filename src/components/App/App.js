import React, { Component } from 'react';

class App extends Component {
	state = {
		donationChoice: []
	}

	componentDidMount() {
		fetch('/api/donationOptions', {
			method: 'get',
			contentType: 'application/json'
		})
			.then(response => response.json())
			.then(donationOptions => {
				this.setState({
					donationChoice: donationOptions
				});
			})
			.catch(error => {
				this.setState({
					error: 'Something went wrong. Please try again.',
					isLoading: false
				});
			});
	}

	render() {
		return (
			<div className="container">
				Hello {this.state.donationChoice[1]}
			</div>
		);
	}
}

export default App;
