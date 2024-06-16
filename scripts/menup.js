document.addEventListener("DOMContentLoaded", function() {
    const opciones = document.querySelectorAll(".opcion");
    opciones.forEach(opcion => {
        opcion.addEventListener("click", function() {
            // Eliminar la clase 'active' de todas las opciones
            opciones.forEach(opcion => {
                opcion.classList.remove("active"); });
            // Agregar la clase 'active' a la opción actual
            this.classList.add("active");
			const opcionSeleccionada = this.id;
			switch(opcionSeleccionada) {
                case "Todo":
                    document.getElementById("Image_7").src = "img/bonsaiC.png";
					document.getElementById("Planta__Precio").innerHTML = "Bonsai Ciprés $10";
                    document.getElementById("Image_8").src = "img/tomillo.png";
					document.getElementById("Tomillo_12").innerHTML = "Tomillo $12";
					document.getElementById("Monstera").innerHTML = "Monstera";
                    document.getElementById("Image_36").src = "img/Monstera.png";
					document.getElementById("ID10_bx").innerHTML = "$10";
					document.getElementById("Ficus").innerHTML = "Ficus";
                    document.getElementById("Image_38").src = "img/ficus.png";
                    document.getElementById("ID8").innerHTML = "$8";
                    break;
                case "Oficina":
				document.getElementById("Image_7").src = "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RAMJEXUX3RGMROAXZRIZU6PYZE.jpg";
					document.getElementById("Planta__Precio").innerHTML = "Mini Cactus $11";
                    document.getElementById("Image_8").src = "https://pcfb.gumlet.io/images/articles/succulent-in-terra-cotta.jpeg?w=640&h=426&mode=crop&crop=smart&s=95f90126165673fdfef85b1e8df4a5ae";
					document.getElementById("Tomillo_12").innerHTML = "Suculenta $12";
					document.getElementById("Monstera").innerHTML = "Pothos";
                    document.getElementById("Image_36").src = "https://m.media-amazon.com/images/I/51zxXg6uC0S._AC_SY580_.jpg";
					document.getElementById("ID10_bx").innerHTML = "$10";
					document.getElementById("Ficus").innerHTML = "Bambú";
                    document.getElementById("Image_38").src = "https://media.glamour.mx/photos/64e4e548e7af699b8c68b217/4:3/w_2664,h_1998,c_limit/d%C3%B3nde-poner-el-bamb%C3%BA-de-la-suerte.jpg";
                    document.getElementById("ID8").innerHTML = "$8";
                    break;
                case "Casa":
					document.getElementById("Image_7").src = "https://bloomscape.com/wp-content/uploads/2022/10/bloomscape_sanseveria_zeylancia_sm_charcoal-scaled.jpg";
					document.getElementById("Planta__Precio").innerHTML = "Sansevieria $10";
                    document.getElementById("Image_8").src = "https://cdn.shopify.com/s/files/1/0086/2519/3040/products/helechoboston_480x480.jpg?v=1619052136";
					document.getElementById("Tomillo_12").innerHTML = "Helecho $12";
					document.getElementById("Monstera").innerHTML = "Palmera";
                    document.getElementById("Image_36").src = "https://imgix.be.green/63860775e5d91324309078.jpg?auto=compress";
					document.getElementById("ID10_bx").innerHTML = "$10";
					document.getElementById("Ficus").innerHTML = "Ficus";
                    document.getElementById("Image_38").src = "img/ficus.png";
                    document.getElementById("ID8").innerHTML = "$8";
                    break;
                case "Bonzais":
					document.getElementById("Image_7").src = "https://upload.wikimedia.org/wikipedia/commons/5/56/Serissa.jpg";
					document.getElementById("Planta__Precio").innerHTML = "S.Japonica $10";
                    document.getElementById("Image_8").src = "https://www.habibiplantitas.com/cdn/shop/products/bonsai-de-jade-planta-de-la-suerte-suculentas-cuidados-regalos-con-suculentas-regalos-para-hombres-regalo-de-pesame-capullo-de-mariposa-crisalida-pupa-habibi-plantitas.jpg?v=1680391120";
					document.getElementById("Tomillo_12").innerHTML = "Jade $12";
					document.getElementById("Monstera").innerHTML = "Carmona";
                    document.getElementById("Image_36").src = "https://jardinesdelbonsai.com/wp-content/uploads/2020/10/vivero113.jpg";
					document.getElementById("ID10_bx").innerHTML = "$10";
					document.getElementById("Ficus").innerHTML = "Zelkova";
                    document.getElementById("Image_38").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKX21jF43IPfyI5A3FihRDU_jy15QBW7VS1A&s";
                    document.getElementById("ID8").innerHTML = "$8";
                    break;
            }
        });
    });
});