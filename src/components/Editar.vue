<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Editar Persona
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="actualizarRegistro" >
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" class="form-control" name="name" id="name" v-model="persona.name" aria-describedby="helpId" placeholder="Nombre">
          </div>
          <div class="form-group">
            <label for="description">Descripcion:</label>
            <input type="text" class="form-control" name="description" id="descripcion" v-model="persona.description" aria-describedby="helpId" placeholder="Descripcion">
          </div>
          <br/>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Modificar</button>
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
      persona:{}
    }
  },
  created:function(){
    this.obtenerInfoID();
  },
  methods:{
    obtenerInfoID(){
      console.log('http://localhost:3000/personas/'+`${this.$route.params.id}`)
      fetch('http://localhost:3000/personas/'+`${this.$route.params.id}`)
      .then(res => res.json())
      .then((dataRes) => {
        console.log(dataRes)
        this.persona=dataRes
      })
      .catch(console.log)
    },
    actualizarRegistro(){
      var datosEnviar={name: this.persona.name, description: this.persona.description}
      fetch('http://localhost:3000/personas/'+`${this.$route.params.id}`,{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(datosEnviar)
      })
      .then(res => res.json())
      .then((datosRespuesta => {
        console.log(datosRespuesta)
        window.location.href='/'
      }))
      .catch(console.log)
    }
  }
}
</script>