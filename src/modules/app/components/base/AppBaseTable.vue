<template>
  =
  <div>
    <div
      class="bg-white h-[69px] leading-[69px] font-bold text-[17px] rounded-t-lg pl-4"
    >
      {{ title }}
    </div>
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            v-for="(itemHeader, headerIndex) in headers"
            :key="headerIndex"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ itemHeader.name }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr
          v-for="itemData in data"
          :key="itemData.id"
          :class="
            selectedData.some((data) => data === itemData.id)
              ? 'bg-primary'
              : ''
          "
        >
          <td
            v-for="(itemHeader, headerIndex) in headers.filter(
              (header) => header.key !== 'action',
            )"
            :key="headerIndex"
            class="px-6 py-4 whitespace-nowrap"
          >
            {{
              itemHeader.value
                ? itemHeader.value(itemData[itemHeader.key])
                : itemData[itemHeader.key]
            }}
          </td>
          <td>
            <div class="flex gap-2">
              <AppBaseButton
                v-if="onSelect"
                @click="onSelect(itemData.id)"
                variant="gray-4"
                type="outline"
                size="small"
                >Select</AppBaseButton
              >
              <AppBaseButton
                v-if="onDetail"
                @click="onDetail(itemData.id)"
                variant="gray-4"
                type="outline"
                size="small"
                >View Detail</AppBaseButton
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="loading" class="flex justify-center mt-8">
      <Icon icon="line-md:loading-loop" />
    </div>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  selectedData: {
    type: Array,
    default: [],
  },
  headers: {
    type: Array,
    default: [],
  },
  data: {
    type: Array,
    default: [],
  },
  onSelect: {
    type: Function,
    default: null,
  },
  onDetail: {
    type: Function,
    default: null,
  },
});
</script>

<style lang="scss" scoped></style>
