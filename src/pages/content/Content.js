import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './Content.css';
import items from '../../data/menu';
import Navigation from '../../components/navigation/Navigation';

class Content extends Component {

    static propTypes = {
        body: PropTypes.object.isRequired
    };

    render() {
        const { body } = this.props;

        return (
            <div className="content" >
                <Navigation title="Tasks app" items={items}></Navigation>
                {body}

            </div>

        )
    }

}
export default Content;
