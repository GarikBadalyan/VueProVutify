<template>
  <v-dialog v-model="dialogVisible" max-width="600px">
    <v-card>
      <v-card-title>
        {{photo.title}}
      </v-card-title>
      <v-card-text>
        <v-img
        :src="photo.url"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props:{
    photo:{
      type:Object,
      required: true
    },
    value:{
      type: Boolean,
      default: false
    }
  },

  created() {
    console.log('created-i mej@ value', this.value)
    this.dialogVisible = this.value
  },

  data(){
    return{
      dialogVisible: false,
    }
  },

  watch: {
    value(newValue){
      console.log('watch-newValue', newValue)
      this.dialogVisible = newValue
    },
    dialogVisible(newValue){
      console.log('dialogVisible, newValue', newValue,)
      this.$emit('input', newValue)
    }
//     Блок watchв PhotoDialogкомпоненте отвечает за мониторинг изменений двух свойств: valueи dialogVisible. Вот что делает каждый из этих наблюдателей:
//
// value(newValue): этот наблюдатель отслеживает изменения в valueреквизите, который предназначен для управления видимостью диалога. Когда valueсвойство изменяется в родительском компоненте, срабатывает этот наблюдатель. Он записывает новое значение на консоль и обновляет dialogVisibleсвойство данных в PhotoDialogкомпоненте, чтобы оно соответствовало новому значению. Другими словами, он dialogVisibleсинхронизирует свойство локальных данных с изменениями свойства valueродительского компонента. Это сделано для того, чтобы видимость диалогового окна в PhotoDialogкомпоненте отражала состояние, установленное в родительском компоненте.
//
// dialogVisible(newValue): этот наблюдатель отслеживает изменения свойства локальных dialogVisibleданных внутри PhotoDialogсамого компонента. При dialogVisibleлокальных изменениях (например, когда пользователь открывает или закрывает диалог внутри PhotoDialogкомпонента) срабатывает этот наблюдатель. Он записывает новое значение на консоль и генерирует inputсобытие с новым значением, используя this.$emit('input', newValue). Генерация inputсобытия — это распространенный шаблон Vue.js, позволяющий включить двустороннюю привязку данных при использовании директивы v-model. Это позволяет родительскому компоненту прослушивать изменения в dialogVisibleсвойстве и v-modelсинхронизировать свою собственную привязку.
//
//     Таким образом, watchблок в PhotoDialogкомпоненте гарантирует, что изменения видимости диалогового окна можно отслеживать и синхронизировать как из родительского компонента (с использованием свойства value), так и изнутри PhotoDialogсамого компонента (с использованием dialogVisibleсвойства data). Это позволяет гибко контролировать видимость диалогового окна и гарантирует, что оно будет вести себя должным образом при использовании в родительском компоненте с помощью v-model.
  }

}
</script>

<style lang="scss" scoped>

</style>