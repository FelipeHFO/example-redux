# Exemplo de uma aplicação utilizando Redux

Este projeto exemplifica um menu lateral compartilhando informações com um componente chamado video através da ferramenta de arquitetura <strong>Redux</strong>.

<br>

### O que iremos utilizar neste projeto?

Partindo do pré suposto que você já tenha feito alguns projetos em React, mas caso não seja familiarizado é necessário ter o Node e NPM instalados em sua máquina e também um editor de sua preferência, no meu caso utilizo o VSCode.

<br>

#### Tecnologias que iremos utilizar:

- React v18.0.0 `npx create-react-app meu-projeto`
- Redux `yarn add redux`
- React Redux `yarn add react-redux`

<br>

### Para que serve o Redux?

O Redux é um processo arquitetural de projeto, onde ele irá ficar responsável por manter todas as informações que serão necessário o compartilhamento delas, ele também lida com ações/efeitos colaterais (side effects).
No nosso exemplo, teremos um "player" de video e um menu lateral que irão compartilhar informações entre eles.
Dependendo da situação, você pode optar por não utilizar o Redux, passando props ou outra forma, mas além de não ficar fácil a manutenção e escalabilidade do projeto, pode criar alguns gargalos de renderização, tirando o fato que com Redux conseguimos criar ações para determinados eventos.

<br>

### Mão na massa!

Não irei mostrar todo o código aqui, caso queira olhar mais detalahadamente basta ir no arquivo dentro do projeto.

<br>

#### Primeiro a estrutura de pastas

Este passo é importante, pode ser que a empresa que trabalhe utilize uma outra forma, o importante é ficar claro para você.

Geralmente temos a seguinte estrutura de pasta:

```
-- node_modules
-- publc
-- src
	-- components
		-- Sidebar
		-- Video
	-- store
		-- actions
		-- reducers
		-- index.js
```

Então dentro da pasta src teremos uma pasta 'store' onde iremos definir os dados compartilhados e ações.

<br>

#### Vamos começar pela pasta 'reducers'.

- Nela será onde iremos definir n funções que irão se chamar de reducers e que retornam os dados que queremos compartilhar.  Estas funções serão basicamente assim:

```
export default function reducer(state, action){
	if(action.type === 'NOME_DE_UMA_AÇÃO'){
		return {
			...
		}
	}

	return state;
}
```
Esta variável state pode ser inicializada com um valor que queira compartilhar. No nosso caso inicializamos ela com um objeto chamado INITIAL_STATE.

- Após criar nosso arquivo contendo uma função reducer, vamos exporta-lós de maneira que você possa exportar qualquer reducer de uma forma mais simples, dentro do arquivo index.js na pasta 'reducers'.

```
import { combineReducers } from 'redux';

import reducer from './reducer';

export default combineReducers({
  reducer,
});
```

<br>

#### Vamos para as actions.

- Esta pasta irá conter nossas ações, como o nome propriamente diz, as actions serão funções que retornam um objeto ou um simples objeto passado diretamente para a função 'dispatch' que o próprio Redux disponibiliza para manipularmos as informações.

- Este objeto irá conter um atributo 'type' onde irá ter descrito a ação para a função reducer, geralmente é escrito em caixa alta, como no exemplo acima 'NOME_DE_UMA_AÇÃO' e os valores que quer manipular.

<br>

#### Arquivo index.js dentro da Store

Neste arquivo é onde criaremos a árvore de estados do Redux, utilizando a função 'createStore', importaremos os nossos reducers combinados do arquivo 'reducers/index.js' e passaremos para a função 'createStore' como parâmetro e atribuindo essa função 'createStore' para uma constante chamada 'store' que iremos exportar ela, conforme exemplo abaixo:

```
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
```


<br>

#### Ainda tem mais configuração!

Depois que criamos nossos reducers e actions, iremos englobar os componentes que iremos compartilhar estes dados.
No nosso arquivo App.js iremos importar do react-redux um componente chamado 'Provider' e passaremos por props nossa 'store' criada anteriormente, segue exemplo abaixo:

```
import store from './store/index';

import './App.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        ...Componentes que irão compartilhar os dados
      </Provider>
    </div>
  );
}

export default App;
```

<br>

#### Quase lá!

Agora para conseguirmos recupar os dados e/ou mandar uma action para nosso reducer temos que utilizar uma função chamada 'connect' do react-redux e ela trabalha com High Order Components, que é uma forma de trabalhar com funções um pouco diferente.

- Recuperando os dado

```
import { connect } from 'react-redux';

const NomeDoComponente = ({ state }) => (
	<div>
		...
	</div>
)
export default connect(state => state)(NomeDoComponente);
```

Dentro da variável 'state' irá conter um objeto que terá o nome passado para a função 'combineReducers' dentro do arquivo store/reducers/index.js. Ele será passado por props para nosso componente.

- Falta as actions

	Dentro deste objeto que virá por props no componente, irá vir um atributo que será a função dispatch, conforme o exemplo abaixo:

```
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/course';

const NomeDoComponente = ({ state, dispatch }) => (
	<div>
		...
		<button onClick={() => dispatch(Actions.nomeDaAction())}>
	</div>
)
export default connect(state => state)(NomeDoComponente);
```

<br>

### Conclusão

O Redux nós ajuda a descomplicar essa manipulação de dados dentro dos componentes e cria determinada ações para nos ajudar a manipula-lós.
Acredito que se você seguir essa documentação e abrir o projeto irá ficar bem mais claro para entender.
