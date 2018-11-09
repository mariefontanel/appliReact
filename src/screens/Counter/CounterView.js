import {Text, View, Image, ScrollView} from "react-native";
import React, {Component} from 'react';
import styles from './CounterStyle';
import Button from "../../components/Button/Button";

export default class CounterView extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.bigBox}>

                    <Text style={styles.title}>
                        Code life
                    </Text>
                    <Image source={{uri: 'https://ljdchost.com/45460281_n.png'}} style={styles.img}/>
                    <Text style={styles.textCounter}>{this.props.number}</Text>

                    <View style={styles.boxLikeDislike}>
                        <View style={styles.boxDislike}>
                            <Button
                                title={"J'aime pas"}
                                onPressButton={this.props.less}
                            />
                        </View>
                        <View style={styles.boxLike}>
                            <Button
                                title={"J'aime"}
                                onPressButton={this.props.plus}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

