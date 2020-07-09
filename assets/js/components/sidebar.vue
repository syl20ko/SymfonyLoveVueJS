<template>
    <aside :class="[$style.sidebar, 'col-xs-12', 'col-3']">
        <div class="p-3 mb-5">
            <h5 class="text-center">
                Categories
            </h5>
                <ul class="nav flex-column mb4">
                <li
                    class="nav-item"
                    v-for="(category, index) in categories" 
                    :key="index">
                    <a
                    class="nav-link"
                    :href="category.link"
                >
                    {{ category.name }}</a>
                </li>
                </ul>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            categories: [
                {
                    name: 'chien',
                    link: 'lol',
                },
                {
                    name: 'chat',
                    link: '#',
                },
                {
                    name: 'lapin',
                    link: '#',
                },
            ],
        };
    },
};
</script>

<style lang="scss" module>
@import "~styles/components/light-component";

.sidebar {
  @include light-component;

  ul {
    li a:hover {
      background: $blue-component-link-hover;    }
  }
}
</style>
