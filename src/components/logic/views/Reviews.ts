import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export function Reviews() {
  const store = useStore();

  const reviews = computed(() => store.state.reviews.reviews);

  onMounted(() => {
    store.dispatch("reviews/fetchReviews");
  });

  return { reviews };
}
