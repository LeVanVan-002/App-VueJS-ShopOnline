<template>
    <Page>
        <ActionBar title="Lê Văn Văn">
        </ActionBar>
        <GridLayout columns="*" rows="*,auto">
            <StackLayout col="0" row="0">
                <!--  -->
                <GridLayout columns="auto,*,*,*,*" rows="auto"
                    backgroundColor="#FFC0CB">
                    <Image col="0" row="0" src="~/assets/images/return.png"
                        height="50" width="50"
                        @tap="$navigateBack(HelloWorld)" />
                    <Image col="1" row="0" src="~/assets/image/douong.png"
                        height="90" width="90" />
                    <StackLayout col="2" row="0">
                        <Image col="0" row="0" src="~/assets/images/sale.png"
                            height="90" width="90" />
                    </StackLayout>
                    <StackLayout col="4" row="0">
                        <Image @tap="showCart()" col="0" row="0"
                            src="~/assets/images/card.png" height="45"
                            width="45" />
                        <Label textAlignment="center" :text="itemCount"
                            fontSize="12" fontWeight="lighter" color="red" />
                    </StackLayout>

                </GridLayout>
                <!--  -->





                <!-- <SearchBar hint="Tìm Kiếm..." v-model="searchPhrase"
                    @submit="onSearchSubmit" /> -->
                <!--  -->

                <GridLayout columns="auto,*,auto,auto,auto" rows="auto">
                    <Label text="sắp xếp theo" marginTop="10" col="0" row="0"
                        fontSize="18" fontWeight="bold" color="#000000" />
                    <Image col="2" row="0" height="40" width="40"
                        src="~/assets/images/mm.png" />
                    <Button text="Tên" col="3" row="0" fontSize="16"
                        fontWeight="bold" color="#000000" @tap="sortASC()" />
                    <Button text="Giá" col="4" row="0" fontSize="16"
                        fontWeight="bold" color="#000000"
                        @tap="sortASCBH()" />
                </GridLayout>


                <ScrollView backgroundColor="#E6E6FA">
                    <StackLayout>
                        <!-- dùng gridlayout để bố chí scart view -->
                        <GridLayout if="rowCount>0" v-for="item in rowCount"
                            :key="item">
                            <!-- mỗi 1 dòng sẽ có 2 caart view -->
                            <!-- elevation -->
                            <StackLayout class="card" margin="10" col="0"
                                elevation="20">
                                <!-- 4 dòng 3 cột -->
                                <GridLayout columns="auto,*,auto,*"
                                    row="auto">
                                    <Image
                                        :src="listViewData[(item-1)*itemsPerRow].imageUrl"
                                        col="0" row="0" height="75"
                                        width="75" />
                                    <StackLayout col="1" row="0"
                                        marginLeft="15">
                                        <Label
                                            :text="listViewData[(item-1)*itemsPerRow].ten"
                                            marginTop="5" paddingTop="5"
                                            color="#000000" />
                                        <Label
                                            :text="listViewData[(item-1)*itemsPerRow].price"
                                            marginTop="5" paddingTop="5"
                                            color="#000000" />
                                        <!-- <Label :text="item.year" marginTop="5"
                                    paddingTop="5" color="#000000" /> -->
                                    </StackLayout>
                                    <StackLayout col="2" row="0">
                                        <Image height=" 30" width="30"
                                            @tap="showDetail(filterten[(item-1)*itemsPerRow])"
                                            src="~/assets/images/view.png" />
                                    </StackLayout>
                                    <StackLayout col="3" row="0">
                                        <Image
                                            @tap="addCart(filterten[(item-1)*itemsPerRow])"
                                            height="30" width="30"
                                            src="~/assets/images/add.png" />
                                    </StackLayout>
                                </GridLayout>
                            </StackLayout>
                        </GridLayout>
                    </StackLayout>
                </ScrollView>
        </GridLayout>
    </Page>
</template>

