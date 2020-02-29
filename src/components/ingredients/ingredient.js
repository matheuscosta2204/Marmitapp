import React from 'react';
import { Image } from 'react-native';
import { View, Text, Card, CardItem } from 'native-base';
import { connect } from 'react-redux';

import styles from './ingredient.style';
import AddOrRemove from '../ui/addOrRemove/addOrRemove';

import { addItem, removeItem } from '../../actions/order';

const Ingredient = ({ type, title, items, icon, addItem, removeItem, order }) => {
    return (
        <Card>
            <CardItem>
                <View style={styles.itemsContainer}>
                    <View style={styles.headerContainer}>
                        <Image source={icon} style={styles.icon} />
                        <Text style={styles.type}>{title}</Text>
                    </View>
                    <View style={styles.itemsContent}>
                        {items.map((item, key) => {
                            const price = item.value !== null ? item.value : 0;
                            const qtd = order[type].filter(el => el === item.description).length;
                            return (
                                <View style={styles.itemContainer} key={key}>
                                    <View style={styles.descriptionContainer}>
                                        <Text style={styles.item}>{item.description}</Text>
                                        {price > 0 && <Text>R$ {price}</Text>}
                                    </View>
                                    <AddOrRemove value={qtd} add={() => addItem(type, item.description)} remove={() => removeItem(type, item.description)} />
                                </View>
                            )
                        })}
                    </View>
                </View>            
            </CardItem>
        </Card>
    )
}

function mapStateToProps ({ order }) {
    return {
        order: order.order
    }
}

export default connect(mapStateToProps, { addItem, removeItem })(Ingredient);