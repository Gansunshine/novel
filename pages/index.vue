<script setup>
import { createClient } from "@supabase/supabase-js";
const config = useRuntimeConfig();
const supabase = createClient(config.public.appUrl, config.public.appKey);
const novel = ref([]);
const loading = ref(true);
const getNovel = async () => {
  try {
    const { data } = await supabase.from("novel").select();
    novel.value = data;
  } catch (e) {
    console.error(e.message);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  await getNovel();
});
</script>
<template>
  <div v-if="loading">
    <div class="loader"></div>
  </div>
  <div v-else>
    <div style="margin-top: 5rem; height: 100%; background: #fff">
      <div class="flex flex-col items-center">
        <div class="flex w-full justify-center">
          <div class="w-full">
            <div
              class="swiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
            >
              <div class="swiper-wrapper" style="transition-duration: 0ms">
                <div
                  class="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index="4"
                  style="
                    width: 100%;
                    opacity: 1;
                    transform: translate3d(0px, 0px, 0px);
                    transition-duration: 0ms;
                  "
                >
                  <div
                    class="relative flex flex-grow-0 flex-col md:flex-row max-h-[800px] md:max-h-[600px] w-full flex-grow-0 flex-row items-center justify-center py-20 transition-all duration-1000 ease-in-out"
                    style="
                      background: linear-gradient(
                        rgb(0, 0, 0) 0%,
                        rgb(192, 192, 192) 18.75%
                      );
                    "
                  >
                    <div
                      class="flex h-[800px] w-[165px] items-center justify-center md:h-[100%] lg:h-[500px] lg:w-[330px]"
                    >
                      <div class="relative">
                        <img
                          src="https://api.gooddreamer.id//storage/novels/1667044288_gooddreamer_WhatsApp-Image-2022-10-29-at-9.05.48-AM.jpeg"
                          alt="Pengantin Yang Ditinggalkan"
                          class="rounded-lg border border-black/5 shadow-lg shadow-white/5 max-h-[333px] max-w-[236px] lg:max-h-[500px] lg:max-w-[330px]"
                        />
                      </div>
                    </div>
                    <div
                      class="ml-0 mt-2 flex flex-col items-center justify-center text-center md:ml-12 md:mt-0 md:items-start md:text-left text-white"
                    >
                      <h5 class="mb-2 w-auto text-2xl font-bold md:w-full">
                        Pengantin Yang Ditinggalkan
                      </h5>
                      <p class="mb-3 text-sm">
                        <span class="text-white">DesyArisusanty</span> • 608x
                        Dibaca
                      </p>
                      <div
                        class="mb-3 flex w-fit flex-row items-center rounded-lg p-2 bg-white"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          color="#222"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          style="color: rgb(34, 34, 34)"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
                          ></path></svg
                        ><span
                          class="ml-2 text-xs font-bold tracking-wider text-[#222]"
                          >Bahasa Indonesia</span
                        >
                      </div>
                      <span class="mb-3 text-sm text-white">60 Bab</span>
                      <div class="block">
                        <p
                          class="mx-auto mb-3 w-[75%] text-center text-sm line-clamp-6 md:mx-0 md:w-[420px] md:text-left text-white"
                        >
                          'Hei, bodoh! Aku meninggalkanmu.' Seharusnya Alvero
                          meninggalkan pesan seperti itu. Sehingga, Sandrina
                          tidak perlu merasa khawatir kalau pria itu tak ingin
                          datang. Konyol memang, setelah dia mengetahui kalau
                          pria itu hanya meninggalkannya. Entahlah. Lebih sakit
                          mana, ditinggal mati di altar atau ditinggalkan begitu
                          saja oleh seseorang yang kau percayakan seluruh hatimu
                          padanya. * "Ya Tuhan, kenapa nasibku seperti ini?"
                          keluh Alvero. Apakah ini karma karena dia meninggalkan
                          Sandrina di altar? Namun, kalau memang begitu, kenapa
                          bisa begitu cepat? Tidak bisakah ditunda sepuluh atau
                          dua puluh tahun lagi. Bagaimanakah kisah cinta Alvero
                          dan Sandrina yang penuh dengan liku dan misteri.
                          Akankah berakhir bahagia?
                        </p>
                      </div>
                      <div class="mt-8 flex flex-row">
                        <a
                          href="#novel"
                          class="mr-0 rounded-md p-4 md:mr-3 bg-[#F2994A] text-white"
                        >
                          Baca Sekarang
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-prev"
                  data-swiper-slide-index="0"
                  style="
                    width: 1440px;
                    opacity: 1;
                    transform: translate3d(-1440px, 0px, 0px);
                    transition-duration: 0ms;
                  "
                >
                  <div
                    class="relative flex flex-grow-0 flex-col md:flex-row max-h-[800px] md:max-h-[600px] w-full flex-grow-0 flex-row items-center justify-center py-20 transition-all duration-1000 ease-in-out"
                    style="
                      background: linear-gradient(
                        rgb(0, 0, 0) 0%,
                        rgb(255, 182, 193) 18.75%
                      );
                    "
                  >
                    <div
                      class="flex h-[800px] w-[165px] items-center justify-center md:h-[100%] lg:h-[500px] lg:w-[330px]"
                    >
                      <div class="relative">
                        <img
                          src="https://api.gooddreamer.id//storage/novels/1666759972_gooddreamer_IMG-20221024-WA0044.jpg"
                          alt="Halo Mantan!"
                          class="rounded-lg border border-black/5 shadow-lg shadow-white/5 max-h-[333px] max-w-[236px] lg:max-h-[500px] lg:max-w-[330px]"
                        />
                      </div>
                    </div>
                    <div
                      class="ml-0 mt-2 flex flex-col items-center justify-center text-center md:ml-12 md:mt-0 md:items-start md:text-left text-white"
                    >
                      <h5 class="mb-2 w-auto text-2xl font-bold md:w-full">
                        Halo Mantan!
                      </h5>
                      <p class="mb-3 text-sm">
                        <span class="text-white">Tita Rosianti</span> • 445x
                        Dibaca
                      </p>
                      <div
                        class="mb-3 flex w-fit flex-row items-center rounded-lg p-2 bg-white"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          color="#222"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          style="color: rgb(34, 34, 34)"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
                          ></path></svg
                        ><span
                          class="ml-2 text-xs font-bold tracking-wider text-[#222]"
                          >Bahasa Indonesia</span
                        >
                      </div>
                      <span class="mb-3 text-sm text-white">60 Bab</span>
                      <div class="block">
                        <p
                          class="mx-auto mb-3 w-[75%] text-center text-sm line-clamp-6 md:mx-0 md:w-[420px] md:text-left text-white"
                        >
                          Menghancurkan hidup Jagapati Adrawa adalah tujuan
                          utama Hala Mayna selama tujuh belas tahun terakhir.
                          Setelah dia hampir mati, putranya direbut paksa, kini
                          berbekal keberanian dan balas dendam yang tidak lagi
                          bisa dibendung Hala mulai melancarkan serangannya.
                          Menjadi penyusup di kehidupan Jagapati, merupakan cara
                          termudah untuk mengecoh mantan suaminya itu. Apa lagi
                          yang tidak akan membuat curiga, jika Hala berperan
                          sebagai pengasuh dari anak-anak Jagapati?
                        </p>
                      </div>
                      <div class="mt-8 flex flex-row">
                        <a href="/novel_romantis/halo-mantan-FTe"
                          ><button
                            class="mr-0 rounded-md p-4 md:mr-3 bg-[#F2994A] text-white"
                          >
                            Baca Sekarang
                          </button></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-visible swiper-slide-active"
                  data-swiper-slide-index="1"
                  style="
                    width: 1440px;
                    opacity: 1;
                    transform: translate3d(-2880px, 0px, 0px);
                    transition-duration: 0ms;
                  "
                >
                  <div
                    class="relative flex flex-grow-0 flex-col md:flex-row max-h-[800px] md:max-h-[600px] w-full flex-grow-0 flex-row items-center justify-center py-20 transition-all duration-1000 ease-in-out"
                    style="
                      background: linear-gradient(
                        white,
                        rgb(20, 173, 220) 18.75%
                      );
                    "
                  >
                    <div
                      class="flex h-[800px] w-[165px] items-center justify-center md:h-[100%] lg:h-[500px] lg:w-[330px]"
                    >
                      <div class="relative">
                        <img
                          src="img/novel.webp"
                          alt="Truth or Dare?"
                          class="rounded-lg border border-black/5 shadow-lg shadow-white/5 max-h-[333px] max-w-[236px] lg:max-h-[500px] lg:max-w-[330px]"
                        />
                      </div>
                    </div>
                    <div
                      class="ml-0 mt-2 flex flex-col items-center justify-center text-center md:ml-12 md:mt-0 md:items-start md:text-left text-white"
                    >
                      <h5 class="mb-2 w-auto text-2xl font-bold md:w-full">
                        WELCOME TO DUNIA NOVEL
                      </h5>
                      <div class="block">
                        <p
                          class="mx-auto mb-3 w-[75%] text-center text-sm line-clamp-6 md:mx-0 md:w-[420px] md:text-left text-white"
                        >
                          Selamat datang di DUNIA NOVEL - Dunia Penuh Cerita!
                          Jelajahi keindahan kata-kata dan hadirkan imajinasi
                          kehidupan melalui ribuan cerita yang menunggu untuk
                          ditemukan di DUNIA NOVEL. Kami adalah rumah bagi
                          penulis dan pembaca, tempat di mana setiap kata
                          memiliki kekuatan untuk menciptakan dunia baru..
                        </p>
                      </div>
                      <div class="mt-8 flex flex-row">
                        <a href="/novel_horor/truth-or-dare-JHV"
                          ><a
                            href="#novel"
                            class="mr-0 rounded-md p-4 md:mr-3 bg-[#F2994A] text-white"
                          >
                            Baca Sekarang
                          </a></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex w-full max-w-7xl flex-col items-center px-4 py-10 md:px-20"
          id="novel"
        >
          <div
            class="mb-10 flex w-full max-w-7xl flex-row items-center justify-between"
          >
            <div class="flex flex-row justify-center">
              <h1 role="title" class="mr-2 text-2xl font-bold capitalize">
                Novel Terbaik
              </h1>
            </div>
          </div>
          <div class="flex w-full justify-start gap-8 overflow-x-auto">
            <NuxtLink :to="`/novel/${n.id}`" v-for="n in novel" :key="n.id"
              ><div class="flex w-[200px] flex-col">
                <div class="relative">
                  <img
                    :src="`https://thjsevbmeuuyxcwzntbg.supabase.co/storage/v1/object/public/novel/images/${n.photo}`"
                    alt="novel"
                    class="h-[279px] w-[200px] rounded-lg border border-black/5 object-cover md:h-[314px]"
                  />
                </div>
                <p class="mt-5 text-xl font-bold text-[#222]">
                  {{ n.judul }}
                </p>
                <p class="text-sm text-[#222]">
                  by
                  <NuxtLink
                    ><span class="text-orange">{{ n.penulis }}</span></NuxtLink
                  >
                </p>
              </div></NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
