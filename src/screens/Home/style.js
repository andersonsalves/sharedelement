
import React from 'react';

import {

    StyleSheet

} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';


import { dp } from '../../class/Dimension';


//-------------------------------------------------------

export const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: dp(30),
        backgroundColor: '#0f0f0f'
    },

    container_title: {

        marginLeft: dp(10),
        marginTop: dp(10),
        marginBottom: dp(10)
    },

    text_day: {

        fontSize: dp(12),
        textTransform: 'uppercase',
        color: '#ffffff'
    },

    text: {

        fontSize: dp(30),
        color: '#ffffff'
    },

    button: {

        marginBottom: dp(10)
    },

    container_text: {

        flexDirection: 'row',
        position: 'absolute',
        bottom: dp(10),
        left: dp(5)
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
    },

    icon_flag: {

        color: '#ffffff',
        marginRight: dp(5)
    }

});


export const IconFlag = () => {

    return (

        <Feather
            name='flag'
            size={dp(30)}
            style={styles.icon_flag} />

    );
}