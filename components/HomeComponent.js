import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
//ScrollView can be used to render groups of lists of items (similar to flatlist). 
//SV loads all at once, Flatlist -> lazy loading which renders part of a list at a time, 
//on screen or abt to be, parts that have scrolled far off scrn are removed from memory.
//Lazy Loading is a more efficient way, esp with long lists
import {Card} from 'react-native-elements';
import {CAMPSITES} from '../shared/campsites';
import {PROMOTIONS} from '../shared/promotions';
import {PARTNERS} from '../shared/partners';

function RenderItem({item}){
    if(item){
        return (
            <Card 
            featuredTitle={item.name}
            image={require('./images/react-lake.jpg')}>
                <Text
                    style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        )
    }
    return <View/>
}
class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS
        }
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem item={this.state.campsites.filter(campsite => campsite.featured)[0]}/>
                <RenderItem item={this.state.promotions.filter(promotion => promotion.featured)[0]}/>
                <RenderItem item={this.state.partners.filter(partner => partner.featured)[0]}/>
            </ScrollView>
        );
    }
}

export default Home;