<script>
    import Cart from "./Cart";
    import ChiTiet from "./ChiTiet";
    export default {
        methods: {
            showCart() {
                this.$navigateTo(Cart, {
                    animated: true,
                    transition: {
                        name: "slideLeft",
                        duration: 250,
                        curve: "easeIn"
                    }, //truyền giỏ hnagf qua
                    props: {
                        cart: this.cart
                    }
                });
            },
            showDetail(item) {
                this.$navigateTo(ChiTiet, {
                    animated: true,
                    transition: {
                        name: "sileLeft",
                        duration: 300,
                        curve: "easeIn"
                    },
                    props: {
                        item: item
                    }
                });
            },
            onSearchSubmit(args) {
                let searchBar = args.object;
                console.log("You are searching for " + searchBar.text);
            },
            ////
            addCart(item) {
                console.log(item);
                var temp = false;
                if (this.cart == null) {
                    temp = false;
                } else {
                    for (var i = 0; i < this.cart.length; i++) {
                        if (item.ten == this.cart[i].ten) {
                            temp = true;
                        }
                    }
                }
                if (temp == false) {
                    this.cart.push(item);
                } else {
                    for (var i = 0; i < this.cart.length; i++) {
                        if (item.ten == this.cart[i].ten) {
                            this.cart[i].quantity += 1;
                        }
                    }
                }
            },
            ///

            sortASC() {
                if (this.sort == "Asc") {
                    this.sort = "Desc"; //gÃ¡n láº¡i sort lÃ  desc
                    this.listViewData.sort(
                        //dá»±a vÃ o tÃªn ca sÄ©
                        //substring cáº¯t chuá»i báº¯t Äáº§u tá»« 0 láº¥y 1 kÃ­ tá»±
                        (a, b) =>
                        a.artist.substring(0, 1) > b.artist.substring(0,
                            1) ?
                        1 :
                        -1
                    );
                } else {
                    this.sort = "Asc";

                    this.listViewData.sort(
                        (a, b) =>
                        a.artist.substring(0, 1) < b.artist.substring(0,
                            1) ?
                        1 :
                        -1
                    );
                }
            },
            //sáº¯p xáº¿p theo bÃ i hÃ¡t
            sortASCBH() {
                if (this.sort == "Asc") {
                    this.sort = "Desc";
                    //gÃ¡n láº¡i sort lÃ  desc
                    this.listViewData.sort(
                        //dá»±a vÃ o tÃªn casÄ©
                        //substring cáº¯t chuá»i báº¯t Äáº§u tá»« 0 láº¥y 1 kÃ­ tá»±
                        (a, b) =>
                        a.ten.substring(0, 1) > b.ten.substring(0, 1) ?
                        1 : -1
                    );
                } //ngÆ°á»£c láº¡i click láº§n ná»¯a desc giáº£m giáº§n
                else {
                    this.sort = "Asc";
                    //gÃ¡n láº¡i sort lÃ  desc
                    this.listViewData.sort(
                        //dá»±a vÃ o tÃªn ca sÄ© //substring cáº¯t chuá»i báº¯t Äáº§u tá»« 0 láº¥y 1 kÃ­ tá»±
                        (a, b) =>
                        a.ten.substring(0, 1) < b.ten.substring(0, 1) ?
                        1 : -1
                    );
                }
            }
        },
        computed: {
            itemCount() {
                var tong = 0;
                for (var i = 0; i < this.cart.length; i++) {
                    tong += this.cart[i].quantity;
                }
                return tong;
            },
            filterten() {
                if (this.searchPhrase) {
                    return this.listViewData.filter(item => {
                        return this.searchPhrase
                            .toLowerCase()
                            .split("")
                            .every(v => item.ten.toLowerCase()
                                .includes(v));
                    });
                } else {
                    return this.listViewData;
                }
            },
            rowCount() {
                //lÃ m trÃ²n
                return Math.ceil(this.listViewData.length / this.itemsPerRow);
            }
        },

        data() {
            return {
                searchPhrase: "",
                sort: "Asc",
                listViewData: [{
                        invId: 1,
                        con: 6,
                        ten: "Cookie Cream",
                        mota: "vị hòa quyện đặc trưng thì dù ở quán nào cũng không thể thiếu",
                        artist: "a",
                        price: 19000,
                        quantity: 1,
                        imageUrl: "~/assets/image/crem.jpg"
                    },
                    {
                        invId: 1,
                        con: 6,
                        ten: "Trà trái cây",
                        mota: "Hương vị lạ miệng từ sự hòa quyện của vị phô mai đặc trưng",
                        artist: "c",
                        price: 21000,
                        quantity: 1,
                        imageUrl: "~/assets/image/tra.jpg"
                    },
                    {
                        invId: 1,
                        con: 6,
                        ten: "latte",
                        mota: "có lớp kem lạnh siêu béo luôn,có lớp kem lạnh siêu béo luôn",
                        artist: "k",
                        price: 35000,
                        quantity: 1,
                        imageUrl: "~/assets/image/latte.jpg"
                    },
                    {
                        invId: 1,
                        con: 6,
                        ten: "Trà đào cam sả",
                        mota: "trái cây gọt sẵn và trái cây tô,thơm ngon bổ dưỡng",
                        artist: "b",
                        price: 18000,
                        quantity: 1,
                        imageUrl: "~/assets/image/dao.jpg"
                    },
                    {
                        invId: 1,
                        con: 4,
                        ten: "Bia Úp Ngược",
                        mota: " Một cốc matcha đá xay với vị hơi ngọt, sệt như kem giúp bạn giải nhiệt",
                        artist: "g",
                        price: 26000,
                        quantity: 1,
                        imageUrl: "~/assets/image/bia.jpg"
                    },
                    {
                        invId: 1,
                        con: 5,
                        ten: "Đồ Chiên",
                        mota: "Dĩa đồ chiên với đủ thứ,thơm ngon bổ dưỡng",
                        artist: "x",
                        price: 36000,
                        quantity: 1,
                        imageUrl: "~/assets/image/ca.jpg"
                    }
                ],
                itemsPerRow: 1,
                cart: []
            };
        }
    };
</script>

<style>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }

    .album-image {
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
</style>