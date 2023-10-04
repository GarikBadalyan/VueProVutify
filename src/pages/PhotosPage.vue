<template>
  <v-container>
    <PhotoForm @addPhoto="addPhoto" />
    <v-row>
      <photo-one
          v-for="(photo, index) in photos"
          :key="index"
          :photo="photo"
          @openPhoto="openPhoto"
      />
    </v-row>
    <PhotoDialog
    :photo="currentPhoto"
    v-model="dialogVisible"
    />
  </v-container>
</template>

<script>
import PhotoOne from "@/components/photo/PhotoOne.vue";
import PhotoForm from "@/components/photo/PhotoForm.vue";
import PhotoDialog from "@/components/photo/PhotoDialog.vue";

export default {
  components: {PhotoDialog, PhotoForm, PhotoOne },

 data() {
   return {
     photos: [],
     currentPhoto: {},
     dialogVisible: false
   }
 },
  mounted() {
    this.fetchTodo()
  },
  methods: {
    fetchTodo(){
      this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
          .then( (res) => {
            console.log('res', res)
            this.photos = res.data;
          } )
    },

    addPhoto(photo) {
      this.photos.push(photo)
    },
    openPhoto(photo) {
      this.currentPhoto = photo;
      this.dialogVisible = true;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>