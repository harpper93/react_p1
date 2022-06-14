import React, {Component} from "react";

class Content extends Component{
    rentder(){
        return (
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
             </article>
        );
    }
}

export default Content;