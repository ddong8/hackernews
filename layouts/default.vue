<template>
  <div id="app">
    <header class="header">
      <nav class="inner" role="navigation">
        <router-link to="/" exact>
          <img class="logo" src="~/assets/logo.svg" alt="logo">
        </router-link>
        <router-link v-for="(list, key) in feeds" :key="key" :to="$i18n.path(`${key}`)">
          {{ list.title }}
        </router-link>
        <div class="dropdown_bar">
          <nuxt-header-nav-menu-dropdown :dropdownList="langList" :dropdownLabel="$store.state.locale.toUpperCase()" />
        </div>
      </nav>
    </header>
    <nuxt nuxt-child-key="none" role="main" />
  </div>
</template>

<script>
import { feeds } from '~/common/api'
import NuxtHeaderNavMenuDropdown from '~/components/HeaderNavMenuDropdown.vue'

export default {
  head() {
    const host = process.server
      ? this.$ssrContext.req.headers.host
      : window.location.host

    return {
      link: [
        // We use $route.path since we don't use query parameters
        { rel: 'canonical', href: `https://${host}${this.$route.path}` }
      ]
    }
  },
  components: {
    NuxtHeaderNavMenuDropdown
  },
  computed: {
    feeds() {
      for (let i = 0; i < Object.keys(feeds).length; i++) {
        let key = Object.keys(feeds)[i]
        feeds[key]['title'] = this.$i18n.t('feeds.' + key)
      }
      return feeds
    },
    langList() {
      let current_path = this.$route.fullPath.replace('/'+ this.$i18n.locale, '')
      return [
        { name: 'English', path: '/en' + current_path },
        { name: '简体中文', path: '/zh-CN' + current_path },
        { name: '日本語', path: '/jp' + current_path },
        { name: '한국어', path: '/kr' + current_path },
        { name: 'Français', path: '/fr' + current_path }
      ]
    }
  }
}
</script>

<style lang="stylus">
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  background-color: lighten(#eceef1, 30%);
  margin: 0;
  padding: 0;
  color: #2E495E;
  overflow-y: scroll;
}

a {
  color: #2E495E;
  text-decoration: none;
}

.header {
  background-color: #2E495E;
  z-index: 999;
  height: 55px;

  .inner {
    max-width: 800px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 15px 5px;
    display: block;
    position: fixed;
    z-index: 995;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    @media (min-width: 991px) {
      display: flex;
      flex: 1;
      top: 0;
      flex-wrap: nowrap;
      overflow-y: visible;
      position: relative;
    }
  }

  a {
    color: #fff;
    line-height: 24px;
    transition: color 0.15s ease;
    display: inline-block;
    vertical-align: middle;
    font-weight: 300;
    letter-spacing: 0.075em;
    margin-right: 1.8em;

    &:hover {
      color: #fff;
    }

    &.router-link-active, &.nuxt-link-active {
      color: #fff;
      font-weight: 600;
    }

    &:nth-child(6) {
      margin-right: 0;
    }
  }

  .dropdown_bar {
    font-size: 0.9em;
    display: flex;
    float: right;
    margin-left 220px;
    @media (min-width: 991px) {
      width: 80px;
      height: 79px;
    }
  }
}

.logo {
  width: 24px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
}

.view {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.appear-active {
  transition: opacity 0.4s ease;
}

.page-enter-active, .page-leave-active {
  transition: all 0.2s ease;
}

.appear, .page-enter, .page-leave-active {
  opacity: 0;
}

@media (max-width: 860px) {
  .header .inner {
    padding: 15px 30px;
  }
}

@media (max-width: 600px) {
  .header {
    .inner {
      padding: 15px;
    }

    a {
      margin-right: 1em;
    }

    .github {
      display: none;
    }
  }
}
</style>
