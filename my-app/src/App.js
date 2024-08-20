import React from "react"
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native"
import Primeiro from  './components/Primeiro'
import CompPadrao, { Comp2, Comp3 } from "./components/Multi"
import MinMax from "./components/MinMax"
import Aleatorio from "./components/Aleatorio"
import Fragment from "./components/Fragment"
import Botao from "./components/Botao"
import Contador from "./components/Contador"
import Pai from "./components/direta/Pai"
import Pai2 from "./components/indireta/Pai"
import ContadorV2 from "./components/contador/Contador"
import Diferenciar from "./components/Diferenciar"
import ImparPar from "./components/ImparPar"
import Familia from "./components/relacao/Familia"
import Membro from "./components/relacao/Membro"
import UsuarioLogado from "./components/UsuarioLogado"
import ListaProdutos from "./components/produtos/ListaProdutos"
import ListaProdutosV2 from "./components/produtos/ListaProdutosV2"
import DigiteSeuNome from "./components/DigiteSeuNome"

export default () => (
    <SafeAreaView style={style.App}>
        {/* Barra de status em cor azul */}
        <StatusBar backgroundColor={'skyblue'}/> 
        {/* Meu primeiro componente */}
        {/* <Primeiro /> */}

        {/* Entendendo o sistema de módulos do ECMAScript */}
        {/* <Comp2 />
        <Comp3 />
        <CompPadrao /> */}

        {/* Componente que recebe propriedades */}
        {/* <MinMax min={3} max="20" />  */}
        {/* Para enviar um valor númerico utiliza-se um par de chaves */}

        {/* Gerando números aleatórios (passando mínimo e máximo através de propriedades) */}
        {/* <Aleatorio min={1} max={10}/> */}

        {/* Aprendendo sobre React Fragment (Retornando mais de um componente) */}
        {/* <Fragment principal={"Título"} secundario={"Secundário"} /> */}

        {/* Trabalhando com botões */}
        {/* <Botao /> */}

        {/* Entendendo o useState */}
        {/* <Contador valor={0} passo={2}/> */}

        {/* Estudando comunicação direta */}
        {/* <Pai /> */}

        {/* Estudando comunicação indireta */}
        {/* <Pai2 /> */}

        {/* Contador mais elaborado */}
        {/* <ContadorV2 /> */}

        {/* Diferenciando sistemas operacionais (android, iOS...) */}
        {/* <Diferenciar /> */}

        {/* Renderização condicional */}
        {/* <ImparPar num={11} /> */}

        {/* Aprendendo props.children*/}
        {/*  Aqui tenho duas familias com dois membros cada
            (Note que os nomes e sobrenomes estão sendo passados
            como propriedades)
        */}
        {/* <Familia>
            <Membro nome={'Luis'} sobrenome={'Pimenta'} />
            <Membro nome={'Henrique'} sobrenome={'Pimenta'} />
        </Familia>
        <Familia>
            <Membro nome={'Luis'} sobrenome={'Queiroz'} />
            <Membro nome={'Henrique'} sobrenome={'Queiroz'} />
        </Familia> */}

        {/* Renderização condicional */}
        {/* Utilizei os arquivos UsuarioLogado e If nessa aula */}
        {/* <UsuarioLogado usuario={ {nome: 'Luis', email: 'luis@email.com'} } />
        <UsuarioLogado usuario={ {nome: 'Henrique'} } />
        <UsuarioLogado usuario={ null } />
        <UsuarioLogado usuario={ {} } /> */}

        {/* Renderizando listas */}
        {/* <ListaProdutos /> */}

        {/* Aprendendo FlatList */}
        {/* <ListaProdutosV2 /> */}

        {/* Utilizando TextInput */}
        <DigiteSeuNome />



    </SafeAreaView>
)

// Aplicando estilo
const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,

    },
})