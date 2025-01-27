const reviews = {
  path: "/",
  redirect: "/reviews",
  component: () => import("@/components/ui/layouts/Layout.vue"),
  meta: {},
  children: [
    {
      path: "/reviews",
      name: "reviews",
      component: () => import("@/components/ui/views/Reviews.vue"),
    },
  ],
};

export default reviews;
