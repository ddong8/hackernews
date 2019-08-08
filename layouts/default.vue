<template>
  <div id="app">
    <header class="header">
      <nav class="inner" role="navigation">
        <div class="feed_list_item">
        <router-link to="/" exact>
          <img class="logo" src="~/assets/logo.svg" alt="logo">
        </router-link>
        <router-link v-for="(list, key) in feeds" :key="key" :to="$i18n.path(`${key}`)">
          {{ list.title }}
        </router-link>
        </div>
        <div class="dropdown_bar">
          <nuxt-header-nav-menu-dropdown :dropdownList="langList" :dropdownLabel="$t('lang.' + $store.state.locale)" />
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
        { name: 'en-US', path: '/en-US' + current_path },
        { name: 'zh-CN', path: '/zh-CN' + current_path },
        // { name: 'jp', path: '/jp' + current_path },
        // { name: 'kr', path: '/kr' + current_path },
        // { name: 'fr', path: '/fr' + current_path }
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
  /* 适配iPhone6/7/8 plus */
  @media (max-width: 420px) {
    font-size: 0.9em;
  }
  /* 适配iPhone6/7/8 */
  @media (max-width: 380px) {
    font-size: 0.8em;
  }
  /* 适配iPhone5/SE */
  @media (max-width: 320px) {
    font-size: 0.7em;
  }
}

a {
  color: #2E495E;
  text-decoration: none;
}

.header {
  background-color: #2E495E;
  z-index: 999;
  height: 55px;
  position: fixed;
  width: 100%;
  margin-top:0;

  .inner {
    max-width: 800px;
    box-sizing: border-box;
    margin: 0px auto;
    padding: 15px 5px;
  }

  .feed_list_item{
    height: 24px;
    float: left;
    width: 80%;
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
    width: 20%;
    float: right;
    @media (min-width: 991px) {
      height: 55px;
    }
  }
}

.logo {
  width: 24px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;

  /* 适配iPhone6/7/8 plus */
  @media (max-width: 420px) {
    width: 22px;
    margin-right: 9px;
  }
  /* 适配iPhone6/7/8 */
  @media (max-width: 380px) {
    width: 21px;
    margin-right: 9px;
  }
  /* 适配iPhone5/SE */
  @media (max-width: 320px) {
    width: 20px;
    margin-right: 8px;
  }
}

.view {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding-top: 55px;
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
      margin-right: 0.8em;
    }
  }
}


/* 适配iphone5/SE */
@media (max-width: 320px) {
  .header {
    .inner {
      padding: 15px;
    }

    a {
      margin-right: 0.7em;
    }
  }
}

</style>
