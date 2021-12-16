
import React from 'react';

import {

    StyleSheet

} from 'react-native';


import AntDesign from 'react-native-vector-icons/AntDesign';

import Feather from 'react-native-vector-icons/Feather';


import { dp } from '../../class/Dimension';


// ----------------------------------------------------

export const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: '#0f0f0f'
    },

    icon_close: {

        color: '#000000'
    },

    image: {

        width: '100%',
        borderBottomLeftRadius: dp(20),
        borderBottomRightRadius: dp(20)
    },

    container_close: {

        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        width: '100%',
        position: 'absolute',
        height: dp(30),
        paddingRight: dp(10)
    },

    text: {

        fontSize: dp(17),
        marginTop: dp(10),
        marginLeft: dp(10),
        lineHeight: dp(24),
        color: '#ffffff'
    },

    container_scroll: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon_flag: {

        color: '#ffffff',
        marginRight: dp(5)
    },

    container_text: {

        flexDirection: 'row',
        marginLeft: dp(10),
        marginTop: dp(10)
    },

    text_title: {

        color: 'white',
        fontSize: dp(24),
        fontWeight: 'bold',
        lineHeight: dp(25)
    },

    text_description: {

        color: 'white',
        fontSize: dp(12),
        fontWeight: 'bold',
        lineHeight: dp(15)
    }

});


export const IconClose = () => {

    return (

        <AntDesign
            name='close'
            size={dp(30)}
            style={styles.icon_close} />

    );
}

export const IconFlag = () => {

    return (

        <Feather
            name='flag'
            size={dp(30)}
            style={styles.icon_flag} />

    );
}