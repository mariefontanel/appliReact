import {Text, View, Image, ScrollView} from "react-native";
import React, {Component} from 'react';
import styles from './CounterStyle';
import MyButton from "../../components/Button/MyButton";

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
                            <MyButton
                                title={"J'aime pas"}
                                onPressButton={this.props.less}
                            />
                        </View>
                        <View style={styles.boxLike}>
                            <MyButton
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

