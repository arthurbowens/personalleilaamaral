import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { Icon, IconName } from './icon';

/** Número de WhatsApp da Leila, só dígitos com DDI + DDD (ex.: 5527999999999). */
const WHATSAPP_NUMBER = '5527998543200';

function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

@Component({
  selector: 'app-root',
  imports: [Icon],
  host: { '(document:keydown.escape)': 'closeMenu()' },
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly year = new Date().getFullYear();

  /** Menu hambúrguer (mobile / tablet). */
  protected readonly menuOpen = signal(false);
  protected readonly navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#resultados', label: 'Antes e depois' },
    { href: '#duvidas', label: 'Dúvidas' },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected readonly ctaStart = whatsappLink(
    'Oi, Leila! Vi seu site e quero começar minha consultoria.',
  );
  protected readonly ctaTalk = whatsappLink(
    'Oi, Leila! Quero conversar sobre meu objetivo e saber como funciona o acompanhamento.',
  );

  /** Antes e depois: cada slide do carrossel mostra um aluno. */
  protected readonly results = [
    {
      label: 'Aluna',
      before: 'images/aluna1-antes.jpg',
      after: 'images/aluna1-depois.jpg',
      beforePos: '50% 10%',
      afterPos: '50% 10%',
    },
    {
      label: 'Aluno',
      before: 'images/aluno1-antes.jpg',
      after: 'images/aluno1-depois.jpg',
      beforePos: '50% 50%',
      afterPos: '50% 50%',
    },
    {
      label: 'Aluno',
      before: 'images/aluno2-antes.jpg',
      after: 'images/aluno2-depois.jpg',
      beforePos: '50% 50%',
      afterPos: '50% 55%',
    },
  ];

  private readonly track = viewChild<ElementRef<HTMLElement>>('resultsTrack');
  protected readonly currentResult = signal(0);

  protected goToResult(index: number): void {
    const el = this.track()?.nativeElement;
    if (!el) return;
    const total = this.results.length;
    const i = (index + total) % total;
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
    this.currentResult.set(i);
  }

  protected onResultsScroll(): void {
    const el = this.track()?.nativeElement;
    if (!el || !el.clientWidth) return;
    this.currentResult.set(Math.round(el.scrollLeft / el.clientWidth));
  }

  protected readonly pains = [
    'Treino copiado da internet, que não foi feito pra você',
    'Começa animada na segunda e larga na quinta',
    'Não sabe se está fazendo o exercício certo, com a carga certa',
    'Já sentiu dor treinando ou correndo e não soube o motivo',
  ];

  protected readonly pillars: { label: string; icon: IconName }[] = [
    { label: 'Planejamento', icon: 'calendar' },
    { label: 'Acompanhamento', icon: 'eye' },
    { label: 'Individualidade', icon: 'target' },
  ];

  protected readonly steps: { title: string; text: string; icon: IconName }[] = [
    {
      title: 'Conversa inicial',
      text: 'Entendo seu objetivo, sua rotina, seu histórico e onde você treina.',
      icon: 'message',
    },
    {
      title: 'Treino 100% individual',
      text: 'Monto seu planejamento do zero, nada de ficha pronta.',
      icon: 'clipboard',
    },
    {
      title: 'Acompanhamento próximo',
      text: 'Você tira dúvidas comigo e eu ajusto o treino conforme sua evolução.',
      icon: 'users',
    },
    {
      title: 'Evolução constante',
      text: 'O treino muda junto com você.',
      icon: 'trending-up',
    },
  ];

  protected readonly audience = [
    'Mulheres que querem emagrecer com saúde e constância',
    'Quem quer ganhar massa muscular e definir o corpo',
    'Quem corre ou quer começar a correr sem se machucar',
    'Quem já tentou treinar sozinha e precisa de direção e organização',
  ];

  protected readonly goals: { title: string; text: string; icon: IconName }[] = [
    {
      title: 'Emagrecimento',
      text: 'Perda de gordura com treino estratégico, sem sofrimento e sem dieta da moda.',
      icon: 'flame',
    },
    {
      title: 'Hipertrofia',
      text: 'Ganho de massa e definição, com progressão de carga planejada.',
      icon: 'dumbbell',
    },
    {
      title: 'Condicionamento e corrida',
      text: 'Mais fôlego, mais resistência e fortalecimento para prevenir lesões como a canelite.',
      icon: 'activity',
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

  protected readonly modes: { label: string; where: string; text: string; icon: IconName }[] = [
    {
      label: 'Presencial',
      where: 'Espírito Santo',
      text: 'Treino acompanhado de perto, com correção na hora.',
      icon: 'map-pin',
    },
    {
      label: 'Online',
      where: 'Todo o Brasil',
      text: 'O mesmo cuidado e planejamento, no seu horário, na sua academia ou em casa.',
      icon: 'smartphone',
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
