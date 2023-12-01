<template>
  <nav
    class="fixed right-0 left-0 top-0 z-50 bg-white"
    data-headlessui-state=""
  >
    <div class="mx-auto py-1 shadow-md bg-white text-black">
      <div
        class="relative mx-0 flex h-16 items-center justify-between md:mx-20"
      >
        <div class="relative flex flex-1 items-center justify-between p-2">
          <div class="z-50 cursor-pointer pt-2 w-auto transition-all">
            <img src="img/agan.png" width="220" height="35" />
          </div>
          <div class="hidden lg:block">
            <div role="list" class="flex space-x-4">
              <NuxtLink to="/">
                <div
                  class="cursor-pointer px-4 py-2 text-sm rounded-2xl hover:bg-neutral-100 hover:text-black"
                  aria-current="page"
                >
                  Beranda
                </div>
              </NuxtLink>
              <NuxtLink to="/novel">
                <div
                  class="cursor-pointer px-4 py-2 text-sm rounded-2xl font-medium hover:bg-neutral-100 hover:text-black"
                >
                  Tambah Novel
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class="flex items-center justify-center lg:hidden">
            <div class="hidden md:block md:w-[250px]">
              <label
                for="search_box"
                class="relative block w-full max-w-7xl text-gray-400 focus-within:text-gray-600"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  class="pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 transform"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <form>
                  <input
                    role="input"
                    name="search"
                    autocomplete="off"
                    placeholder="Cari novel kesukaanmu"
                    class="placeholder:none w-full rounded-full border-2 border py-1 pr-1 pl-6 hover:placeholder:opacity-0 focus:placeholder:opacity-0 border-white bg-black text-white placeholder:text-white focus:border-white placeholder:mr-10 placeholder:text-left placeholder:text-sm placeholder:italic"
                    id="search_box"
                    value=""
                  /></form
              ></label>
            </div>
            <div class="absolute left-0 block w-[85%] md:hidden">
              <label
                for="search_box"
                class="relative mx-2 block w-full max-w-7xl text-gray-400 focus-within:text-gray-600"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  class="absolute right-3 top-1/2 mr-3 h-5 w-5 -translate-y-1/2 transform cursor-pointer transition-all delay-100"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <form>
                  <input
                    autocomplete="off"
                    placeholder="Cari novel kesukaanmu"
                    class="invisible placeholder:none w-full rounded-full py-3 pr-1 pl-6 transition-all border-white bg-black text-white placeholder:text-white focus:border-white placeholder:mr-10 placeholder:text-left placeholder:text-sm placeholder:italic"
                    id="search_box_mobile"
                    value=""
                  /></form
              ></label>
            </div>
            <div class="z-50 mt-2 lg:hidden">
              <button
                class="text-gray-400"
                id="headlessui-disclosure-button-:Rmlm:"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <span class="sr-only">Open main menu</span>
                <div
                  class="hamburger-react"
                  aria-expanded="false"
                  role="button"
                  style="
                    cursor: pointer;
                    height: 48px;
                    position: relative;
                    transition: 0.4s cubic-bezier(0, 0, 0, 1);
                    user-select: none;
                    width: 48px;
                    outline: none;
                  "
                  tabindex="0"
                >
                  <div
                    style="
                      transition: 0.2s cubic-bezier(0, 0, 0, 1) 0.2s;
                      transform: none;
                    "
                  >
                    <div
                      style="
                        background: currentColor;
                        height: 2px;
                        left: 14px;
                        position: absolute;
                        width: 20px;
                        top: 17px;
                        transition: 0.2s cubic-bezier(0, 0, 0, 1) 0s;
                        transform: none;
                      "
                    ></div>
                  </div>
                  <div
                    style="
                      transition: 0.2s cubic-bezier(0, 0, 0, 1);
                      opacity: 1;
                    "
                  >
                    <div
                      style="
                        background: currentColor;
                        height: 2px;
                        left: 14px;
                        position: absolute;
                        width: 20px;
                        top: 23px;
                        transition: 0.2s cubic-bezier(0, 0, 0, 1);
                      "
                    ></div>
                  </div>
                  <div
                    style="
                      transition: 0.2s cubic-bezier(0, 0, 0, 1) 0.2s;
                      transform: none;
                    "
                  >
                    <div
                      style="
                        background: currentColor;
                        height: 2px;
                        left: 14px;
                        position: absolute;
                        width: 20px;
                        top: 29px;
                        transition: 0.2s cubic-bezier(0, 0, 0, 1) 0s;
                        transform: none;
                      "
                    ></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
