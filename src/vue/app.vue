<template lang="pug">
    div.hello
        h1 {{message}}
        p
            input(v-model="message")
</template>

<script>
export default {
    data() {
        return {
            message: ''
        };
    },
    create() {
        this.message = 'hellow'
    }
}
</script>