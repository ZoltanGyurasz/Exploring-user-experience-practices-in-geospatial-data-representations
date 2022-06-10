<template>
  <div class="Warning">
    <div class="modal is-active">
      <div class="modal-background"></div>

      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title"><b>{{cim}}</b></p>
          <button class="delete" aria-label="close" v-on:click="close"></button>
        </header>

        <section class="modal-card-body">
          {{szoveg}}
          <div v-if="lista.length != 0" class="content">
            <ul>
              <li v-for="item in lista" v-bind:key="item.cim">
                <b>{{item.cim}}</b>
              </li>
            </ul>
          </div>
          <div>
            <p style="display: inline">Ezeket a feladatokat <span class="piros">piros</span> háttérszínnel találod meg a listában.</p>
            Amennyiben már befejeztél egy feladatot, csak elfelejtetted készre jelenteni, ezt még pótolhatod.
          </div>
        </section>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "Figyelmeztetes",
  props:['cim','szoveg','lista'],
  data(){
    return{

    }
  },

  methods:{
    close(){
      this.$emit('close');
    }
  },

  created(){
  }
}
</script>

<style lang="scss">
.modal.is-active{
  z-index: 1500;
}

.modal-card-title{
  font-size: 2.0rem;
}
.modal-card-body{
  font-size: 1.7rem;
}

.atnezes .modal-card{
  width: 70%;
}

.piros{
  color: red;
  font-weight: bold;
}
.modal-card-head{
  background-color: #FFDC18;
  border: none;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.modal-card-body{
  background-color: #FFDC18;
}
</style>