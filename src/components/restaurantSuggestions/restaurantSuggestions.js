import {FlatList, Image, StyleSheet, Text, View} from 'react-native'
import React, {Component} from "react";

export class RestaurantSuggestions extends Component {

    constructor(props) {
        super(props);
        this.styles = StyleSheet.create({
            itemSeparator: {
                marginLeft: 20,
                marginRight: 20,
                borderBottomColor: '#ebebeb',
                borderBottomWidth: 1,
            },
            imageBox: {
                margin: 10
            },
            image: {
                height: 160,
                resizeMode: 'cover',
            }

        });
        this.suggestions = [
            {
                id: '1',
                name: 'restaurant 1'
            },
            {
                id: '2',
                name: 'restaurant 2'
            },
            {
                id: '3',
                name: 'restaurant 3'
            }
        ]

    }

    _renderItem = ({item}) =>
        <View style={{flex: 1, flexDirection: 'column', height: 200}}>
            <View style={this.styles.imageBox}>
                <Image source={require('./restaurant.jpg')} style={this.styles.image}></Image>
            </View>
            <View style={{flex: 1}}>
                <Text>{item.name}</Text>
            </View>
        </View>;

    render() {

        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <FlatList
                    data={this.suggestions}
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={this.styles.itemSeparator}/>}
                />
            </View>
        )
    }

}