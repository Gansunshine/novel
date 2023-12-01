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
  <div v-else class="my-24">
    <section class="container mx-auto my-10">
      <div class="mb-6 justify-center flex">
        <NuxtLink
          to="/novel/create"
          class="bg-slate-950 text-white rounded-md px-[30px] py-[10px] cursor-pointer hover:bg-slate-900"
          >Tambah Novel</NuxtLink
        >
      </div>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="n in novel" :key="n.id">
          <Card :novel="n" :getNovel="getNovel" />
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.loader {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border: solid 2px transparent;
  border-top-color: gray;
  border-left-color: gray;
  border-bottom-color: #efefef;
  border-right-color: #efefef;
  border-radius: 50%;
  -webkit-animation: loader 400ms linear infinite;
  animation: loader 400ms linear infinite;
}
@keyframes loader {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
