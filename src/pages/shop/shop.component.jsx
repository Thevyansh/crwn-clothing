import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Switch>
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </Switch>
    </div>
);


export default (ShopPage);