//ReactDOM.render(
//	<div>
//	  	<div className="btn btn-default">Add</div>
//		    <ul className="list-group">
//			  	<li className="list-group-item">Cras justo odio 
//			  		<a className="right glyphicon glyphicon-edit" href="#"></a>
//			  		<a className="right glyphicon glyphicon-remove-circle" href="#"></a>
//			  	</li>
//			  	<li className="list-group-item">
//			  		<div className="input-group">
//					  	<span className="input-group-addon" id="basic-addon1">@</span>
//					  	<input type="text" className="form-control" /> 
//					  	<a href="#" className="glyphicon glyphicon-share"></a>
//					</div>
//				</li>
//		    </ul>
//  </div>,
//  document.getElementById('test')
//);
let Item = React.createClass({
	render() {
		return <li className="list-group-item">
				{this.props.value}
		  		<a className="right glyphicon glyphicon-edit" href="#"></a>
		  		<a className="right glyphicon glyphicon-remove-circle" href="#"></a>
			   </li>
	}
});
let ItemEditor = React.createClass({
	getInitialState(){
		return {
			value: ''
		}
	},
	changeHandle(event) {
		this.setState({
			value: event.target.value
		})
	},
	remove() {
		this.props.onRemove(this.props.id);
	},
	save() {
		this.props.onSave(this.props.id, this.state.value);
	},
	render() {
		return <li className="list-group-item">
			  		<div className="input-group">
					  	<input type="text" onChange={this.changeHandle} value={this.state.value} className="item-edit" /> 
					  	<a href="#" className="glyphicon glyphicon-share" onClick={this.save}></a>
					  	<a href="#" className="glyphicon glyphicon-remove" onClick={this.remove}></a>
					</div>
				</li>
	}
});
let List = React.createClass({
	onRemve() {
		
	},
	getInitialState() {
		return {
			key: 0,
			list: new Map(),
			editList: new Map()
		}
	},
	add() {
		const key = ++ this.state.key;
		this.state.editList.set(key, '');
		this.forceUpdate();
	},
	removeItem(id) {
		this.state.list.delete(id);
		this.forceUpdate();
	},
	removeItemEditor(id) {
		this.state.editList.delete(id);
		this.forceUpdate();
	},
	save(id, value) {
		console.log(id, value);
		this.state.editList.delete(id);
		this.state.list.set(id, value);
		this.forceUpdate();
	},
	render() {
		const listDOM = [];
		const editListDOM = [];
		for (let item of this.state.list) {
			listDOM.push(<Item onRemove={this.removeItem} id={item[0]} key={item[0]} value={item[1]} />);
		};
		for (let item of this.state.editList) {
			listDOM.push(<ItemEditor onRemove={this.removeItemEditor} onSave={this.save} key={item[0]} id={item[0]} value={item[1]} />);
		};
		return <div>
		<button onClick={this.add} className="btn btn-default">Add</button>
		<ul className="list-group">
			{listDOM}
			{editListDOM}
		</ul>
		</div>
	}
});

ReactDOM.render(
	<List />,
	document.getElementById('test')
)
