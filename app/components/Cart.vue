<template>
    <Page>
        <ActionBar title="Lê Văn Văn ">
        </ActionBar>
        <FlexboxLayout flexDirection="row">
            <StackLayout orientation="vertical">
                <GridLayout columns="auto,*,*,*,*" rows="auto"
                    backgroundColor="#FFC0CB">
                    <Image col="0" row="0" src="~/assets/images/return.png"
                        height="50" width="50" @tap="$navigateBack(DoAn)" />
                    <!-- <Image col="1" row="0" src="~/assets/images/an1.png"
                        height="90" width="90" /> -->
                    <StackLayout col="2" row="0">
                        <Image col="0" row="0"
                            src="~/assets/image/shipper.png" height="90"
                            width="120" />
                    </StackLayout>
                    <StackLayout col="4" row="0">
                        <Image @tap="$navigateBack(HoaDon)" col="0" row="0"
                            src="~/assets/image/tt.png" height="45"
                            width="45" />
                        <Label textAlignment="center" text="thanh toán"
                            fontSize="12" fontWeight="lighter" color="red" />
                    </StackLayout>

                </GridLayout>
                <!-- những món mà người dùng chọn -->
                <GridLayout v-for="item in cart" :key="item"
                    columns="auto,*,auto,auto,auto" rows="auto,auto"
                    backgroundColor="lightgray">
                    <!-- hình -->
                    <Image :src="item.imageUrl" col="0" width="40" height="40"
                        horizontalAlignment="left" verticalAlignment="button"
                        margin="3" />
                    <!-- tên -->
                    <Label :text="item.ten" col="1" fontSize="14"
                        horizontalAlignment="left" verticalAlignment="button"
                        margin="3" />
                    <!-- giá -->
                    <Label :text="item.price" col="2" fontSize="14"
                        color="blue" horizontalAlignment="left"
                        verticalAlignment="botton" margin="3" />
                    <!-- dấu x -->
                    <Label text="số lượng :" col="3" fontSize="14"
                        color="blue" horizontalAlignment="left"
                        verticalAlignment="botton" margin="3" />
                    <!-- số lượng -->
                    <Label :text="item.quantity" col="4" color="blue"
                        fontSize="14" horizontalAlignment="left"
                        verticalAlignment="botton" margin="3" />
                </GridLayout>


                <GridLayout columns="auto,*,auto,auto,auto,auto"
                    row="auto,auto">
                    <!-- hÃ¬nh náº±m cá»t 0 -->
                    <Label fontSize="20" col="0" row="0" text="Tổng :" />
                    <StackLayout col="1" row="0" marginLeft="15">
                        <Label color="red" fontSize="14" :text="itemCount"
                            marginTop="5" paddingTop="5" />
                    </StackLayout>
                    <StackLayout col="2" row="0">
                        <Label fontSize="20" text="Thành Tiền :" />
                    </StackLayout>
                    <StackLayout col="3" row="0">
                        <Label color="red" fontSize="19" :text="itemSum" />
                    </StackLayout>
                    <StackLayout col="4" row="0">
                        <Label color="red" fontSize="19" text="-vnđ " />

                    </StackLayout>

                </GridLayout>

            </StackLayout>
        </FlexboxLayout>

    </Page>
</template>

<script>
    // import HoaDon from "./HoaDon";
    export default {
        props: ["cart"],

        data() {
            return {};
        },
        computed: {
            itemCount() {
                var tong = 0;
                for (var i = 0; i < this.cart.length; i++) {
                    tong += this.cart[i].quantity;
                }
                return tong;
            },
            itemSum() {
                var thanhtien = 0;
                for (var i = 0; i < this.cart.length; i++) {
                    thanhtien += this.cart[i].quantity * this.cart[i].price;
                }
                return thanhtien;
            }
        }
    };
</script>

<style>
</style>