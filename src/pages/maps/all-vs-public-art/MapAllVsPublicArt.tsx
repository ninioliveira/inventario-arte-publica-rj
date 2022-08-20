import { Map } from '@base-components';
import { Obra } from '@domain';
import * as obra from '@utils/data/obra';
import * as obra_artepublica from '@utils/data/obra_artepublica';

function MapAllVsPublicArt(): JSX.Element {
    const typed_obra: Record<string, Obra> = obra;
    const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

    const markers_obra = Object.keys(typed_obra)
        .filter((key) => typed_obra[key].Latitude != null && typed_obra[key].Longitude != null)
        .map((key) => ({
            position: {
                latitude: typed_obra[key].Latitude ?? '0',
                longitude: typed_obra[key].Longitude ?? '0',
            },
            color: 'black',
        }));

    const markers_obra_artepublica = Object.keys(typed_obra_artepublica)
        .filter((key) => typed_obra_artepublica[key].Latitude != null && typed_obra_artepublica[key].Longitude != null)
        .map((key) => ({
            position: {
                latitude: typed_obra_artepublica[key].Latitude ?? '0',
                longitude: typed_obra_artepublica[key].Longitude ?? '0',
            },
            color: 'blue',
        }));

    const markers: {
        position: { latitude: string; longitude: string };
        color?: string;
    }[] = [];
    Array.prototype.push.apply(markers, markers_obra);
    Array.prototype.push.apply(markers, markers_obra_artepublica);

    return <Map markers={markers} />;
}

export default MapAllVsPublicArt;
