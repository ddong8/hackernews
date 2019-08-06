<template>
  <li class="news-item">
    <span class="score">{{ item.points }}</span>
    <span class="title">
      <template v-if="isAbsolute(item.url)">
        <a :href="item.url" target="_blank" rel="noopener">{{ item.title }}</a>
        <span class="host"> ({{ item.url | host }})</span>
      </template>
      <template v-else>
        <router-link :to="$i18n.path('item/' + item.id)">{{ item.title }}</router-link>
      </template>
    </span>
    <br>
    <span class="meta">
      <span v-if="item.type !== 'job'" class="by">
        <router-link :to="$i18n.path('user/' + item.user)">{{ item.user }}</router-link>
        {{ $t('article_action.by') }}
      </span>
      <span class="time">
        {{ item.time | timeAgo }} {{ $t('article_action.ago') }}
      </span>
      <span v-if="item.type !== 'job'" class="comments-link">
        |
        <router-link :to="$i18n.path('item/' + item.id)">{{ item.comments_count }} {{ $t('article_action.comments') }}</router-link>
      </span>
    </span>
  </li>
</template>

<script>
import { timeAgo } from '~/plugins/filters'

export default {
  name: 'NewsItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    isAbsolute(url) {
      return /^https?:\/\//.test(url)
    }
  }
}
</script>

<style lang="stylus">
.news-item {
  background-color: #fff;
  padding: 20px 30px 20px 80px;
  border-bottom: 1px solid #eee;
  position: relative;
  line-height: 20px;

  .score {
    color: #2e495e;
    font-size: 1.1em;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 0;
    width: 80px;
    text-align: center;
    margin-top: -10px;
  }

  .meta, .host {
    font-size: 0.85em;
    color: #595959;

    a {
      color: #595959;
      text-decoration: underline;

      &:hover {
        color: #00C48D;
      }
    }
  }
}
</style>
