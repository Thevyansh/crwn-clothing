import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import './collection-overview.styles.scss'
import {selectCollectionForPreview} from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({collections}) => {
    return (
        <div className='collection-overview'>
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});
export default connect(mapStateToProps)(CollectionOverview);
