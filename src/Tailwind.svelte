<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
      input {
          @apply border-2 border-blue-500 rounded px-1 py-0.5;
      }

      button {
          @apply px-3 py-2 rounded bg-blue-500 text-white font-bold;
      }
  }
</style>