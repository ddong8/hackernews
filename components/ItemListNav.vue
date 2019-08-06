<template>
  <div class="news-list-nav">
    <router-link v-if="page > 1" :to="$i18n.path(`${feed}/${page - 1}`)">
      &lt; {{ $t('pages.prev') }}
    </router-link>
    <a v-else class="disabled">&lt; {{ $t('pages.prev') }}</a>
    <span>{{ page }}/{{ maxPage }}</span>
    <router-link v-if="hasMore" :to="$i18n.path(`${feed}/${page + 1}`)">
      {{ $t('pages.more') }} &gt;
    </router-link>
    <a v-else class="disabled">{{ $t('pages.more') }} &gt;</a>
  </div>
</template>

<script>
export default {
  props: {
    feed: {
      type: String,
      required: true
    },
    page: {
      type: Number,
      required: true
    },
    maxPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    hasMore() {
      return this.page < this.maxPage
    }
  }
}
</script>

<style lang="stylus">
.news-list-nav, .news-list {
  background-color: #fff;
  border-radius: 2px;
}

.news-list-nav {
  padding: 15px 30px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  a {
    margin: 0 1em;
  }

  .disabled {
    opacity: 0.8;
  }
}
</style>
