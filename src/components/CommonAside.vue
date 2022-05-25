<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    active-text-color="#ffd04b"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3>{{ isCollapse ? '后台' : "多云管理系统" }}</h3>

    <el-menu-item
      v-for="item in noChildren"
      :index="item.path"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu
      v-for="item in hasChildren"
      :index="item.path + ''"
      :key="item.path"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="(subItem, subIndex) in item.children"
        :key="subItem.path"
      >
        <el-menu-item :index="subIndex + ''">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>   

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
.el-menu {
  height: 100vh;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>


<script>
export default {
  data() {
    return {
      // menuName: require('../assets/images/user.png'),
      //   isCollapse: false,

      menu: [
        {
          path: "/",
          name: "home",
          icon: "s-home",
          label: "首页",
          url: "/home",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManager/UserManager",
        },
        {
          path: "/mall",
          name: "mall",
          icon: "video-play",
          label: "商品管理",
          url: "MallManager/MallManager",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/other/page1",
              name: "Page1",
              icon: "settings",
              label: "Page1",
              url: "other/Page1",
            },
            {
              path: "/other/page2",
              name: "Page2",
              icon: "settings",
              label: "Page2",
              url: "other/Page2",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      console.log(item);
      this.$router.push({
        name: item.name,
      });
    },
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>