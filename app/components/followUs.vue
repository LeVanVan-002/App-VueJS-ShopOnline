<template>
    <Page>
        <ActionBar fontSize="5" title="Tôi trên facebook">
        </ActionBar>
        <GridLayout columns="*" rows="80,*" orientation="vertical">
            <Image row="0" @tap="$navigateBack(HelloWorld)"
                src="~/assets/images/back2.png" />
            <!-- <Image row="1" src="~/assets/images/share.png" /> -->
            <WebView row="1" src="https://www.facebook.com/l.v.van009" />
        </GridLayout>
    </Page>
</template>
<script>
    export default {
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