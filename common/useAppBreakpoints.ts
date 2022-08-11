import { useBreakpoints } from "@vueuse/core";
export function useAppBreakpoints() {
  const breakpoints = useBreakpoints({
    mobile: 1200
  });
  return {
    // > 1200
    isDesktop: () => breakpoints.greater("mobile"),
    // < 1200
    isMobile: () => breakpoints.smaller("mobile")
  };
}