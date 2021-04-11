<script lang="ts">
  import Tailwind from './Tailwind.svelte'

  let countDown = 60;
  let remaining = null; // null is no timer set, 0 is timer finished
  let runningInterval = null;

  function resumeTimer() {
    runningInterval = setInterval(decreaseTimer, 1000);
  }

  function pauseTimer() {
    clearInterval(runningInterval);
    runningInterval = null;
  }

  function startTimer() {
    remaining = countDown;
    resumeTimer();
  }

  function decreaseTimer() {
    remaining -= 1;

    if (remaining <= 0) {
      remaining = 0;
      pauseTimer();
    }
  }

  function resetTimer() {
    pauseTimer();
    remaining = null;
  }
</script>

<Tailwind />

<main class="h-screen text-3xl bg-blue-200">
  <div class="h-1/2 flex flex-col justify-center items-center space-y-6">
    {#if remaining === null}
    <label for="countdown">Countdown:</label>
    <input id="countdown" type="number" class="w-32" bind:value={countDown}>

    {:else if remaining > 0}
    <div class="text-7xl font-bold">
      {remaining}
    </div>
    <div>
      Minutes Left
    </div>

    {:else}
    <div>Timer Finished!</div>
    {/if}
  </div>

  <div class="h-1/2 flex flex-col justify-center items-center space-y-6">
    {#if remaining === null}
    <button on:click={startTimer}>Start</button>

    {:else if remaining > 0}

      {#if runningInterval !== null}
      <button on:click={pauseTimer}>Pause</button>
      {:else}
      <button on:click={resumeTimer}>Resume</button>
      {/if}
    <button on:click={resetTimer}>Stop</button>

    {:else}
    <button on:click={resetTimer}>Reset</button>
    {/if}
  </div>
</main>
