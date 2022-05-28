<template>
    <Page>
        <ActionBar title="Lê Văn Văn">
        </ActionBar>
        <StackLayout columns="*" rows="80,*" orientation="vertical">
            <GridLayout columns="*" rows="80,*" orientation="vertical">
                <Image row="0" @tap="$navigateBack(DoAn)"
                    src="~/assets/images/back2.png" />

                <StackLayout row="1" >
                    <Image :src="item.imageUrl" width="300" />
                    <!-- <Label :text="item.ten" fontSize="25" />
                <Label :text="item.address" class="text" /> -->
                    <!-- <Label :text="item.price" /> -->

                    <FlexboxLayout flexWrap="wrap">
                        <Label paddingLeft="9" text="Tên  :" width="30%"
                            fontSize="16" />
                        <Label color="#EE0000" :text="item.ten" width="30%" />

                    </FlexboxLayout>
                    <FlexboxLayout flexWrap="wrap">
                        <Label paddingLeft="9" text="Chi Tiết  :" width="30%"
                            fontSize="16" />
                        <Label color="#EE0000" :text="item.mota" />
                    </FlexboxLayout>
                    <FlexboxLayout flexWrap="wrap">
                        <Label paddingLeft="9" text="giá (vnđ)  :" width="30%"
                            fontSize="16" />
                        <Label color="#EE0000" :text="item.price"
                            width="30%" />
                    </FlexboxLayout>
                    <FlexboxLayout flexWrap="wrap">
                        <Label paddingLeft="9" text="Còn : " width="50%"
                            fontSize="16" />
                        <Label color="red" :text="item.con" width="30%" />
                    </FlexboxLayout>
            </GridLayout>
            <!--  -->
        </StackLayout>
    </Page>
</template>
<script>
    export default {
        props: ["item"],
        data() {
            return {};
        }
    };
</script>
<style scoped>
    ActionBar {
        background-color: #252418;
        color: #ffffff;
    }
</style>