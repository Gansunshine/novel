<template>
  <section class="container mx-auto mt-24 mb-10">
    <h1 class="font-bold text-center text-[24px]">Tambah Novel Baru</h1>
    <form @submit.prevent="tambahNovel">
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
                  v-model="judul"
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
                  v-model="penulis"
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
                  v-model="rating"
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
                v-model="sinopsis"
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
                v-model="alur"
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
          Tambah
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { createClient } from "@supabase/supabase-js";
const config = useRuntimeConfig();
const supabase = createClient(config.public.appUrl, config.public.appKey);

const router = useRouter();

const judul = ref("");
const penulis = ref("");
const rating = ref("");
const sinopsis = ref("");
const alur = ref("");

const data = ref({
  selectedFile: null,
});

const handleFileChange = (event) => {
  data.selectedFile = event.target.files[0];
};

const tambahNovel = async () => {
  try {
    if (data.selectedFile) {
      const { data: fileData, error } = await supabase.storage
        .from("novel")
        .upload(`images/${data.selectedFile.name}`, data.selectedFile, {
          cacheControl: "3600",
          upsert: true,
        });

      await supabase.from("novel").insert([
        {
          judul: judul.value,
          penulis: penulis.value,
          rating: rating.value,
          sinopsis: sinopsis.value,
          alur: alur.value,
          photo: data.selectedFile.name, 
        },
      ]);

      judul.value = "";
      penulis.value = "";
      rating.value = "";
      sinopsis.value = "";
      alur.value = "";
      router.push({ path: "/novel" });
      if (error) {
        console.error("Error uploading image:", error.message);
      } else {
        console.log("Image uploaded successfully:", fileData);
      }
    } else {
      console.warn("No file selected");
    }
  } catch (e) {
    console.error("Unexpected error:", e.message);
  }
};
</script>
