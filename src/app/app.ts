import { Component } from '@angular/core';

/** Número de WhatsApp da Leila, só dígitos com DDI + DDD (ex.: 5527999999999). */
const WHATSAPP_NUMBER = '5527000000000';

function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly year = new Date().getFullYear();

  protected readonly ctaStart = whatsappLink(
    'Oi, Leila! Vi seu site e quero começar minha consultoria.',
  );
  protected readonly ctaTalk = whatsappLink(
    'Oi, Leila! Quero conversar sobre meu objetivo e saber como funciona o acompanhamento.',
  );

  protected readonly pains = [
    'Treino copiado da internet, que não foi feito pra você',
    'Começa animada na segunda e larga na quinta',
    'Não sabe se está fazendo o exercício certo, com a carga certa',
    'Já sentiu dor treinando ou correndo e não soube o motivo',
  ];

  protected readonly pillars = ['Planejamento', 'Acompanhamento', 'Individualidade'];

  protected readonly steps = [
    {
      title: 'Conversa inicial',
      text: 'Entendo seu objetivo, sua rotina, seu histórico e onde você treina.',
    },
    {
      title: 'Treino 100% individual',
      text: 'Monto seu planejamento do zero, nada de ficha pronta.',
    },
    {
      title: 'Acompanhamento próximo',
      text: 'Você tira dúvidas comigo e eu ajusto o treino conforme sua evolução.',
    },
    {
      title: 'Evolução constante',
      text: 'O treino muda junto com você.',
    },
  ];

  protected readonly audience = [
    'Mulheres que querem emagrecer com saúde e constância',
    'Quem quer ganhar massa muscular e definir o corpo',
    'Quem corre ou quer começar a correr sem se machucar',
    'Quem já tentou treinar sozinha e precisa de direção e organização',
  ];

  protected readonly goals = [
    {
      title: 'Emagrecimento',
      text: 'Perda de gordura com treino estratégico, sem sofrimento e sem dieta da moda.',
    },
    {
      title: 'Hipertrofia',
      text: 'Ganho de massa e definição, com progressão de carga planejada.',
    },
    {
      title: 'Condicionamento e corrida',
      text: 'Mais fôlego, mais resistência e fortalecimento para prevenir lesões como a canelite.',
    },
  ];

  protected readonly testimonials = [
    {
      quote:
        'Tô amando muito sua consultoria, seu cuidado e preocupação com os meus treinos faz a diferença demais.',
      author: 'Aluna da consultoria online',
    },
    {
      quote:
        'Ter te incluído foi uma escolha necessária e que estava faltando. Tem me ajudado demais com o foco e organização.',
      author: 'Giulia, aluna online · SP',
    },
    {
      quote: 'Um pouquinho da minha evolução com a ajuda dela.',
      author: 'Carine, aluna',
    },
  ];

  protected readonly modes = [
    {
      label: 'Presencial',
      where: 'Espírito Santo',
      text: 'Treino acompanhado de perto, com correção na hora.',
    },
    {
      label: 'Online',
      where: 'Todo o Brasil',
      text: 'O mesmo cuidado e planejamento, no seu horário e na sua academia.',
    },
  ];

  protected readonly faq = [
    {
      q: 'Preciso ter experiência?',
      a: 'Não. O treino é montado para o seu nível, seja iniciante ou avançada.',
    },
    {
      q: 'Funciona se eu treinar em casa?',
      a: 'Sim. O planejamento se adapta ao que você tem disponível.',
    },
    {
      q: 'Como tiro dúvidas?',
      a: 'Direto comigo, pelo WhatsApp.',
    },
    {
      q: 'Em quanto tempo vejo resultado?',
      a: 'Depende do seu ponto de partida e da constância, mas com plano e acompanhamento a evolução aparece.',
    },
  ];
}
