import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './Content.css';
class Content extends Component {

    static propTypes = {
        body: PropTypes.object.isRequired
    };
  
    render() {
        const { body } = this.props;

        return (
            <div className="content" >
                {body}
                <p>{body}</p>
            </div>

        )
    }

}
export default Content;
