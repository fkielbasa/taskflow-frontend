export const scrollToSection = (id: string)  => {
    const element: HTMLElement | null = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      window.scrollTo({
        top: rect.top - 50 + window.scrollY,
        left: rect.left + window.scrollX,
        behavior: 'smooth'
      });
    }
  }