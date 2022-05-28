<template>
    <Page>
        <StackLayout class="p-20" backgroundImage="~/assets/image/bg2.png">
            <Label text="số điện thoại:" />
            <TextField v-model="province" hint="Enter provinces..."
                style="font-weigt: bold font-size=30px" />
            <Label text="địa chỉ giao hàng :" />
            <TextField v-model="city" hint="Enter city..."
                style="font-weigt: bold font-size=30px" />
            <Button backgroundColor="#3366FF" class="btn btn-online"
                text="cập nhật" @tap="closeThisModel" />
            <!-- <Image @tap="closeThisModel"
                src="https://play.nativescript.org/dist/assets/img/NativeScript_logo.png" /> -->
        </StackLayout>
    </Page>
</template>
<script>
    export default {
        // truyền qua đây 2 thuộc tính là province và city
        props: ["province", "city"],
        data() {
            return {
                province: "", // province:"tân phú"
                city: "" // city:"hcm"
            };
        },
        // vì provinces bên cha nó chứa là 1 đối tượng có 2 thuộc tính là province và city
        // nên khi con gửi về cho cha thì cũng phải là 1 đối tượng
        methods: {
            closeThisModel() {
                //  gửi về cha khi kết thức modal
                this.$modal.close({
                    province: this.province,
                    city: this.city
                });
            }
        }
    };
</script>