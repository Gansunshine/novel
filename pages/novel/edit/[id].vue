<template>
  <section class="container mx-auto mt-24 mb-10">
    <h1 class="font-bold text-center text-[24px]">Update Novel Baru</h1>
    <form @submit.prevent="updateNovel">
      <div class="space-y-12">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Judul</label
            >
            <div class="mt-2">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-600 sm:max-w-md"
              >
                <input
                  type="text"
                  v-model="novel.judul"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Penulis</label
            >
            <div class="mt-2">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-600 sm:max-w-md"
              >
                <input
                  type="text"
                  v-model="novel.penulis"
                  class="block w-full flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Rating</label
            >
            <div class="mt-2">
              <div
                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-600 sm:max-w-md"
              >
                <input
                  type="number"
                  v-model="novel.rating"
                  class="block w-full flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div class="col-span-full">
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Sinopsis</label
            >
            <div class="mt-2">
              <textarea
                v-model="novel.sinopsis"
                rows="3"
                class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div class="col-span-full">
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Alur Cerita</label
            >
            <div class="mt-2">
              <textarea
                v-model="novel.alur"
                rows="3"
                class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Photo</label
            >
            <div class="mt-2">
              <label class="block">
                <span class="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  @change="handleFileChange"
                  class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center">
        <button
          type="submit"
          class="text-white px-[20px] py-[10px] rounded-md"
          style="background-color: rgb(83, 211, 45)"
        >
          Update
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { createClient } from "@supabase/supabase-js";
const config = useRuntimeConfig();
const supabase = createClient(config.public.appUrl, config.public.appKey);

const novel = ref({});
const route = useRoute();
const router = useRouter();

const getDataNovel = async (novelId) => {
  const { data } = await supabase.from("novel").select().eq("id", novelId);
  novel.value = data[0];
};
const data = ref({
  selectedFile: null,
});

const handleFileChange = (event) => {
  data.selectedFile = event.target.files[0];
};
const updateNovel = async () => {
  try {
    if (data.selectedFile) {
      const { data: fileData, error: fileError } = await supabase.storage
        .from("novel")
        .upload(`images/${data.selectedFile.name}`, data.selectedFile);

      await supabase
        .from("novel")
        .update({
          judul: novel.value.judul,
          penulis: novel.value.penulis,
          rating: novel.value.rating,
          sinopsis: novel.value.sinopsis,
          alur: novel.value.alur,
          photo: data.selectedFile.name,
        })
        .eq("id", novel.value.id);
      router.push({ path: "/novel" });
    } else {
      await supabase
        .from("novel")
        .update({
          judul: novel.value.judul,
          penulis: novel.value.penulis,
          rating: novel.value.rating,
          sinopsis: novel.value.sinopsis,
          alur: novel.value.alur,
        })
        .eq("id", novel.value.id);
      router.push({ path: "/novel" });
    }
  } catch (error) {
    console.error(error.message);
  }
};

onMounted(() => {
  const novelId = route.params.id;
  getDataNovel(novelId);
});
</script>
