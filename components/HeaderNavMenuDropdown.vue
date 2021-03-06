<template>
  <div class="Dropdown">
    <div class="Dropdown__Title" @click="show = !show" :class="{'Dropdown__Title--mobile': show}">
      {{ dropdownLabel }}
    </div>
    <ul class="Dropdown__List" :class="{ 'Dropdown__List--visible': show }">
      <li class="Dropdown__List__Item" v-for="item in dropdownList" :key="item.name">
        <a v-if="item.blank" class="Dropdown__List__Item__Link" :href="item.path" target="_blank" rel="noopener">
          {{ $t('lang.' + item.name) }}
        </a>
        <a v-else class="Dropdown__List__Item__Link" :href="item.path">
          {{ $t('lang.' + item.name) }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dropdownLabel: {
      type: String,
      required: true
    },
    dropdownList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
.Dropdown {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 40px;
  @media (min-width: 991px) {
    &:hover {
      .Dropdown__List {
        display: block;
      }
    }
  }
  &__Title {
    width: 100%;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-decoration: none;
    letter-spacing: 0.25px;
    font-weight: bold;
    @media (min-width: 991px) {
      height: 24px;
    }
    &:after {
      content: " ";
      width: 0;
      height: 0;
      top: 2px;
      right: -10px;
      position: relative;
      border-right: 6px solid transparent;
      border-top: 6px solid #fff;
      border-left: 6px solid transparent;
    }
    &:hover,
    &:focus {
      color: #41b883;
      &:after {
        border-top: 6px solid #41b883;
      }
    }
    &--mobile {
      color: #41b883;
      &:after {
        border-top: 6px solid #41b883;
      }
      @media (min-width: 991px) {
        color: #35495e;
        &:after {
          border-top: 6px solid #35495e;
        }
      }
    }
  }
  &__List {
    width: auto;
    display: none;
    flex-wrap: wrap;
    position: absolute;
    padding: 0;
    margin-top: 31px;
    list-style: none;
    top: 20%;
    left: -25px;
    right: -25px;

    &::before {
      display: block;
      position: absolute;
      content: "";
      width: 14px;
      height: 14px;
      background: #fff;
      z-index: 2;
      top: -7px;
      border-top: 1px solid #d9d9d9;
      border-right: 1px solid #d9d9d9;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      border-radius: 2px;
      left: 45%;
      /* 适配iPhone5/SE */
      @media (max-width:320px) {
        width: 10px;
        height: 10px;
        top: -5px;
      }
      /* 适配iPhone6/7/8 */
      @media (max-width:380px) {
        width: 12px;
        height: 12px;
        top: -6px;
      }
      /* 适配iPhone6/7/8 plus */
      @media (max-width:420px) {
        width: 13px;
        height: 13px;
        top: -6.5px;
      }
    }

    @media (min-width: 991px) {
      min-width: 100%;
      position: absolute;
      background-color: #2e495e;
      border: 1px solid #dbdfe1;
      border-top: none;
    }
    &--visible {
      display: flex;
      background: #2e495e;
      @media (min-width: 991px) {
        display: none;
      }
    }
    &__Item {
      width: 100%;
      display: flex;
      height: 50px;
      border-top: 1px solid #dbdfe1;
      @media (min-width: 991px) {
        width: auto;
      }
      &__Link {
        width: 100%;
        display: flex;
        color: #fff;
        padding: 12px 0;
        text-decoration: none;
        letter-spacing: 0.25px;
        align-items: center;
        justify-content: center;
        &:hover {
          color: #41b883;
        }
      }
    }
  }
}
</style>
