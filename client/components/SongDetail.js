import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import getSong from '../queries/fetchSong';


class SongDetail extends Component {
    // getSong() {
    //     var id = this.props.id;
    // }

    render() {
        console.log(this.props);
        return (
            <div>
                <h3>
                    Song Detail
                </h3>
            </div>
        )
    }
}

export default graphql(getSong, {
    options: (props) => { return { variables: { id: props.params.id}}}
})(SongDetail);