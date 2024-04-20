<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <!-- Back Button -->
    <a href="#" class="text-indigo-600 hover:underline mb-4 block"
      >&larr; Back to Notes</a
    >

    <!-- Note Detail -->
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Note Title</h3>
        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          Note Subtitle
        </p>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm leading-5 font-medium text-gray-500">
              Note Content
            </dt>
            <dd class="mt-1 text-sm leading-5 text-gray-900 sm:col-span-2">
              Content of the note Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Officiis cumque assumenda at natus doloribus
              voluptas voluptatum, tempora suscipit distinctio? Quibusdam
              eligendi neque facere nobis fugiat voluptas. Veniam quae itaque
              eveniet.
            </dd>
          </div>
          <!-- Add more details here -->
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup></script>
