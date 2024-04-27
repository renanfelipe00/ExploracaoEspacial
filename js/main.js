const ListadeBot = document.querySelectorAll('.secao');
const secao = document.querySelectorAll('.secao__conteudo');
const topo = document.querySelector('#topo');

function Botoes () {
    for(i = 0; i < ListadeBot.length; i++){
        let sca = secao[i]
        let bot = ListadeBot[i]
        bot.addEventListener('click', () => {
            sca.scrollIntoView({behavior: 'smooth'});
        });
    }
}
Botoes()

topo.addEventListener('click', () => {
    document.querySelector('.Container__cabecalho').scrollIntoView({behavior: 'smooth'});
})
