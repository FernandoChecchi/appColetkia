<template>
  <div class="container">
    <router-link to="/crear" class="btn btn-success">Crear</router-link>
    <br/>
    <br/>
    <div class="card">
      <div class="card-header">
        Personas
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="persona in personas" :key="persona.id">
              <td>{{persona.name}}</td>
              <td>{{persona.description}}</td>
              <td><img :src="persona.image" class="w-25"/></td>
              <td>
                <div class="btn-group" role="group" aria-label="">
                  <router-link :to="{name:'Editar', params:{id:persona.id}}" class="btn btn-info">Editar</router-link>
                  <button type="button" v-on:click="borrarPersona(persona.id)" class="btn btn-danger">Borrar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      

    </div>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      personas:[]
    }
  },
  created: function () {
    this.consultarPersonas();
  },
  methods:{
    consultarPersonas(){
      fetch('http://localhost:3000/personas/')
      .then(res => res.json())
      .then((dataRes) => {
        console.log(dataRes)
        this.empleados=[]
        if(typeof dataRes[0].sucess==='undefined'){
          this.personas = dataRes;
        }
      })
      .catch(console.log)
    },
    borrarPersona(id){
      console.log('http://localhost:3000/personas/'+`${id}`)
      fetch('http://localhost:3000/personas/'+`${id}`,{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE",
      })
      .then(res => res.json())
      .then((dataRes) => {
        console.log(dataRes)
        window.location.href='/'
      })
      .catch(console.log)
    }
  }
}
</script>