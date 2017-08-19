import React, {Component} from 'react';
import query from '../queries/fetchSongs';
import deleteSong from '../queries/deleteSong';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

class SongList extends Component {
    onSongDelete(id) {
        this.props.mutate({variables: {id}})
            .then(() => this.props.data.refetch());
    }

    renderSongs() {
        if (!this.props.data.loading) {
            return this.props.data.songs.map(({id, title}) => {
                return (
                    <li key={id} className="collection-item">
                        {title}
                        <i className="material-icons"
                           onClick={() => this.onSongDelete(id)}

                        >
                            delete
                        </i>
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


export default graphql(deleteSong)(
    graphql(query)(SongList)
);