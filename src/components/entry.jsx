import React, {Component} from "react";

class Entry extends Component {
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Entry;