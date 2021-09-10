<template>
  <div class="home">
    router/home
    <button @click="handleClick">子应用</button>
  </div>

</template>

<script>
import ACTION from '../actions'
  export default {
    name: 'home',
    components: {
    },
    data() {
      return {
        dialogVisible: false,
      };
    },
    mounted() {
      console.log('mounted ==>', ACTION)
      ACTION.actions.onGlobalStateChange(state => {
        console.log('子应用触发onglobalStateChange ==>', state)
      })
    },
    methods: {
      handleClick() {
        console.log(' vue - clik ', ACTION)
        ACTION.actions.setGlobalState({ child: 'vue'})
      }
    },
  };
</script>
