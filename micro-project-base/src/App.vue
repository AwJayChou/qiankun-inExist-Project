<template>
  <div style="height: 100%;width: 100%">
    <a-layout id="components-layout-demo-custom-trigger" class="contianer">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1" @click="handleClick('/')">
          <a-icon type="user"/>
          <span>主应用-基座</span>
        </a-menu-item>
        <a-menu-item key="2" @click="handleClick('/vue')">
          <a-icon type="video-camera" />
          <span>微应用-vue</span>
        </a-menu-item>
        <a-menu-item key="3" @click="handleClick('/react')">
          <a-icon type="upload" />
          <span>微应用-react</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
      <!-- 主应用渲染 -->
        <router-view v-show="$route.name"/>
        <!-- 微前端应用挂载 -->
      <section v-show="!$route.name" id="frame"></section>
      </a-layout-content>
    </a-layout>
  </a-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    handleClick(path) {
      this.$router.push(path)
    }
  },
};
</script>
<style>
.contianer {
  height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  height: 100vh !important;
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
