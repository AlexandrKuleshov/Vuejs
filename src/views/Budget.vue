<template>
  <div>
    <List :list="list" />
  </div>
</template>

<script>
import List from '../components/List'

export default {
  name: 'Budget',
  components: {
    List,
  },
  data: () => ({
    list: {
       1: {
         type: 'INCOME',
         value: 100,
         comment: 'Some comment',
         id: 1,
       },
      2: {
        type: 'OUTCOME',
        value: -50,
        comment: 'Some outcome comment',
        id: 2,
      }
    }
  })
}
</script>
