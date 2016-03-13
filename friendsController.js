var all = [
  {
    name: "Someone",
    pic: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  },
  {
    name: "Another One",
    pic: "https://s3.amazonaws.com/uifaces/faces/twitter/sillyleo/128.jpg"
  }
];

var Friends = React.createClass({

  getInitialState: function(){
    return {
      list: []
    }
  },

  updateState: function(){
    var temp = [];
    $.getJSON('', function(data){
      temp = data;
    })

    this.setState({
      list: temp
    })
  },

  componentDidMount: function(){
    var temp = [];
    $.getJSON('', function(data){
      temp = data;
    })

    this.setState({
      list: temp
    })

    this.setState({
      list: all
    })
  },

  render: function(){
    return (
      <div>
        {
          this.state.list.map(function(item){
            return <Chip name={item.name} pic={item.pic}/>
          })
        }
      </div>
    )
  }
});

var Chip = React.createClass({
  render: function(){
    return (
      <div className="chip">
        <img src={this.props.pic}/>
        <span>{this.props.name}</span>
      </div>
    )
  }
});

ReactDOM.render(
  <Friends />,
  document.getElementById('friends')
)
