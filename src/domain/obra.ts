/* eslint-disable @typescript-eslint/no-explicit-any */
import Artista from './artista';
import Data from './data';
import Fato from './fato';

type Obra = {
    ID?: number;
    Imagem?: string;
    Autores?: Artista[] | undefined;
    Titulo?: string;
    Material?: string;
    Altura?: string;
    Largura?: string;
    Profundidade?: string;
    Diametro?: string;
    Peso?: string;
    ValorObra?: string;
    DataInauguracao?: string;
    DatasImportantes?: Data[];
    Promotor?: string;
    Financiamento?: string;
    Propriedade?: string;
    Zona?: string;
    Bairro?: string;
    Endereço?: string;
    Latitude?: string;
    Longitude?: string;
    SuporteEspacial?: string;
    Base?: string;
    MaterialBase?: string;
    Status?: string;
    Descricao?: string;
    Fatos?: Fato[];
    Temporalidade?: string;
    Funcao?: string;
    Natureza?: string;
    Tipologia?: string;
    Execucao?: boolean;
    Classificacao?: string;
    Categoria?: string;
    Remocao?: boolean;
    Realocacao?: boolean;
    LugarRealocacao?: string;
    ZonaRealocacao?: string;
    BairroRealocacao?: string;
    DataRealocacao?: string;
    LatitudeRealocacao?: string;
    LongitudeRealocacao?: string;
    EndereçoRealocacao?: string;
    Lugar?: string;
    Renomeacao?: boolean;
};

export default Obra;
