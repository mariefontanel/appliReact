import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    counter: {
        flex: 1,
        backgroundColor: '#444444',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    bigBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCounter: {
        textAlign: 'center',
        fontSize: 22,
        margin: 10
    },
    boxLikeDislike: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxDislike: {
        width: '35%',
        height: 50,
        backgroundColor: '#FFD6BA',
        borderWidth: 1,
        borderRadius: 20,
        margin: 5
    },
    boxLike: {
        width: '35%',
        height: 50,
        backgroundColor: '#BEE3DB',
        borderWidth: 1,
        borderRadius: 20,
        margin: 5
    },
    img: {
        width: 300,
        height: 300,
        marginTop: 10
    }
});