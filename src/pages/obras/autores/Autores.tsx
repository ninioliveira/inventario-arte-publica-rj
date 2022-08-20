import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TabelaTipoObras } from '@componentes';
import { autores } from '@utils';

import MaiorAutor from './MaiorAutor';
import styles from './styles';

function Autores(): JSX.Element {
    const style = styles();

    const autoresOrdenadasPorNome = autores.sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ width: '100%' }}>
                <MaiorAutor />
                <View style={{ height: 24 }} />
                <TabelaTipoObras tipologia tipo="Autores" tipos={autoresOrdenadasPorNome} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Autores;
