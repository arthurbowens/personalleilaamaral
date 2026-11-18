import { Component, ElementRef, afterNextRender, computed, signal, viewChild } from '@angular/core';
import { Icon, IconName } from './icon';

/** Número de WhatsApp da Leila, só dígitos com DDI + DDD (ex.: 5527999999999). */
const WHATSAPP_NUMBER = '5527998543200';

function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

@Component({
  selector: 'app-root',
  imports: [Icon],
  host: {
    '(document:keydown.escape)': 'closeMenu()',
    '(window:resize)': 'onTestimonialsScroll()',
  },
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
    { href: '#resultados', label: 'Antes e depois' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#duvidas', label: 'Dúvidas' },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected readonly ctaStart = whatsappLink(
    'Oi, Leila! Vi seu site e quero começar meu acompanhamento.',
  );
  protected readonly ctaTalk = whatsappLink(
    'Oi, Leila! Quero conversar sobre meu objetivo e saber como funciona o acompanhamento.',
  );

  /**
   * Antes e depois: cada slide do carrossel mostra um aluno.
   * Todos os slides usam o mesmo tamanho de moldura, definido pelas fotos do primeiro slide
   * (que aparecem inteiras). Fotos mais largas são cortadas só nas laterais; `pos` define
   * qual parte da foto fica visível.
   */
  protected readonly results = [
    {
      label: 'Aluna',
      before: { src: 'images/aluna1-antes.jpg', w: 208, h: 530, pos: '50% 50%' },
      after: { src: 'images/aluna1-depois.jpg', w: 201, h: 530, pos: '50% 50%' },
    },
    {
      label: 'Aluno',
      before: { src: 'images/aluno1-antes.jpg', w: 1200, h: 1600, pos: '50% 50%' },
      after: { src: 'images/aluno1-depois.jpg', w: 900, h: 1600, pos: '80% 50%' },
    },
    {
      label: 'Aluno',
      before: { src: 'images/aluno2-antes.jpg', w: 960, h: 1280, pos: '50% 50%' },
      after: { src: 'images/aluno2-depois.jpg', w: 900, h: 1955, pos: '22% 50%' },
    },
  ];

  /** Soma das proporções (largura/altura) do par do primeiro slide: dá o tamanho da moldura. */
  protected readonly frameRatio =
    this.results[0].before.w / this.results[0].before.h +
    this.results[0].after.w / this.results[0].after.h;

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
    'Treinos genéricos, sem considerar seus objetivos e suas necessidades.',
    'Dificuldade em manter uma rotina de exercícios.',
    'Dúvidas sobre a execução dos movimentos e a escolha das cargas.',
    'Falta de orientação para evoluir com segurança e consistência.',
  ];

  protected readonly pillars: { label: string; icon: IconName }[] = [
    { label: 'Planejamento', icon: 'calendar' },
    { label: 'Acompanhamento', icon: 'eye' },
    { label: 'Individualidade', icon: 'target' },
  ];

  protected readonly steps: { title: string; text: string; icon: IconName }[] = [
    {
      title: 'Avaliação inicial',
      text: 'Começamos com uma conversa para entender seus objetivos, sua rotina, seu histórico de treinamento e a estrutura disponível para treinar.',
      icon: 'message',
    },
    {
      title: 'Planejamento personalizado',
      text: 'Elaboro seu treino de acordo com seu nível, suas necessidades e seus objetivos. Nada de fichas genéricas ou treinos prontos.',
      icon: 'clipboard',
    },
    {
      title: 'Seu treino no MFIT',
      text: 'Você recebe seu planejamento pelo aplicativo MFIT, com vídeos demonstrativos dos exercícios, organização da rotina de treinos e registro das cargas para acompanhar sua evolução.',
      icon: 'smartphone',
    },
    {
      title: 'Acompanhamento e evolução',
      text: 'Você conta com meu suporte para tirar dúvidas, receber orientações e compartilhar seus resultados. Realizo ajustes no planejamento conforme sua evolução e suas necessidades.',
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

  /** Prints de conversas no WhatsApp com alunas (recortados, em public/images/depoimentos). */
  protected readonly testimonials = [
    { src: 'images/depoimentos/leila-b.jpg', alt: 'Depoimento da aluna Leila no WhatsApp' },
    { src: 'images/depoimentos/lara-1.jpg', alt: 'Depoimento da aluna Lara no WhatsApp' },
    { src: 'images/depoimentos/julia.jpg', alt: 'Depoimento da aluna Julia no WhatsApp' },
    { src: 'images/depoimentos/suena.jpg', alt: 'Depoimento da aluna Suena no WhatsApp' },
    { src: 'images/depoimentos/giulia-2.jpg', alt: 'Depoimento da aluna Giulia, da consultoria online, no WhatsApp' },
    { src: 'images/depoimentos/aluna-consultoria.jpg', alt: 'Depoimento de aluna da consultoria no WhatsApp' },
    { src: 'images/depoimentos/lara-2.jpg', alt: 'Mensagem da aluna Lara no WhatsApp sobre os treinos' },
  ];

  /** Carrossel de depoimentos: arrasta no dedo (scroll-snap); setas e bolinhas no desktop. */
  private readonly testiTrack = viewChild<ElementRef<HTMLElement>>('testiTrack');
  protected readonly testiIndex = signal(0);
  private readonly testiPages = signal(this.testimonials.length);
  protected readonly testiDots = computed(() => Array.from({ length: this.testiPages() }, (_, i) => i));

  constructor() {
    afterNextRender(() => this.onTestimonialsScroll());
  }

  /** Distância entre o início de um card e o do próximo. */
  private testiStep(el: HTMLElement): number {
    const cards = el.children;
    if (cards.length < 2) return el.clientWidth;
    return (cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft;
  }

  protected onTestimonialsScroll(): void {
    const el = this.testiTrack()?.nativeElement;
    if (!el) return;
    const step = this.testiStep(el);
    const max = el.scrollWidth - el.clientWidth;
    const pages = Math.round(max / step) + 1;
    this.testiPages.set(pages);
    const i = el.scrollLeft >= max - 4 ? pages - 1 : Math.round(el.scrollLeft / step);
    this.testiIndex.set(Math.min(i, pages - 1));
  }

  protected goToTestimonial(index: number): void {
    const el = this.testiTrack()?.nativeElement;
    if (!el) return;
    const pages = this.testiPages();
    const i = (index + pages) % pages;
    el.scrollTo({ left: i * this.testiStep(el), behavior: 'smooth' });
  }

  protected scrollTestimonials(dir: 1 | -1): void {
    this.goToTestimonial(this.testiIndex() + dir);
  }

  protected readonly modes: { label: string; where: string; text: string; icon: IconName }[] = [
    {
      label: 'Presencial',
      where: 'Linhares – ES',
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
      q: 'Preciso ter experiência com musculação?',
      a: 'Não! O acompanhamento é individualizado e o planejamento respeita seu nível de condicionamento, seja você iniciante ou alguém que já treina.',
    },
    {
      q: 'Posso fazer os treinos em casa?',
      a: 'Sim! Os treinos são adaptados à estrutura e aos equipamentos que você tem disponíveis, seja em casa ou na academia.',
    },
    {
      q: 'Como funciona o suporte durante a consultoria online?',
      a: 'Você terá contato direto comigo pelo WhatsApp para tirar dúvidas, receber orientações e compartilhar sua evolução.',
    },
    {
      q: 'Como recebo meus treinos?',
      a: 'Seu planejamento fica disponível no aplicativo MFIT, com vídeos demonstrativos dos exercícios, organização dos treinos e registro de cargas.',
    },
    {
      q: 'Em quanto tempo começo a ver resultados?',
      a: 'Depende do seu ponto de partida e da constância, mas com plano e acompanhamento a evolução aparece.',
    },
  ];
}
