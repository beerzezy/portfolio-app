<template>
    <div>
        <v-master/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import master from '@/components/layouts/master'

export default {
    components: {
        'v-master': master
    },
    data () {
        return {
            msg: 'navbar'
        }
    }
}
</script>

<style>
    body {
        background: #2a323c;
    }
    .content {
        margin-top: 16px;
    }
</style>