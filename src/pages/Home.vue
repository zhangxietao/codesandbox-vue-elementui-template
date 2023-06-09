<template>
  <div>
    <el-button @click="onClick">click</el-button>
  </div>
</template>
<script>
import { confirm } from '../utils/decorator'

export default {
  data() {
    return {
      msg: "Hello world!",
    };
  },
  created() {
  },
  methods: {
    @confirm()
    onClick() {
      console.log('click');
    }
  }
}
</script>
