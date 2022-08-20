import { View } from 'react-native';

import { Map } from '@base-components';
import { obrasRecorte } from '@utils';

import styles from './styles';

function MapAll(): JSX.Element {
    const style = styles();

    const markers = obrasRecorte
        .filter((obra) => obra.Latitude != null && obra.Longitude != null)
        .map((obra) => ({
            position: {
                latitude: obra.Latitude ?? '0',
                longitude: obra.Longitude ?? '0',
            },
        }));
    return (
        <View style={style.container}>
            <Map markers={markers} />
        </View>
    );
}

export default MapAll;