Instruções para Rodar o Projeto - Lista de compras
Este guia fornece as etapas necessárias para configurar e rodar o aplicativo localmente.

Pré-requisitos
Antes de começar, é necessário ter o Node.js e o npm instalados no seu computador. Se ainda não tiver o Node.js instalado, siga as instruções abaixo:

Instalar o Node.js

Acesse o site oficial do Node.js: https://nodejs.org
Baixe a versão mais recente LTS (Long Term Support) e siga as instruções para instalação conforme o seu sistema operacional.
Após a instalação, você pode verificar se o Node.js foi instalado corretamente executando o seguinte comando no terminal:

bash
node -v
E para verificar a versão do npm:

bash
npm -v
Passos para rodar o aplicativo

1. Instalar as dependências
Com o Node.js instalado, abra o terminal na raiz do projeto e execute o seguinte comando para instalar as dependências do projeto:

bash
npm install
2. Rodar o aplicativo
Após a instalação das dependências, você pode iniciar o projeto executando o comando abaixo:

bash
npx expo start
Isso abrirá o Expo DevTools no navegador, onde você poderá ver as opções para rodar o aplicativo em um dispositivo físico, emulador ou no navegador. O Expo também fornecerá um código QR que pode ser escaneado com o aplicativo Expo Go (disponível na App Store ou Google Play) para ver o aplicativo diretamente no seu dispositivo.

Dicas adicionais:
Rodar no Emulador Android/iOS:

Caso queira rodar o aplicativo no emulador Android ou iOS, basta garantir que o emulador esteja aberto e então escolher a opção no Expo DevTools.
Hot Reloading:

O Expo oferece Hot Reloading, o que significa que qualquer alteração no código será automaticamente refletida no seu dispositivo ou emulador sem a necessidade de reiniciar o aplicativo manualmente.
