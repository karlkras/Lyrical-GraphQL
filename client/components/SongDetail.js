import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import getSong from '../queries/fetchSong';
import { Link, hashHistory } from 'react-router';

import LyricCreate from './LyricCreate';


class SongDetail extends Component {
    // getSong() {
    //     var id = this.props.id;
    // }

    render() {
        const { song } = this.props.data;

        if ( ! song ) { return <div></div> }

        return (
            <div>
                <Link to="/">
                    Home
                </Link>
                <h3>
                    {song.title}
                </h3>
                <LyricCreate/>
            </div>
        )
    }
}

export default graphql(getSong, {
    options: (props) => { return { variables: { id: props.params.id}}}
})(SongDetail);