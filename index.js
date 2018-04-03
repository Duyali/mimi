//====================侧导航开始==================================================
{
    let morething = document.querySelectorAll(".morething");
    let navli = document.querySelectorAll(".lun_nav_li");
    navli.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            morething[index].style.display="block";
        }
        ele.onmouseleave=function(){
            morething[index].style.display="none";
        }

    })
}
//=================================nav开始=====================================
{
    let navtitle = document.querySelectorAll(".nav_word .span");
    let navbottom = document.querySelectorAll(".nwb_bottom");
    let navword_box = document.querySelectorAll(".nav_word_box");
    console.log(navtitle);
    console.log(navbottom);
    console.log(navword_box);
    let obj = navbottom[0];
    navword_box.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.classList.remove("nav_active");
            navbottom[index].style.height = "230px";
            navbottom[index].classList.add("nav_active");
            obj = navbottom[index];
        }
        ele.onmouseleave=function(){
            navbottom[index].style.height = "0";
        }

    })
}
//==========================banner开始===================================
{
    const imgs = document.querySelectorAll(".lun_img img");
    let pagers = document.querySelectorAll(".circle01");
    let lunbos = document.querySelector("#lunbo");
    let next = document.querySelector(".lun_right");
    let pre = document.querySelector(".lun_left");

    pagers.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n = index;
        }
    })

    let n = 0;

    function move() {
        // n++;
        // n=n%5;
        if (n === imgs.length) {
            n = 0;
        }
        if (n < 0) {
            n = imgs.length - 1;
        }
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
        n++;
    }

    var t = setInterval(move, 3000);

    lunbos.onmouseenter = function () {
        clearInterval(t);
    }
    lunbos.onmouseleave = function () {
        t = setInterval(move, 3000);
    }


    next.onclick = function () {
        move();
    }
    pre.onclick = function () {
        n -= 2;
        move();
    }
}
// =========================明星单品开始========================================
{
    function mingxin_wheel(a) {
        let star_pre = a.querySelector(".start_btn2");
        let star_next = a.querySelector(".start_btn1");
        let star_inner = a.querySelector(".star_inner");
        let screen = a.querySelectorAll(".star_inner_screen");
        let n = 0;
        star_next.onclick = function () {
            n++;
            star_pre.classList.remove("disable");
            if (n === screen.length - 1) {
                this.classList.add("disable");
            }
            if (n === screen.length) {
                n = screen.length - 1;
                return;
            }
            star_inner.style.marginLeft = -1240 * n + "px";
        }
        star_pre.onclick = function () {
            n--;
            star_next.classList.remove("disable");
            if (n === 0) {
                this.classList.add("disable");
            }
            if (n === -1) {
                n = 0;
                return;
            }
            star_inner.style.marginLeft = -1240 * n + "px";
        }
    }

    let wheel_model = document.querySelectorAll(".mingxin_wheel_model");
    wheel_model.forEach(function (ele) {
        mingxin_wheel(ele);
    })
}
// ==================================搭配=========================================
{
    function card_content(a) {
        let dapei_title = a.querySelectorAll(".dapei_right span");
        let dapei_cont = a.querySelectorAll(".js_card");
        dapei_title.forEach(function (ele, index) {
            // let obj=dapei_title[0];
            ele.onmouseenter = function () {
                // let obj=dapei_title[0];
                for (let i = 0; i < dapei_title.length; i++) {
                    dapei_cont[i].classList.remove("dapei_active");
                    dapei_title[i].classList.remove("dapei_rightjs");
                }
                // obj.classList.remove("dapei_rightjs");
                this.classList.add("dapei_rightjs");
                // obj=this;
                dapei_cont[index].classList.add("dapei_active");
            }
        })
    }

    var js_card_content = document.querySelectorAll(".js_bigbox");
    js_card_content.forEach(function (ele) {
        card_content(ele);
    })
}
//===============================为你推荐开始==================================

//=======================内容开始=======================================================
{
    function con_wheel(a) {
        let inner = a.querySelector(".movebox_inner");
        let pre = a.querySelector(".fuhei_kuang");
        let next = a.querySelector(".fuhei_kuangyou");
        let figure = a.querySelectorAll(".con_box");
        let doit = a.querySelectorAll(".little_doit");
        // console.log(doit);
        // console.log(inner, pre, next, figure, doit);
        let n = 0;
        next.onclick = function () {
            n++;
            if (n === figure.length) {
                n = figure.length - 1;
                return;
            }
            inner.style.marginLeft = -296 * n + "px";
            doit[n].classList.add("con_active");
            doit[n].classList.add("dapei_rightjs");
            doit[n - 1].classList.remove("con_active");
            obj = doit[n];
        }
        pre.onclick = function () {
            n--;
            if (n < 0) {
                n = 0;
                return;
            }
            inner.style.marginLeft = -296 * n + "px";
            doit[n].classList.add("con_active");
            doit[n + 1].classList.remove("con_active");
            obj = doit[n];
        }

        let obj = doit[0];
        doit.forEach(function (ele, index) {
            ele.onclick = function () {
                obj.classList.remove("con_active");
                this.classList.add("con_active");
                obj = this;
                inner.style.marginLeft = index * -296 + "px";
                n = index;
            }
        })
    }

    let hezi = document.querySelectorAll(".hezi");
    hezi.forEach(function (ele) {
        con_wheel(ele);
    })
}