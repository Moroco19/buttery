import React from 'react';
import Moment from 'moment';

const GroceryItem = (props) => {
    return (
        <div className="grocery-item-container">
            <div>
                <h3 className="list-name">{props.grocery.name}</h3>
                {/* Using moment to format date */}
                <p className="feat-last">Last Purchased: {Moment(props.grocery.last_purchased_date, "dddd, MMMM Do, YYYY").format("M/D/YYYY")}</p> 
                <p className="feat-last">Shopping Recurrance: {props.grocery.recurrence} days</p>
                {/* Using moment to format date and add recurrence */}
                <p className="feat-last">Expected Re-Purchase: {Moment(props.grocery.last_purchased_date, "dddd, MMMM Do, YYYY").add(props.grocery.recurrence, 'days').format("M/D/YYYY")}</p>
            </div>
            <div className="item-button">
                {/* Sending ID back up to GroceryController to lookup single grocery to make edits */}
                <span className="update-show-item" onClick={() => props.getGrocery(props.grocery.id, 'edit')}>Update</span>
                {/* Sending ID back up to FeatureWindow to handle deleting grocery from db */}
                <span className="delete-show-item" onClick={(evt) => props.handleFormSubmit('DELETE', evt, props.grocery, props.grocery.id)} >Delete</span>
            </div>
        </div>
    )
}

export default GroceryItem;
