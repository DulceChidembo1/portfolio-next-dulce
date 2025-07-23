// Animações de entrada lateral
export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 }
};

export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 }
};
// Exportando fadeInDown e cardHover para uso externo
export const fadeInDown = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 }
};

export const cardHover = {
  whileHover: { scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }
};
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const cardHoverSmall = {
  whileHover: { scale: 1.03, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }
};
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 }
};
