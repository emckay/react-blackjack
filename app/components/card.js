// app/components/card.js

import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div className={`card ${this.props.suit}`}>
                <div className="top-rank">
                    {this.props.rank}
                </div>
                <div className="suit">
                    {this.props.suit}
                </div>
                <div className="bottom-rank">
                    {this.props.rank}
                </div>
            </div>
        );
    }
}