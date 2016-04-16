require('../css/main.css');
require('../css/style.scss');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
var  React=require("../node_modules/react/lib/React.js");
var  ReactDOM=require("../node_modules/react/lib/ReactDOM.js");
var $=require("../node_modules/jquery/dist/jquery.min.js");
var TestComponent=React.createClass({
	getInitialState:function(){
		return {
			res:''
		};
	},
	HandleLCick:function(e){
		console.log(e);
		console.log(e.nativeEvent);
	},
	componentDidMount:function(){ 
		alert(22);
		$.ajax({
			url:'js/test/mp4.json',
			type:'get',
			dataType:'json',
			success:function(res){
				console.log(res);
				this.setState({
					res:res
				});
			}.bind(this)
		});
		 
	}, 
	render:function(){  
		console.log(this.state.res);
		if (this.state.res) {
			var video=this.state.res.map(function(item,key){
				return <div><video preload="none" src={item} key={key}  controls="controls">
					您的浏览器不支持 video 标签。
				</video></div>
			})
		};
		
		return (
			<div>
				<h2>Hello ReactJs</h2>
				<div onClick={this.HandleLCick} className="container">
					<i className="glyphicon glyphicon-star"></i><i className="glyphicon glyphicon-star"></i>this is My ReacJs first Page
				</div> {video}
			</div>
		);
	}
});
ReactDOM.render(<TestComponent/>,document.getElementById('app'));