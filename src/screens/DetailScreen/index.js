
import React from 'react';

import {

    View,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    Text

} from 'react-native';

import { SharedElement } from 'react-navigation-shared-element';

import { useSafeAreaInsets } from 'react-native-safe-area-context';


import {

    styles,
    IconClose,
    IconFlag

} from './style';


const DetailScreen = ({ navigation, route }) => {

    const { item } = route.params;

    const { height } = Dimensions.get('window');

    const ITEM_HEIGHT = height * 0.5;

    const insets = useSafeAreaInsets();



    const handleNavigation = () => {

        navigation.goBack();
    }


    return (

        <View
            style={styles.container}>

            <SharedElement
                id={`item.${item.id}.image_url`}>

                <Image
                    source={{ uri: item.image_url }}

                    style={[styles.image, {

                        height: ITEM_HEIGHT
                    }]}

                    resizeMode='cover' />

            </SharedElement>

            <View
                style={[styles.container_close, {

                    marginTop: insets.top
                }]}>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={handleNavigation}>

                    <IconClose />

                </TouchableOpacity>

            </View>

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

            <View
                style={[styles.container_scroll, {

                    paddingBottom: insets.bottom
                }]}>

                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>

                    <Text
                        style={styles.text}>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.

                    </Text>

                    <Text
                        style={styles.text}>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.

                    </Text>

                </ScrollView>

            </View>

        </View>
    );
}

DetailScreen.sharedElements = (route) => {

    const { item } = route.params;

    return [
        {
            id: `item.${item.id}.image_url`,
            animation: 'move',
            resize: 'clip'
        },
        {
            id: `item.${item.id}.icon`,
            animation: 'fade',
            resize: 'clip'
        },
        {
            id: `item.${item.id}.title`,
            animation: 'fade',
            resize: 'clip'
        },
        {
            id: `item.${item.id}.description`,
            animation: 'fade',
            resize: 'clip'
        }
    ];
};

export default DetailScreen;