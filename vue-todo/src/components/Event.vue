<template>
  <button v-on:click="sendEvent">Event</button>
</template>

<script>
export default {
  methods:{
    sendEvent:function (){
      this.$emit("sendevent");
    }
  }
}
</script>
