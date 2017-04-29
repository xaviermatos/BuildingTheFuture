$(document).ready(function() {
    $('select').material_select();

    $('#materials').submit(function(event) {
        event.preventDefault();

        var $form = $(this);
        var serialize = $form.serialize();

        var separate = serialize.split('&');
        var selected_materials = separate.map(function(materials) {
            return materials.replace(/\w{4,6}\W/g, '');
        });

        console.log(selected_materials);
        addResistance(selected_materials);
    });


    // function woodResis(){}
    console.log("loaded material.js");
    $(".house").css("border-bottom-color", "red")
    $('#roof').change(function() {
        var roofColor = $("#roof").val();
        console.log("roof color is " + roofColor);
        if (roofColor === "Wood") {
            $(".house").css("border-bottom-color", "brown")
        }

        else if (roofColor === "Brick") {
            $(".house").css("border-bottom-color", "red")
        }

        else if (roofColor === "Concrete") {
            $(".house").css("border-bottom-color", "darygray")
        }

        else if (roofColor === "Steel") {
            $(".house").css("border-bottom-color", "gray")
        }
    });

    $('#frame').change(function() {
        var frameColor = $("#frame").val();
        if (frameColor === "Wood") {
            $(".house").addClass("frame-wood")
        }

        else if (frameColor === "Brick") {
            $(".house").addClass("frame-brick")
        }

        else if (frameColor === "Concrete") {
            $(".house").addClass("frame-concrete")
        }

        else if (frameColor === "Steel") {
            console.log("steel clicked")
            $(".house").addClass("frame-steel")
        }
    });
    
        $('#walls').change(function() {
        var wallsColor = $("#walls").val();
        $(".house:after").css("background", "red")
        if (wallsColor === "Wood") {
            $(".house:after").css("background", "blue")
        }

        else if (wallsColor === "Brick") {
            $(".house:after").css("background", "yellow")
        }

        else if (wallsColor === "Concrete") {
            $(".house:after").css("background", "green")
        }

        else if (wallsColor === "Steel") {
            $(".house:after").css("background", "white")
        }
    });

});

var house_resistance = {
    flood_resistance: 0,
    hurricane_resistance: 0,
    earthquake_resistance: 0
};

var wood = {
    flood_resistance: 50,
    hurricane_resistance: 80,
    earthquake_resistance: 90
};

var steel = {
    flood_resistance: 70,
    hurricane_resistance: 60, 
    earthquake_resistance: 50
};

var concrete =  {
    flood_resistance: 80,
    hurricane_resistance: 85,
    earthquake_resistance: 70
};

var brick =  {
    flood_resistance: 80,
    hurricane_resistance: 85,
    earthquake_resistance: 70
};

function addResistance(selected_materials) {
    for (var i = 0; i < selected_materials.length; i++) {
        if (selected_materials[i] === "Wood") {
            woodResistance();
        }
        else if (selected_materials[i] = "Steel") {
            steelResistance();
        }
        else if (selected_materials[i] = "Concrete") {
            concreteResistance();
        } else if(selected_materials[i] = "Brick") {
            brickResistance();
        }
    }
  return house_resistance;
};


function woodResistance() {
    house_resistance.flood_resistance = house_resistance.flood_resistance + wood.flood_resistance;
    house_resistance.earthquake_resistance = house_resistance.earthquake_resistance + wood.earthquake_resistance;
    house_resistance.hurricane_resistance = house_resistance.hurricane_resistance + wood.hurricane_resistance;
};

function steelResistance() {
    house_resistance.flood_resistance = house_resistance.flood_resistance + steel.flood_resistance;
    house_resistance.earthquake_resistance = house_resistance.earthquake_resistance + steel.earthquake_resistance;
    house_resistance.hurricane_resistance = house_resistance.hurricane_resistance + steel.hurricane_resistance;
};

function concreteResistance() {
    house_resistance.flood_resistance = house_resistance.flood_resistance + concrete.flood_resistance;
    house_resistance.earthquake_resistance = house_resistance.earthquake_resistance + concrete.earthquake_resistance;
    house_resistance.hurricane_resistance = house_resistance.hurricane_resistance + concrete.hurricane_resistance;
};

function brickResistance() {
    house_resistance.flood_resistance = house_resistance.flood_resistance + brick.flood_resistance;
    house_resistance.earthquake_resistance = house_resistance.earthquake_resistance + brick.earthquake_resistance;
    house_resistance.hurricane_resistance = house_resistance.hurricane_resistance + brick.hurricane_resistance;
};