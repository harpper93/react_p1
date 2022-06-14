import React,{Component} from 'react';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';



/** 
class Subject extends Component{
  render(){
    return(
      <header>
            <h1>{this.props.title}</h1>
            {this.props.sub}           
        </header>
    );
  }
}
**/
/**
 * 
 * TOC js로 옮김
class TOC extends Component{
  render(){
    return(
      <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
            </ul>
        </nav>
    );
  }
}
**/
/**
class Content extends Component{
  render(){
    return(
      <article>
            <h2>{this.props.title}</h2>
            {this.props.desc}
        </article>
    );
  }
}
**/

function App() {
  return (
    <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <TOC></TOC>
        <Content  title='HTML' desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
}

export default App;
