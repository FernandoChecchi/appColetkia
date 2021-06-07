<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Agregar Nueva Persona
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarRegistro" >
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" class="form-control" name="name" id="name" v-model="persona.name" aria-describedby="helpId" placeholder="Nombre">
          </div>
          <div class="form-group">
            <label for="description">Descripcion:</label>
            <input type="text" class="form-control" name="description" id="descripcion" v-model="persona.description" aria-describedby="helpId" placeholder="Descripcion">
          </div>
          <div class="form-group">
            <label for="image">Imagen:</label>
            <input type="file" accept="image/*" @change="handleImage" class="form-control" name="image" id="image">
          </div>
          <br/>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Agregar</button>
            <router-link :to="{name:'Listar'}" class="btn btn-danger">Cancelar</router-link>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      persona:{},
      image:''
    }
  },
  methods:{
    agregarRegistro(){
      console.log(this.persona)
      var datosEnviar={name: this.persona.name, description: this.persona.description, image: this.image}
      console.log(datosEnviar)
      fetch('http://localhost:3000/personas/nuevo/',{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(datosEnviar)
      })
      .then(res => res.json())
      .then((datosRespuesta => {
        console.log(datosRespuesta)
        window.location.href='/'
      }))
      .catch(console.log)
    },
    handleImage(e){
      const selectedImage = e.target.files[0]
      this.createBase64Image(selectedImage)
    },
    createBase64Image(fileObject){
      let reader = new FileReader()
      reader.readAsDataURL(fileObject);
      reader.onload = () => {
        this.image = reader.result
      }
    }
  }
}
</script>