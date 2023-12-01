<template>
  <section>
    <NuxtLink :to="`/novel/${novel.id}`" class="cursor-pointer">
      <img
        :src="`https://thjsevbmeuuyxcwzntbg.supabase.co/storage/v1/object/public/novel/images/${novel.photo}`"
        class="rounded-lg"
      />
    </NuxtLink>
    <div class="py-4">
      <h1 class="font-bold text-[#222] text-[30px]">{{ novel.judul }}</h1>
      <p class="font-semibold text-slate-600 text-[20px]">
        {{ novel.penulis }} • {{ novel.rating }}
      </p>
      <div class="space-x-3 mt-4">
        <button
          class="rounded-lg pt-[20px]"
          style="background-color: red; padding: 8px 20px; color: white"
          type="button"
          @click="deleteNovel(novel.id)"
        >
          Delete
        </button>
        <NuxtLink
          :to="`/novel/edit/${novel.id}`"
          class="rounded-lg pt-[20px]"
          style="background-color: yellow; padding: 8px 20px; color: white"
          >Edit</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { createClient } from "@supabase/supabase-js";
const config = useRuntimeConfig();
const supabase = createClient(config.public.appUrl, config.public.appKey);
const { novel, getNovel } = defineProps(["novel", "getNovel"]);

const deleteNovel = async (id) => {
  if (confirm("Yakin menghapus data novel?")) {
    try {
      await supabase.from("novel").delete().eq("id", id);
      getNovel();
    } catch (e) {
      console.error("Unexpected error:", e.message);
    }
  }
};
</script>
