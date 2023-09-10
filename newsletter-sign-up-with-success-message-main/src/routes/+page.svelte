<script>
  import illustration from '$lib/assets/images/illustration-sign-up-desktop.svg';
  import check from '$lib/assets/images/icon-list.svg';
</script>

<div class="flex h-screen">
  <div class="m-auto">
    <div class="flex flex-row bg-white rounded-3xl p-4">
      <div class="flex-auto">
        <div class="mx-12 pt-16">
          <h1 class="font-sans text-grey text-5xl font-bold">Stay updated!</h1>
          <p class="pt-4 font-sans text-grey text-[16px]">
            Join 60,000+ product manager receiving monthly <br /> updates on:
          </p>

          <ul class="py-8">
            <li class="pb-2">
              <div class="flex flex-row">
                <img class="pr-2" src={check} alt="check icon" />
                <p class="font-sans text-grey text-[16px]">
                  Product discovery and building what matters
                </p>
              </div>
            </li>
            <li class="pb-2">
              <div class="flex flex-row">
                <img class="pr-2" src={check} alt="check icon" />
                <p class="font-sans text-grey text-[16px]">
                  Measuring to ensure updates are a success
                </p>
              </div>
            </li>
            <li class="pb-2">
              <div class="flex flex-row">
                <img class="pr-2" src={check} alt="check icon" />
                <p class="font-sans text-grey text-[16px]">Add much more</p>
              </div>
            </li>
          </ul>
          <label
            for="email-address"
            class="font-sans text-grey font-semibold text-[12px]"
            >Email address</label
          >
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="mt-2 w-full min-w-0 active:ring-primary-400 rounded-md border-0 bg-white/5 px-3.5 py-3 font-sans shadow-sm ring-1 ring-inset ring-gray-dark focus:ring-gray-light sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />

          <div />
          <button
            class="mt-6 w-full bg-gray-dark hover:bg-primary-400 py-4 px-4 text-white hover:shadow-lg rounded-lg"
            >Subscribe to montly newsletter</button
          >
        </div>
      </div>
      <div class="flex-auto">
        <img src={illustration} alt="illustration-sign-up-desktop.svg" />
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray-dark);
  }
</style>
