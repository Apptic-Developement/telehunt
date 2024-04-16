import { useEffect, useState } from 'react';

// const isDesktopOrLaptop = useMediaQuery({
//     query: '(min-width: 1224px)'
//   })
//   const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
//   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
//   const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
//   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
interface Sizes {
  isMobile: boolean;
  isDesktop: boolean;
}
export function useScreenSize(): Sizes {
  const [sizes, setSizes] = useState<Sizes>({
    isMobile: false,
    isDesktop: false,
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSizes({
        isMobile: window.innerWidth < 680,
        isDesktop: window.innerWidth > 768,
      });
    });

    setSizes({
      isMobile: window.innerWidth < 680,
      isDesktop: window.innerWidth > 768,
    });

    return () => window.removeEventListener('resize', () => {});
  }, []);
  return sizes;
}
