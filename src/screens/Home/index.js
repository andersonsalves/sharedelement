
import React from 'react';

import {

    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView

} from 'react-native';

import { SharedElement } from 'react-navigation-shared-element';


import SafeAreaView from '../../components/SafeAreaView';


import {

    styles,
    IconFlag

} from './style';

import { data } from '../../config/data';

import { dp } from '../../class/Dimension';



export default function Home({ navigation }) {


    const { width } = Dimensions.get('screen');

    const ITEM_WIDTH = width * 0.9;

    const ITEM_HEIGHT = ITEM_WIDTH * 0.9;


    const handleNavigation = (item) => {

        navigation.navigate('DetailScreen', {

            item: item
        });
    }



    return (

        <SafeAreaView
            direction='column'
            color='#0f0f0f'>

            <View
                style={styles.container_title}>

                <Text
                    style={styles.text_day}>
                    Saturday 9 January
                </Text>

                <Text
                    style={styles.text}>
                    Today
                </Text>

            </View>

            <ScrollView
                indicatorStyle='white'
                contentContainerStyle={{

                    alignItems: 'center'
                }}>

                {

                    data.map((item, index) => {

                        return (

                            <View
                                key={item.id}>

                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.button}
                                    onPress={() => { handleNavigation(item); }}>

                                    <SharedElement
                                        id={`item.${item.id}.image_url`}>

                                        <Image
                                            style={{
                                                borderRadius: dp(14),
                                                width: ITEM_WIDTH,
                                                height: ITEM_HEIGHT
                                            }}

                                            source={{ uri: item.image_url }}
                                            resizeMode='cover' />

                                    </SharedElement>

                                    <View
                                        style={styles.container_text}>

                                        <SharedElement
                                            id={`item.${item.id}.icon`}>

                                            <IconFlag />

                                        </SharedElement>

                                        <View>

                                            <SharedElement
                                                id={`item.${item.id}.title`}>

                                                <Text
                                                    style={styles.text_title}>

                                                    {item.title}

                                                </Text>

                                            </SharedElement>

                                            <SharedElement
                                                id={`item.${item.id}.description`}>

                                                <Text
                                                    style={styles.text_description}>

                                                    {item.description}

                                                </Text>

                                            </SharedElement>

                                        </View>

                                    </View>

                                </TouchableOpacity>

                            </View>
                        )
                    })
                }

            </ScrollView>

        </SafeAreaView>
    );
}
