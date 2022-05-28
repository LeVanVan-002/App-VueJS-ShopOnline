<template>
    <Page>
        <ActionBar title="Lê Văn Văn">
        </ActionBar>
        <GridLayout columns="*" rows="*,auto">
            <!-- dÃ²ng thá»© 0 chá»©a ná»i dung -->
            <StackLayout col="0" row="0">
                <!-- thiáº¿t káº¿ chá»¯ popular song -->
                <GridLayout backgroundColor="#FFC0CB" columns="auto,*,*,*,*"
                    rows="auto">
                    <Image col="0" row="0" src="~/assets/image/st.png"
                        height="100" width="100" />
                    <Image col="1" row="0" src="~/assets/image/s.png"
                        height="100" width="170" />
                    <StackLayout paddingTop="20" col="4" row="0">
                        <Image col="0" row="0"
                            src="~/assets/images/account.png" height="40"
                            width="40" @tap="showAccount()" />
                        <Label text="l.văn" textAlignment="center"
                            fontSize="11" fontWeight="lighter"
                            color="#000000" />
                    </StackLayout>
                </GridLayout>
                <ScrollView orientation="vertical">
                    <StackLayout>

                        <GridLayout columns="auto,*,auto" rows="auto">
                            <Image width="85" height="70" col="0" row="0"
                                src="~/assets/ban.png" />
                            <Label text="Voucher dành cho bạn" col="1" row="0"
                                paddingTop="20" paddingLeft="-4"
                                fontSize="17" />
                            <Image width="85" height="70" col="2" row="0"
                                src="~/assets/bg/1.png" />

                        </GridLayout>
                        <!-- thiáº¿t káº¿ ná»i dung má»i phÃ¡t hÃ nh -->
                        <ScrollView orientation="horizontal"
                            backgroundColor="#FFC0CB">
                            <StackLayout orientation="horizontal">
                                <StackLayout margin="10" v-for="item in vou"
                                    :key="item.title" textAlignment="center">
                                    <GridLayout height="60" width="70"
                                        :backgroundImage="item.imageUrl"
                                        borderRadius="5" class="album-image">
                                    </GridLayout>
                                    <!-- láº¥y tÃªn bÃ i hÃ¡t vÃ  tÃªn ca sÄ© -->
                                    <Label :text="item.title"
                                        textAlignment="center" fontSize="14"
                                        fontWeight="bold" color="#000000" />
                                </StackLayout>
                            </StackLayout>
                        </ScrollView>

                        <!-- thiáº¿t káº¿ má»i phÃ¡t hÃ ng vÃ  ViewALl -->
                        <GridLayout columns="auto,*,auto" rows="auto">
                            <Label text="Đồ Ăn (xem)" col="0" row="0"
                                paddingLeft="10" fontSize="20"
                                color="#FF1493" />
                            <Image @tap="showMoiNhat()" width="30" height="30"
                                col="1" row="0" horizontalAlignment="left"
                                marginRight="5" stretch="aspectFit"
                                src="~/assets/images/view.png" />
                            <Image width="60" height="60" col="2" row="0"
                                src="~/assets/image/pri.png" />

                        </GridLayout>
                        <!-- thiáº¿t káº¿ ná»i dung má»i phÃ¡t hÃ nh -->
                        <ScrollView orientation="horizontal">
                            <StackLayout orientation="horizontal">
                                <StackLayout margin="10"
                                    v-for="item in listDoAn" :key="item.title"
                                    textAlignment="center">
                                    <GridLayout height="60" width="70"
                                        :backgroundImage="item.imageUrl"
                                        borderRadius="5" class="album-image">
                                    </GridLayout>
                                    <!-- láº¥y tÃªn bÃ i hÃ¡t vÃ  tÃªn ca sÄ© -->
                                    <Label :text="item.title"
                                        textAlignment="center" fontSize="14"
                                        fontWeight="bold" color="#000000" />
                                    <Label :text="item.artist" fontSize="12"
                                        fontWeight="bold" color="#999999" />
                                </StackLayout>
                            </StackLayout>
                        </ScrollView>
                        <!-- end ná»i dung má»i phÃ¡t hÃ nh -->
                        <GridLayout columns="auto,*,auto" rows="auto">
                            <Label text="Đồ Uống (xem)" col="0" row="0"
                                paddingLeft="10" fontSize="20"
                                color="#FF1493" />
                            <Image @tap="showDoUong()" width="30" height="30"
                                col="1" row="0" horizontalAlignment="left"
                                marginRight="5" stretch="aspectFit"
                                src="~/assets/images/view.png" />
                            <Image width="60" height="60" col="2" row="0"
                                src="~/assets/image/pri.png" />
                        </GridLayout>
                        <!-- thiáº¿t káº¿ ná»i dung má»i phÃ¡t hÃ nh -->
                        <ScrollView orientation="horizontal">
                            <StackLayout orientation="horizontal">
                                <StackLayout margin="10"
                                    v-for="item in listViewDataDoUong"
                                    :key="item.title">
                                    <GridLayout height="60" width="70"
                                        :backgroundImage="item.imageUrl"
                                        borderRadius="5" class="album-image">
                                    </GridLayout>
                                    <!-- láº¥y tÃªn bÃ i hÃ¡t vÃ  tÃªn ca sÄ© -->
                                    <Label :text="item.title" fontSize="14"
                                        fontWeight="bold" color="#000000" />
                                    <Label :text="item.artist" fontSize="12"
                                        fontWeight="bold" color="#999999" />
                                </StackLayout>
                            </StackLayout>
                        </ScrollView>
                        <!--Pháº§n ná»i dung 2: thiáº¿t káº¿ Album hot -->
                        <!-- thiáº¿t kÃ© album hot vÃ  View All -->
                        <GridLayout columns="auto,*,auto" rows="auto">
                            <Label text="Chi nhánh (xem)" col="0" row="0"
                                paddingLeft="10" fontSize="20"
                                color="#FF1493" />
                            <Image width="30" height="30" col="1" row="0"
                                horizontalAlignment="left" marginRight="5"
                                stretch="aspectFit"
                                src="~/assets/images/view.png" />
                        </GridLayout>
                        <!-- Thiáº¿t káº¿ ná»i dung cá»§a album hot -->
                        <ScrollView orientation="horizontal">
                            <StackLayout orientation="horizontal">
                                <!-- Duyá»t qua máº£ng láº¥y danh sÃ¡ch album má»i phÃ¡t hÃ nh -->
                                <StackLayout height="130" width="125"
                                    margin="10"
                                    v-for="item in listViewDataTopSong"
                                    :key="item.title">
                                    <!-- thiáº¿t káº¿ imgae nhá» náº±m á» gá»c pháº£i -->
                                    <Image :src="item.imageAdd" width="25"
                                        height="20"
                                        horizontalAlignment="right"
                                        marginRight="5" stretch="aspectFit" />
                                    <!-- Thiáº¿t káº¿ pháº§n hÃ¬nh lá»n + tÃªn bÃ i hÃ¡t+tÃªn ca si -->
                                    <StackLayout horizontalAlignment="center"
                                        verticalAlignment="center">
                                        <GridLayout width="65" height="65"
                                            :backgroundImage="item.imageUrl"
                                            borderRadius="20"
                                            stretch="aspectFill">
                                        </GridLayout>
                                        <Label :text="item.title"
                                            fontSize="14" fontWeight="bold"
                                            color="#000000" />
                                        <Label :text="item.artist"
                                            fontSize="12" fontWeight="bold"
                                            color="#000000" />
                                    </StackLayout>
                                </StackLayout>
                            </StackLayout>
                        </ScrollView>
                        <!-- end album hot -->
                        <!-- thiáº¿t káº¿ Top Song -->

                        <!-- end thiáº¿t káº¿ top song -->
                        <ListPicker height="20" width="16"
                            :items="listOfItems" v-model="selectedItem" />
                        <ScrollView orientation="horizontal">
                            <StackLayout orientation="horizontal"
                                backgroundColor="#FFF8DC">

                                <StackLayout margin="5"
                                    v-for="item in gioithieu"
                                    :key="item.title">
                                    <GridLayout height=" 30" width="100"
                                        borderRadius="5" class="album-image">
                                        <Label :text="item.title"
                                            fontSize="16" fontWeight="bold"
                                            color="red" />
                                    </GridLayout>
                                    <!-- láº¥y tÃªn bÃ i hÃ¡t vÃ  tÃªn ca sÄ© -->
                                    <Label @tap="ShowFllow()"
                                        :text="item.txt1" fontSize="12"
                                        fontWeight="bold" color="#999999" />
                                    <Label :text="item.txt2" fontSize="12"
                                        fontWeight="bold" color="#999999" />
                                </StackLayout>
                            </StackLayout>
                        </ScrollView>

                        <!--  -->
                    </StackLayout>
                </ScrollView>

            </StackLayout>
            <!-- dÃ²ng thá»© 1 chá»©a nÃºt bÃªn dÆ°á»i -->
            <StackLayout col="0" row="1" height="60"
                backgroundColor="#DCDCDC">

                <GridLayout columns="*,*,*,*,*" row="auto">
                    <Image col="0" row="0" height="30" width="30" margin="10"
                        @tap="ShowCall()" src="~/assets/images/call.png" />
                    <Image col="1" row="0" height="35" width="35" margin="10"
                        @tap="ShowFllow()" src="~/assets/images/fb.png" />
                    <Image col="2" row="0" height="30" width="30" margin="10"
                        src="res://home" />
                    <Image @tap="ShowIns()" col="3" row="0" height="30"
                        width="30" margin="10"
                        src="~/assets/images/ita.png" />
                    <Image col="4" row="0" height="35" width="35" margin="10"
                        src="~/assets/image/share.png" @tap="onTapShare()" />
                </GridLayout>
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
    import DoAn from "./DoAn";
    import ChiaSe from "./ChiaSe";
    import followUs from "./followUs";
    import call from "./call";
    import DoUong from "./DoUong";
    import Add from "./account";
    import ins from "./ins";
    export default {
        methods: {
            showMoiNhat() {
                this.$navigateTo(DoAn);
            },
            onTapShare() {
                this.$navigateTo(ChiaSe);
            },
            ShowFllow() {
                this.$navigateTo(followUs);
            },
            ShowCall() {
                this.$navigateTo(call);
            },
            showDoUong() {
                this.$navigateTo(DoUong);
            },
            showAccount() {
                this.$navigateTo(Add);
            },
            ShowIns() {
                this.$navigateTo(ins);
            }
        },
        data() {
            return {
                listDoAn: [{
                        title: "Bánh Chuối Chiên ",
                        artist: "chuối chiên bí ngô mật ong",
                        imageUrl: "~/assets/image/chuoi.jpg"
                    },
                    {
                        title: "Bánh Sầu Riêng ",
                        artist: " có lớp kem lạnh siêu béo luôn",
                        imageUrl: "~/assets/image/sau.jpg"
                    },
                    {
                        title: "Miss Đác ",
                        artist: " ăn ngon, mát lạnh",
                        imageUrl: "~/assets/image/mit.jpg"
                    },
                    {
                        title: "trái Cây Tô ",
                        artist: "trái cây gọt sẵn và trái cây tô",
                        imageUrl: "~/assets/image/traicay.jpg"
                    },
                    {
                        title: "Bánh Gối ",
                        artist: "một mình ăn 3 cái mới đã",
                        imageUrl: "~/assets/image/cee.jpg"
                    },
                    {
                        title: "Đồ Chiên ",
                        artist: "Dĩa đồ chiên với đủ thứ",
                        imageUrl: "~/assets/image/ca.jpg"
                    }
                ],

                listViewDataDoUong: [{
                        title: "Sữa tươi trân châu ",
                        imageUrl: "~/assets/image/sua.jpg"
                    },
                    {
                        title: "Bia Úp Ngược",
                        imageUrl: "~/assets/image/bia.jpg"
                    },
                    {
                        title: "Trà trái cây",
                        imageUrl: "~/assets/image/tra.jpg"
                    },
                    {
                        title: "Trà đào cam sả",
                        imageUrl: "~/assets/image/dao.jpg"
                    },
                    {
                        title: "Cookie Cream",
                        imageUrl: "~/assets/image/crem.jpg"
                    },
                    {
                        title: "Latte",
                        imageUrl: "~/assets/image/latte.jpg"
                    }
                ],

                gioithieu: [{
                        title: "Follow Us ",
                        txt1: "FaceBook",
                        txt2: "YouTube"
                    },
                    {
                        title: "Contact Info",
                        txt1: "+07 631 09811",
                        txt2: "levanvan@gmail.com"
                    },
                    {
                        title: "Address",
                        txt1: "ấp 4-Đông Thạnh",
                        txt2: "Hóc Môn - TP.HCM"
                    }
                ],
                vou: [{
                        imageUrl: "~/assets/bg/giatot.png",
                        title: "giảm 30%"
                    },
                    {
                        imageUrl: "~/assets/bg/sale.png",
                        title: "miễn ship"
                    },
                    {
                        imageUrl: "~/assets/bg/giam50.png",
                        title: "giảm 50%"
                    },
                    {
                        imageUrl: "~/assets/bg/sale.png",
                        title: "giảm giá"
                    }
                ],
                listViewDataTopSong: [{
                        title: "Chi Nhánh 1",
                        artist: "Hóc-Môn, TP.Hồ Chí Minh",
                        imageAdd: "~/assets/images/address.png",
                        imageUrl: "~/assets/images/map.jpg"
                    },
                    {
                        title: "Chi Nhánh 2",
                        artist: "Cầu Giấy ,Hà Nội",
                        imageAdd: "~/assets/images/address.png",
                        imageUrl: "~/assets/images/map.jpg"
                    },
                    {
                        title: "Chi Nhánh 3",
                        artist: "Sầm Sơn ,TP.Thanh Hóa ",
                        imageAdd: "~/assets/images/address.png",
                        imageUrl: "~/assets/images/map.jpg"
                    },
                    {
                        title: "Chi Nhánh 4",
                        artist: "Mãi Tít Cà Mau",
                        imageAdd: "~/assets/images/address.png",
                        imageUrl: "~/assets/images/map.jpg"
                    }
                ]
            };
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

    .text {
        text-align: center;
        color: red;
    }
</style>