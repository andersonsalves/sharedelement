
import {

    Dimensions,
    PixelRatio

} from 'react-native';


const window = Dimensions.get('window');

const w = window.width;

const h = window.height;


// ------------- Functions ---------------

export const width = w;

export const height = h;


export const dp = (size) => {

    return Math.round(PixelRatio.roundToNearestPixel(w / 320 * size));
}

export const dph = (size) => {

    return Math.round(PixelRatio.roundToNearestPixel(h / 640 * size));
}


const scale = size => width / 320 * size;

export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

