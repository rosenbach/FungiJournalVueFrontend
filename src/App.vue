<script>
import EntriesView from "./components/EntriesView.vue";

export default {
  name:'App',
  components:{
    EntriesView
  }
}
</script>

<template>
  <EntriesView/>
</template>

<style>

.card-label {
  font-weight: bold;
  display:inline-block;
  vertical-align:top;
}

.card {
  text-align: left;
  border: 2px solid;
  border-radius: 0.5em;
  box-shadow: 5px 10px;
}

body{
      font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;
}


    .card-navbar{
        height:4.5em;
        width:100%;
        border-bottom: 2px solid;
        border-top-left-radius:0.5em;
        border-top-right-radius: 0.5em;
        box-shadow: 0px 2px 2px -0px rgb(145, 145, 145);
    }

    .card-icon{
        margin-left:0.8em;
        padding-top:0.2em;
        display:inline-block;
    }

    .card-content{
        padding:1em;
    }

    .button{        
        transition: all 20ms ease-in-out;
        font-size: large;
        border-radius: 50%;
        box-shadow: 3px 3px;
        position:relative;
        float: right;
        margin-right:0.8em;
        margin-top: 0.6em;
        width:2.7em;
        height:2.7em;
        background-color: white;
        border: 2px solid;
    }
    
    button {
        transition: all 20ms ease-in-out;
        font-size: large;
        border-radius: 50%;
        box-shadow: 3px 3px;
        position:relative;
        float: right;
        margin-right:0.8em;
        margin-top: 0.6em;
        width:2.7em;
        height:2.7em;
        background-color: white;
        border: 2px solid;
    }

    .button:active{
        background-color:gray;
        box-shadow: 0px 0px;
        position:relative;
        top:3px;
        left:3px;
    }

    button:active{
        background-color:gray;
        box-shadow: 0px 0px;
        position:relative;
        top:3px;
        left:3px;
    }

    .button:hover{
        border: 2px solid;
        cursor: pointer;
    }

    button:hover{
        border: 3px solid;
        cursor: pointer;
    }
    .entry-card{
        background-color:antiquewhite;
    }
</style>
