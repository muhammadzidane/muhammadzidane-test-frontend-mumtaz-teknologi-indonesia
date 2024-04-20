<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Your Notes</h2>
    <div class="flex flex-col gap-4">
      <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <ul>
          <li>
            <a
              href="#"
              class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <p
                    class="text-sm leading-5 font-medium text-indigo-600 truncate"
                  >
                    Note Title
                  </p>
                  <div class="ml-2 flex-shrink-0 flex">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      New
                    </span>
                  </div>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <p
                      class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0"
                    >
                      Content of the note
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <!-- More notes can be added here -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>
