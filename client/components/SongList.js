import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql} from 'react-apollo';
import { Link } from 'react-router';

class SongList extends Component {
    renderSongs() {
        if (!this.props.data.loading) {
            return this.props.data.songs.map(song => {
                return (
                    <li key={song.id} className="collection-item">
                        {song.title}
                    </li>
                );
            });
        } else {
            return (<div>Loading</div>)
        }
    }

    render() {
        return (
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link to="/songs/new"
                className="btn-floating btn-large red right"
                >
                    <i className="material-icons">add</i>

                </Link>
            </div>
        );
    }
}


const query = gql`
    { 
        songs {
            title
            id
        }
    } 
`;

export default graphql(query)(SongList);