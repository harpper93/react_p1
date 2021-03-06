import React,{Component} from 'react';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode : 'read'
      ,subject : {title:'WEB', sub:'world wide web!'}
      ,welcome : {title:'welcome', desc:'hello react!@!@!'}
      ,contents: [
        {id:1 , title:'HTML' , desc:'Html is for information'},
        {id:2 , title:'CSS' , desc:'CSS is for design'},
        {id:3 , title:'JavaScript' , desc:'JavaScript is for interactive'}
      ] 
    }
  }
  
  render(){
     console.log('11111 App render', this);
    var _title, _desc = null;
    // console.log('wowowowthis.state === ',this.state );
    if(this.state.mode === 'welcome'){
      // console.log('wowowowowoow test === welcome');
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
         <Subject title={this.state.subject.title} 
         sub={this.state.subject.sub}
         onChangePage={function(){
           //alert('hihihihihihi');
           this.setState({mode:'welcome'});
         }.bind(this)}
         ></Subject>
         {/* <header>
            <h1><a href="/" onClick={function(e){
              e.preventDefault();
              this.setState({mode : 'welcome'}); //state변경
              //this.props.onChangePage;
              }.bind(this)}>{this.state.subject.title}</a></h1>
            {this.state.subject.sub}           
        </header> */}
          <TOC data={this.state.contents}></TOC>
          <Content  title={_title} desc={_desc} ></Content>
      </div>
    );
  }
}

/**
function App() {
  return (
    <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <TOC></TOC>
        <Content  title='HTML' desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
}
**/
export default App;
