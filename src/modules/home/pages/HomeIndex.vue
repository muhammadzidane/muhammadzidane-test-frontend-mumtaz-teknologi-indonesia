<script setup></script>

<template>
  <div class="flex-1 d-flex justify-center">
    <div class="max-w-3xl mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-center mb-8">Note Taking App</h1>

      <!-- Form to add a new note -->
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Title
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter title"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="content"
          >
            Content
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            placeholder="Enter content"
          ></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add Note
          </button>
        </div>
      </form>

      <!-- List of existing notes -->
      <div>
        <h2 class="text-xl font-bold mb-4">Your Notes</h2>
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
  </div>
</template>

<script setup></script>
