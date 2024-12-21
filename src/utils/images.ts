interface ImageProps {
  src: string;
  alt: string;
  class?: string;
  maxWidth?: string;
}

export function getImageProps({ src, alt, class: className, maxWidth }: ImageProps) {
  return {
    imageProps: {
      src,
      alt,
      class: className,
      loading: "eager" as const,
      decoding: "async" as const,
    },
    containerClass: maxWidth ? `max-w-[${maxWidth}] mx-auto` : undefined
  };
}