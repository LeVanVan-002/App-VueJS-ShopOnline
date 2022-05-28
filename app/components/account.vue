<template>
 
    <Page backgroundImage="~/assets/image/bg2.png">
        <!-- backgroundImage="~/image/bg.png" -->

        <GridLayout columns="*" rows="*,auto">
            <StackLayout col="0" row="0">

                <StackLayout paddingLeft="40" paddingRight="40"
                    paddingTop="20" paddingBottom="5" marginTop="20"
                    backgroundImage="~/assets/image/ava2.jpg"
                    borderRadius="60" height="160" width="70%" class="img">
                    <!-- bởi vì trên image có dòng rap Việt -->
                    <GridLayout columns="*" rows="auto,auto">
                        <Label text="l.van" col="0" row="0" fontWeight="bold"
                            fontSize="18" color="aqua" />
                    </GridLayout>
                </StackLayout>

                <RadListView ref="listView" for="item in provinces"
                    @itemTap="onItemTap" swipeActions="true"
                    @itemSwipeProgressStarted="onSwipeStarted">


                    <StackLayout>
                        <v-template>
                            <!-- thiết kế mới phát hàng và ViewALl -->
                            <GridLayout columns="auto,auto,auto"
                                rows="auto,auto,auto,auto,auto,auto">
                                <Label text=" Thông tin cá nhân  " col="0"
                                    row="0" paddingLeft="10" fontSize="20"
                                    color="#000000" />
                                <Image width="30" height="30" col="1" row="0"
                                    paddingLeft="10"
                                    src="~/assets/image/tich.png" />
                                <!-- <Label text="View All(146)" col="1" row="0"
                                paddingLeft="10" fontSize="18"
                                color="#000000" /> -->
                                <Label paddingLeft="10" fontSize="16" col="0"
                                    row="1" text="Họ & Tên:" />
                                <Label fontSize="16" paddingLeft="9" col="0"
                                    row="2" text="sđt:" />
                                <Label paddingLeft="9" fontSize="16" col="0"
                                    row="3" text="địa chỉ :" />
                                <Label paddingLeft="9" fontSize="13" col="0"
                                    row="4" text="-----------------------------" />
                                <!--  -->
                                <!-- hiển thị -->
                                <Label textAlignment="left" fontSize="14"
                                    col="1" row="1" text="Lê Văn Văn" />
                                <Label textAlignment="left" fontSize="13"
                                    col="1" row="2" :text="item.province" />
                                <Label textAlignment="left" fontSize="13"
                                    col="1" row="3" :text="item.city" />
                                <Label textAlignment="left" fontSize="13"
                                    col="1" row="4" text="------------------------------------------" />
                                <!--  -->
                                <Image width="60" height="60" col="0" row="5"
                                    @tap="$navigateBack(HelloWorld)"
                                    src="~/assets/images/back2.png" />
                                <StackLayout col="1" row="5">
                                    <Image width="30" height="30"
                                        src="~/assets/image/edit.png"
                                        @tap="onLeftSwipeClick" />
                                    <StackLayout>
                            </GridLayout>
                            <!-- thiết kế nội dung mới phát hành -->
                        </v-template>
                        <v-template name="itemswipe">
                            <GridLayout columns="auto,*,auto">
                                <!-- thiết kế Edit bên trái -->
                                <StackLayout id="edit-view" col="0"
                                    class="swipe-item left"
                                    orientation="horizontal"
                                    @tap="onLeftSwipeClick">
                                    <LabeltextAlignment="center"
                                        verticalAlignment="center"
                                        horizontalAlignment="center"
                                        width="70" height="70" />
                                </StackLayout>
                                <!-- thiết kế Delete bên phải -->
                                <StackLayout id="delete-view" col="2"
                                    class="swipe-item right"
                                    orientation="horizontal"
                                    @tap="onRightSwipeClick">
                                    <Label textAlignment="center"
                                        verticalAlignment="center"
                                        horizontalAlignment="center"
                                        width="70" height="70" />
                                </StackLayout>
                            </GridLayout>

                        </v-template>



                    </StackLayout>
                </RadListView>

        </GridLayout>
    </Page>
</template>

<script>
    import AddComponent from "./add";
    export default {
        data() {
            return {
                provinces: [{
                    province: "07631 098 11",
                    city: "ấp 4 đông thạnh Hóc môn  tp.hcm"
                }]
            };
        },
        methods: {
            onSwipeStarted({
                data,
                object
            }) {
                const swipeLimits = data.swipeLimits; // Delete, Edit
                const swipeView = object; // đối tượng hiện tại đang kéo là ai
                const leftItem = swipeView.getViewById("edit-view"); //Edit
                const rightItem = swipeView.getViewById(
                "delete-view"); //Delete
                // swipeLimits.left = leftItem.getMeasuredWidth(); // độ rộng của Edit là 70, tức là khi kéo ko vượt quá 70
                // swipeLimits.right = rightItem.getMeasuredWidth(); //độ rộng phải 70
                // swipeLimits.threshold = leftItem.getMeasuredWidth()/2;
                // giới hạn của ngưỡng kéo
            },
            //  phương thức để điều hướng tới 1 trang khác
            showModel() {
                // data 1 đối tượng được nhận về từ con gửi{province:tân phú, city:hcm}
                this.$showModal(AddComponent).then(data => {
                    // lấy đối tượng data add vào provinces
                    this.provinces.push(data);
                });
            },
            // phương edit
            // cần lấy đc vị trí của đối tượng mà mình muốn edit
            // cần lấy đc nội dung cần edit, và gửi nội dung này qua cho con AddCoponent
            // sau đó con nhận và edit gửi dữ liệu ngược về cho cha
            onLeftSwipeClick({
                object
            }) {
                var item = object
                .bindingContext; // lấy đc nội dung của 1 đối tượng
                var position = this.provinces.indexOf(object
                .bindingContext); // đối tượng chạm vào có nội dung và xem nd trong provinces ở vị trí(indexOf)
                // vừa điều hướng, vừa gửi dữ lieuj và vừa nhận
                this.$showModal(AddComponent, {
                    props: {
                        province: item.province,
                        city: item.city
                    }
                }).then(data => {
                    this.provinces[position].province = data.province;
                    this.provinces[position].city = data.city;
                });
            }
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
</style>