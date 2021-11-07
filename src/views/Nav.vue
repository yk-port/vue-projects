<template>
  <ul class="gnav1">
    <li v-for="list1 in gnav1" :key="list1.id" class="gnav1__list">
      <div class="gnav1__item">{{ list1.item }}</div>
      <template v-for="list2 in gnav2" :key="list2.navId">
        <ul v-if="list1.id === list2.navId" class="gnav2">
          <li
            v-for="listItem2 in list2.items"
            :key="listItem2.id"
            class="gnav2__list"
          >
            <div class="gnav2__item">
              {{ listItem2.item }}
            </div>
            <template v-for="list3 in gnav3" :key="list3.navId">
              <ul v-if="listItem2.id === list3.navId" class="gnav3">
                <li
                  v-for="listItem3 in list3.items"
                  :key="listItem3.id"
                  class="gnav3__list"
                >
                  <div class="gnav3__item">
                    {{ listItem3.item }}
                  </div>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </template>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const gnav1 = reactive([
      { id: 1, item: "トップ" },
      { id: 2, item: "カテゴリー" },
      { id: 3, item: "会社案内" },
    ]);
    const gnav2 = reactive([
      {
        navId: 2,
        items: [
          { id: 20, item: "レストラン" },
          { id: 21, item: "スポーツ" },
          { id: 22, item: "旅行" },
        ],
      },
      {
        navId: 3,
        items: [
          { id: 30, item: "事業内容" },
          { id: 31, item: "メンバー" },
          { id: 32, item: "所在地" },
        ],
      },
    ]);
    const gnav3 = reactive([
      {
        navId: 20,
        items: [
          { id: 200, item: "焼肉" },
          { id: 201, item: "日本食" },
          { id: 202, item: "焼き鳥" },
        ],
      },
      {
        navId: 21,
        items: [
          { id: 220, item: "野球" },
          { id: 221, item: "サッカー" },
          { id: 222, item: "ラグビー" },
        ],
      },
      {
        navId: 22,
        items: [
          { id: 220, item: "温泉地" },
          { id: 221, item: "アジア" },
          { id: 222, item: "ハワイ" },
        ],
      },
    ]);
    return {
      gnav1,
      gnav2,
      gnav3,
    };
  },
});
</script>

<style lang="scss" scoped>
.gnav1 {
  display: flex;
  justify-content: center;
  &__item {
    padding: 16px 32px;
    max-width: 160px;
    background: #42b983;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
  }
}
</style>
