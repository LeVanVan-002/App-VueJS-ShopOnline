<template>
    <Page>
        <ActionBar fontSize="5" title="Tôi trên instagram">
        </ActionBar>
        <GridLayout columns="*" rows="80,*" orientation="vertical">
            <Image row="0" @tap="$navigateBack(HelloWorld)"
                src="~/assets/images/back2.png" />
            <!-- <Image row="1" src="~/assets/images/share.png" /> -->
            <WebView row="1" src="https://www.instagram.com/l.v.van_002/" />
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