<template>
  <div class="my-24 container mx-auto py-10 px-40">
    <div class="shadow-md p-10 rounded-3xl">
      <div class="flex gap-5">
        <img
          :src="`https://thjsevbmeuuyxcwzntbg.supabase.co/storage/v1/object/public/novel/images/${novel.photo}`"
          style="width: 250px; height: 400px"
          class="rounded-lg"
        />
        <div>
          <h1 class="font-bold text-[#222] text-[30px]">
            {{ novel.judul }}
          </h1>
          <h1 class="font-bold text-[#222] text-[30px]">By</h1>
          <h1 class="font-bold text-[#222] text-[30px]">
            {{ novel.penulis }}
          </h1>
          <div class="mt-5">
            <p class="font-semibold">Sinopsis</p>
            <p class="text-slate-500">{{ novel.sinopsis }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="shadow-md p-10 rounded-3xl mt-20">
      <h1 class="font-bold text-[#222] text-[20px]">Alur Cerita</h1>
      <p class="mt-3 text-slate-600">{{ novel.alur }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();
const supabase = createClient(config.public.appUrl, config.public.appKey);
const novel = ref({});

const getNovelById = async (novelId) => {
  try {
    const { data, error } = await supabase
      .from("novel")
      .select()
      .eq("id", novelId);
    if (error) {
      console.error("Error fetching novel:", error.message);
    } else {
      novel.value = data[0];
    }
  } catch (error) {
    console.error("Error fetching novel:", error.message);
  }
};

const route = useRoute();

onMounted(() => {
  const novelId = route.params.id; // Fetch novel ID from route parameters
  getNovelById(novelId);
});
</script>
