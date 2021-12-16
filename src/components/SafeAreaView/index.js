
import React from 'react';

import {

    View

} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';



const SafeAreaView = ({ direction, children, color }) => {

    const insets = useSafeAreaInsets();


    return (

        <View
            style={{

                flex: 1,
                flexDirection: direction,
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                backgroundColor: color
            }}>

            {children}

        </View>
    );
}

export default React.memo(SafeAreaView);

