import React,{Component} from 'react';

class TOC extends Component{
    render(){
        console.log('!!!!!!! TOC render');
        var lists = [];
        var data = this.props.data;
        var i =0;
        while(i < data.length){
            //console.log('test == ', data[i].title);
            lists.push(<li key={data[i].id}><a href={"/content/"+ data[i].id}>{data[i].title}</a></li>);
           // console.log('test == ', data[i].id);
            i= i+1;
        }
        
        return(
            <nav>
                <ul>
                    
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;