import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="grid items-center justify-center grid-cols-1 px-4 py-24 text-center lg:grid-cols-3">
      <div class="col-auto lg:col-start-2">
        <h1 class="mb-2 text-indigo-600 font-bold text-primary text-3xl md:text-4xl lg:text-5xl">
          Tech Tool Box 
        </h1>
        <p class="pb-10 text-white md:leading-tight md:mb-6 text-sm md:text-xl">
          offrant une agrégation d'IA, de sites web et de logiciels essentiels
        </p>
        <button #ctaButton class="relative w-64 h-16 bg-indigo-600 text-white text-lg font-bold rounded-full overflow-hidden">
          <span class="relative z-10">Lancez-vous dès maintenant</span>
          <div class="ripple-container absolute inset-0"></div>
        </button>
      </div>
    </section>
  `,
  styles: [`
    .ripple-container {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      background-color: rgba(255, 255, 255, 0.7);
    }

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    button {
      transition: all 0.3s ease;
    }

    button:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 20px rgba(79, 70, 229, 0.5);
    }

    button:active {
      transform: translateY(0);
    }
  `]
})
export class CtaComponent implements AfterViewInit {
  @ViewChild('ctaButton') ctaButton!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.setupRippleEffect();
  }

  private setupRippleEffect() {
    const button = this.ctaButton.nativeElement;
    const rippleContainer = button.querySelector('.ripple-container');

    this.renderer.listen(button, 'click', (event: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const ripple = this.renderer.createElement('div');
      this.renderer.addClass(ripple, 'ripple');
      this.renderer.setStyle(ripple, 'left', `${x}px`);
      this.renderer.setStyle(ripple, 'top', `${y}px`);

      this.renderer.appendChild(rippleContainer, ripple);

      setTimeout(() => {
        this.renderer.removeChild(rippleContainer, ripple);
      }, 1000);
    });
  }
}