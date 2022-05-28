<template>
    <Page>
        <ActionBar title="Share App With">
        </ActionBar>
        <GridLayout columns="*" rows="80,*" orientation="vertical">
            <Image row="0" @tap="$navigateBack(HelloWorld)"
                src="~/assets/images/back2.png" />
            <Image @tap="ShowFllow()" row="1"
                src="~/assets/images/share.png" />
            <!-- <WebView row="1" src="~/assets/images/share.png" /> -->
        </GridLayout>
        <!--  -->
    </Page>
</template>
<script>
    import followUs from "./followUs";
    export default {
        methods: {
            ShowFllow() {
                this.$navigateTo(followUs);
            }
        },
        data() {
            return {};
        }
    };
</script>

<style>
    .search {
        backgroundColor: red;
    }
</style>