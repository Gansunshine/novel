<!-- components/ImageUploader.vue -->
<template>
  <div class="mt-80">
    <input type="file" @change="handleFileChange" />
    <button @click="uploadImage">Upload Image</button>
  </div>
</template>

<script setup>
import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();
const supabase = createClient(config.public.appUrl, config.public.appKey);

const data = ref({
  selectedFile: null,
});

const handleFileChange = (event) => {
  data.selectedFile = event.target.files[0];
};

const uploadImage = async () => {
  try {
    if (data.selectedFile) {
      const { data: fileData, error } = await supabase.storage
        .from("novel")
        .upload(`images/${data.selectedFile.name}`, data.selectedFile.name, {
          cacheControl: "3600",
          upsert: true,
        });

      if (error) {
        console.error("Error uploading image:", error.message);
      } else {
        console.log("Image uploaded successfully:", fileData);
      }
    } else {
      console.warn("No file selected");
    }
  } catch (e) {
    console.log(e.message);
  }
};
</script>
