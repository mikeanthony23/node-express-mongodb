require("@babel/polyfill");
var $cQivH$leaflet = require("leaflet");
var $cQivH$axios = require("axios");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}


const $34d42e5ece157c1e$var$mapContainer = document.getElementById("map");
if ($34d42e5ece157c1e$var$mapContainer) {
    var $34d42e5ece157c1e$var$map = (0, ($parcel$interopDefault($cQivH$leaflet))).map("map").setView([
        51.505,
        -0.09
    ], 13);
    (0, ($parcel$interopDefault($cQivH$leaflet))).tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo($34d42e5ece157c1e$var$map);
}
var $34d42e5ece157c1e$export$2e2bcd8739ae039 = $34d42e5ece157c1e$var$map;



const $94d08129b2afe48f$export$516836c6a9dfc573 = ()=>{
    const el = document.querySelector(".alert");
    if (el) el.parentElement.removeChild(el);
};
const $94d08129b2afe48f$export$de026b00723010c1 = (type, msg)=>{
    $94d08129b2afe48f$export$516836c6a9dfc573();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
    window.setTimeout($94d08129b2afe48f$export$516836c6a9dfc573, 5000);
};


const $433b644962c26f49$export$596d806903d1f59e = async (email, password)=>{
    try {
        const res = await (0, ($parcel$interopDefault($cQivH$axios)))({
            method: "POST",
            url: "/api/v1/users/login",
            data: {
                email: email,
                password: password
            }
        });
        if (res.data.status === "success") {
            (0, $94d08129b2afe48f$export$de026b00723010c1)("success", "Logged in successfully");
            window.setTimeout(()=>{
                location.assign("/");
            }, 1500);
        }
    } catch (err) {
        console.log(err.response);
        (0, $94d08129b2afe48f$export$de026b00723010c1)("error", err.response.data.message);
    }
};
const $433b644962c26f49$export$a0973bcfe11b05c9 = async ()=>{
    try {
        const res = await (0, ($parcel$interopDefault($cQivH$axios)))({
            method: "GET",
            url: "/api/v1/users/logout"
        });
        res.data.status = "success";
        location.reload(true);
        location.href = "/";
    } catch (err) {
        (0, $94d08129b2afe48f$export$de026b00723010c1)("error", "Error logging out! Try again");
    }
};




const $6842e7be16478138$export$f558026a994b6051 = async (data, type)=>{
    // type is either 'passsword' or 'data'
    try {
        const url = type === "password" ? "/api/v1/users/updateMyPassword" : "/api/v1/users/updateMe";
        const res = await (0, ($parcel$interopDefault($cQivH$axios)))({
            method: "PATCH",
            url: url,
            data: data
        });
        if (res.data.status === "success") {
            (0, $94d08129b2afe48f$export$de026b00723010c1)("success", `${type.toUpperCase()} update successfully`);
            window.setTimeout(()=>{
                location.assign("/me");
            }, 1500);
        }
    } catch (err) {
        console.log(err.response);
        (0, $94d08129b2afe48f$export$de026b00723010c1)("error", err.response.data.message);
    }
};




const $73e585bd0c7d6b97$var$stripe = Stripe("pk_test_51OY3XhBa66NB5bPqkfz0Uzs9wIQMgMo3tFL9YuPWNs0guxmsCpN2ZTIWQHaEmS7oYkVQMikyT83vlgqig2mUInHO00i30TXuVj");
const $73e585bd0c7d6b97$export$8d5bdbf26681c0c2 = async (tourId)=>{
    // 1) Get checkout session from API
    try {
        const session = await (0, ($parcel$interopDefault($cQivH$axios)))(`/api/v1/bookings/checkout-session/${tourId}`);
        // 2) Create checkout form + charge credit card
        await $73e585bd0c7d6b97$var$stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err) {
        console.log(err);
        (0, $94d08129b2afe48f$export$de026b00723010c1)("error", err);
    }
};


const $c74e663a61ed842a$var$loginForm = document.querySelector(".form--login");
const $c74e663a61ed842a$var$logOutBtn = document.querySelector(".nav__el--logout");
const $c74e663a61ed842a$var$userDataForm = document.querySelector(".form-user-data");
const $c74e663a61ed842a$var$userPasswordForm = document.querySelector(".form-user-password");
const $c74e663a61ed842a$var$bookBtn = document.getElementById("book-tour");
if ($c74e663a61ed842a$var$loginForm) $c74e663a61ed842a$var$loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    (0, $433b644962c26f49$export$596d806903d1f59e)(email, password);
});
if ($c74e663a61ed842a$var$userDataForm) $c74e663a61ed842a$var$userDataForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const form = new FormData();
    form.append("name", document.querySelector(".form-user-data #name").value);
    form.append("email", document.querySelector(".form-user-data #email").value);
    form.append("photo", document.querySelector(".form-user-data #photo").files[0]);
    console.log(form);
    (0, $6842e7be16478138$export$f558026a994b6051)(form, "data");
});
if ($c74e663a61ed842a$var$userPasswordForm) {
    $c74e663a61ed842a$var$userPasswordForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        document.querySelector(".btn--save-password").textContent = "Updating...";
        const passwordCurrent = document.querySelector("#password-current").value;
        const password = document.querySelector("#password").value;
        const passwordConfirm = document.querySelector("#password-confirm").value;
        (0, $6842e7be16478138$export$f558026a994b6051)({
            passwordCurrent: passwordCurrent,
            password: password,
            passwordConfirm: passwordConfirm
        }, "password");
    });
    document.querySelector(".btn--save-password").textContent = "Save password";
    document.querySelector("#password-current").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#password-confirm").value = "";
}
if ($c74e663a61ed842a$var$logOutBtn) $c74e663a61ed842a$var$logOutBtn.addEventListener("click", (0, $433b644962c26f49$export$a0973bcfe11b05c9));
if ($c74e663a61ed842a$var$bookBtn) $c74e663a61ed842a$var$bookBtn.addEventListener("click", (e)=>{
    e.target.textContent = "Processing...";
    const { tourId: tourId } = e.target.dataset;
    (0, $73e585bd0c7d6b97$export$8d5bdbf26681c0c2)(tourId);
});


//# sourceMappingURL=app.js.map
