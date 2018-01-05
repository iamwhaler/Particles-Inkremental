var Player = React.createClass ({
loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'js',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    
  }, 
	getInitialState: function () {
		return {data: [] };
	},

	render: function () {
		return (
			<div className= "Player" > 
			<Player data={this.state.data}>
		</div>
	);
};
	ReactDOM.render(
	Player url="/api/Player" pollInterval={1000})
	document.getElementById ('')

