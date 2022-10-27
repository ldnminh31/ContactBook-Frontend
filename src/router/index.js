import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  // 404 err page
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
  // contact edit
  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: () => import("@/views/ContactEdit.vue"),
    props: (route) => ({ contactId: parseInt(route.params.id) }),
  },
  // contact add
  {
    path: "/add-new-contact",
    name: "contact.add",
    component: () => import("@/views/ContactAdd.vue"),
    // props: (route) => ({ contactId: parseInt(route.params.id) }),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
