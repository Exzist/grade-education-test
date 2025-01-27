import { computed } from "vue";

export function RatingStars(props: { rating: number }) {
  const fullStars = computed(() => Math.floor(props.rating));

  const calculateStarFill = (starIndex: number) => {
    const fractionalPart = props.rating % 1;
    if (starIndex <= fullStars.value) {
      return 100;
    } else if (starIndex === fullStars.value + 1) {
      return fractionalPart * 100;
    } else {
      return 0;
    }
  };

  return { fullStars, calculateStarFill };
}
