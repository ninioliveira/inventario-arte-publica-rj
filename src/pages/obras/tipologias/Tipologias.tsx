import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TabelaTipoObras } from '@componentes';
import { tipologias } from '@utils';

import styles from './styles';

function Tipologias(): JSX.Element {
    const style = styles();

    const tipologiasOrdenadasPorNome = tipologias.sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <TabelaTipoObras tipo="Tipologia" tipos={tipologiasOrdenadasPorNome} />
                <View style={{ height: 24 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Tipologias;
