var app = new Vue({
    el: '#app',
    data: {
        temp: {},
        cities: ["Madrid", "London", "Moscow", "Caracas", "Bogota"],
        city: "",
        nombre: "",
        temperatura: "",
        temperaturaMaxima: "",
        temperaturaMinima: "",
        HumedadMax: "",
        Statuss: "",

    },
    created: function () {
        /*document.body.className = "loading";*/
        //        this.callAjax();
    },
    methods: {
        callAjax: function () {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&APPID=ae8f488ff6e6f5c775053b377bc54191", {
                method: "GET",

            }).then(function (response) {
                if (response.ok) {
                    return response.json();
                }

            }).then(function (json) {
                app.temp = json;
                //                document.body.className = "";
                app.nombre = app.temp.name;
                app.changeKel()
                console.log(app.temp)
                app.temperatura = app.temp.main.temp;
                app.temperaturaMaxima = app.temp.main.temp_max;
                app.temperaturaMinima = app.temp.main.temp_min;
                app.HumedadMax = app.temp.main.humidity;
                app.Statuss = app.temp.weather[0].main;
            

            }).catch(function (error) {
                console.log("Request failed:" + error.message);

            });
        },
        callCity: function () {
            this.city = document.getElementById("menu").value;
            this.callAjax()
        },
        changeKel: function () {
            app.temp.main.temp = app.temp.main.temp - 272, 15;
            app.temp.main.temp = app.temp.main.temp.toFixed(1);
            console.log(app.temp.main.temp);
            app.temp.main.temp_max = app.temp.main.temp_max - 272, 15;
            app.temp.main.temp_max = app.temp.main.temp_max.toFixed(1);
            app.temp.main.temp_min = app.temp.main.temp_min - 272, 15;
            app.temp.main.temp_min = app.temp.main.temp_min.toFixed(1);

        }
    },
});
