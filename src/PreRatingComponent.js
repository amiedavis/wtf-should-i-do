import React from 'react';
import ReactDOM from 'react-dom';

class PreRatingComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.visible) {
            return null;
        }
        return (
            <div>
                <h1> Pre Rating </h1>
                <div className="rating-joy">
                    <span className="label">Joy</span>
                    <RatingButtonGroup/>
                </div>
                <div className="rating-sad">
                    <span className="label">Sad</span>
                    <RatingButtonGroup/>
                </div>
                <div className="rating-anger">
                    <span className="label">Anger</span>
                    <RatingButtonGroup/>
                </div>
                <div className="rating-fear">
                    <span className="label">Fear</span>
                    <RatingButtonGroup/>
                </div>
                <div className="rating-shame">
                    <span className="label">Shame</span>
                    <RatingButtonGroup/>
                </div>
                <div className="rating-pain">
                    <span className="label">Pain</span>
                    <RatingButtonGroup/>
                </div>
            </div>
        );
    }
}

const RatingButtonGroup = () => (
    <div className="ui basic buttons rating-button-container">
        <button className="ui button">1</button>
        <button className="ui button">2</button>
        <button className="ui button">3</button>
        <button className="ui button">4</button>
        <button className="ui button">5</button>
    </div>
);

export default PreRatingComponent;