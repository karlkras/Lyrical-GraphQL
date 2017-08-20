import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import likeLyric from '../queries/likeLyric';


class LyricList extends Component {
    onThumsUp(id, likes) {
        let guess = ++likes;
        console.log(id, guess);
        this.props.mutate({
            variables: {id},
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    id,
                    likes: guess,
                    __typename: "LyricType"
                }
            }
        });
    }

    renderLyrics() {
        if (this.props.lyrics) {
            return this.props.lyrics.map(({id, content, likes}) => {
                return (
                    <li key={id} className="collection-item">
                            {content}
                        <div className="vote-box">
                            <i className="material-icons"
                               onClick={() => this.onThumsUp(id, likes)}
                            >
                                thumb_up
                            </i>
                            {likes}
                        </div>
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
                    {this.renderLyrics()}
                </ul>
                {/*<Link to="/songs/new"*/}
                      {/*className="btn-floating btn-large red right"*/}
                {/*>*/}
                    {/*<i className="material-icons">add</i>*/}

                {/*</Link>*/}
            </div>
        )
    }
}

export default graphql(likeLyric)(LyricList);