<template>
    <ActionBar fontSize="5" title="facebook">

    </ActionBar>
        <!-- 1 á»©ng dá»¥ng app ,chá» Äc phÃ©p thay Äá»i layout -->
       
           <Page>
            <StackLayout>
                <!-- tráº¡ng thÃ¡i loading -->
                <ActivityIndicator busy="true" @busyChange="onBussyChanged" />


    </ActionBar>
    <GridLayout columns="*" rows="80,*" orientation="vertical">
        <Button row="0" text="Trang Chá»§" @tap="$navigateBack(HelloWorld)" />
        <!-- <Image row="1" src="~/assets/images/share.png" /> -->
        <WebView row="1" src="https://www.facebook.com/l.v.van009" />
    </GridLayout>

    <Button>
        <FormattedString>
            <Span text="sÃ¡ng táº¡o bá»i " />
            <Span text="l.vÄn" style="color: red" />
            <Span text=" facebook ," fontStyle="italic" />
            <Span text=" twitter" fontWeight="bold" />
        </FormattedString>
    </Button>
    <!-- hiá»n thá» Äá»ng há»  -->
    
    </StackLayout>
    </Page>
</template>
<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style scoped>
    ActionBar {
        color: #ffffff;
    }

    .thumb {
        width: 30;
        height: 30;
    }

    .title {
        font-size: 15;
    }
</style>