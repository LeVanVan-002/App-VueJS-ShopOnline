<template>
   
    <Page class="img" backgroundImage="~/assets/bg/bg6.jpg">
        <!-- backgroundImage="~/image/bg.png" -->

        <GridLayout columns="*" rows="*,auto">
            <StackLayout col="0" row="0">
                <StackLayout @tap="next()" marginLeft="265" marginTop="20"
                    backgroundImage="~/assets/bg/xx.png" height="30"
                    width="30" class="img">
                    <!-- dấu x viết tap cho nó qua trang hellowword -->
                </StackLayout>

            </StackLayout>

        </GridLayout>
    </Page>
</template>

<script>
    import HelloWorld from "./HelloWorld";
    export default {
        methods: {
            next() {
                this.$navigateTo(HelloWorld);
            }
        },
        data() {
            return {};
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }

    .img {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .img2 {

        float: right;
    }
</style>