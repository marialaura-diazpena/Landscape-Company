function planterType(selection) {
    var SquaRect, Cylinder, Spherical, Cone;
    var SquaRectSection,  CylinderSection, SphericalSection, ConeSection;
    zero = document.querySelectorAll('.zero input');
    SquaRect = document.querySelector('.SquaRect input');
    Cylinder = document.querySelector('.Cylinder input');
    Spherical = document.querySelector('.Spherical input');
    Cone = document.querySelector('.Cone input');

    SquaRectSection = document.getElementById('SquaRectDiv');
    CylinderSection = document.getElementById('CylinderDiv');
    SphericalSection = document.getElementById('SphericalDiv');
    ConeSection = document.getElementById('ConeDiv');

    switch (selection){
    case 'zero':

            SquaRect.disabled = true;
            SquaRectSection.style.display = "none";

            Cylinder.disabled = true;
            CylinderSection.style.display = "none";

            Spherical.disabled = true;
            SphericalSection.style.display = "none";

            Cone.disabled = true;
            ConeSection.style.display = "none";
        break;
    case 'SquaRect':

            SquaRect.disabled = false;
            SquaRectSection.style.display = "block";

            Cylinder.disabled = true;
            CylinderSection.style.display = "none";

            Spherical.disabled = true;
            SphericalSection.style.display = "none";

            Cone.disabled = true;
            ConeSection.style.display = "none";
        break;

    case 'Cylinder':

            SquaRect.disabled = true;
            SquaRectSection.style.display = "none";

            Cylinder.disabled = false;
            CylinderSection.style.display = "block";

            Spherical.disabled = true;
            SphericalSection.style.display = "none";

            Cone.disabled = true;
            ConeSection.style.display = "none";
        break;

    case 'Spherical':

            SquaRect.disabled = true;
            SquaRectSection.style.display = "none";

            Cylinder.disabled = true;
            CylinderSection.style.display = "none";

            Spherical.disabled = false;
            SphericalSection.style.display = "block";

            Cone.disabled = true;
            ConeSection.style.display = "none";

        break;
    
    case 'Cone':

            SquaRect.disabled = true;
            SquaRectSection.style.display = "none";

            Cylinder.disabled = true;
            CylinderSection.style.display = "none";

            Spherical.disabled = true;
            SphericalSection.style.display = "none";

            Cone.disabled = false;
            ConeSection.style.display = "block";

        break;
    }
}


function SquaRect() {
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var postalCode = document.getElementById('postalCode').value;

    var receipt = '';

    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;
    var height = document.getElementById('heightSR').value;

    var volume = length*width*height;
    var SRprice = volume * 0.10;

    receipt += "<h2>Order Form</h2>";
    receipt += "<label>Full name: </label>"+ lName + ", " + fName;
    receipt += "<label>Address: </label>" + address;
    receipt += "<label>Postal Code: </label>" + postalCode;
    receipt += "<p></p>"
    receipt += "<label>Type of Planter: </label> Square/Rectangular Planter";
    receipt += "<label>Dimensions: </label>" + length + "x" + width + "x" + height + "<label>Volume: </label>" + volume.toFixed(2);
    receipt += "<label>Total Cost:</label>" + "$" + SRprice.toFixed(2);

    document.getElementById('displayOrder').innerHTML= receipt;
    
}

function Cylinder() {
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var postalCode = document.getElementById('postalCode').value;

    var receipt = '';

    var radius = document.getElementById('radiusCy').value;
    var height = document.getElementById('heightCy').value;

    var volume = 3.14159265359 * radius * radius * height;

    var cyPrice = volume * 0.12;

    receipt += "<h2>Order Form</h2>";
    receipt += "<label>Full name: </label>"+ lName + ", " + fName;
    receipt += "<label>Address: </label>" + address;
    receipt += "<label>Postal Code: </label>" + postalCode;
    receipt += "<p></p>"
    receipt += "<label>Type of Planter: </label> Flat Bottomed Cylinder" ;
    receipt += "<label>Dimensions: </label>" + radius + "x" + height + "<label>Volume: </label>" + volume.toFixed(2);
    receipt += "<label>Total Cost:</label>" + "$" + cyPrice.toFixed(2);

    document.getElementById('displayOrder').innerHTML= receipt;

} 

function Spherical() {
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var postalCode = document.getElementById('postalCode').value;

    var receipt = '';

    var radius = document.getElementById('radiusSph').value;

    var volume = 1/2 * (4/3*3.14159265359 * radius * radius * radius); 
    
    var sphPrice = volume * 0.15;

    receipt += "<h2>Order Form</h2>";
    receipt += "<label>Full name: </label>"+ lName + ", " + fName;
    receipt += "<label>Address: </label>" + address;
    receipt += "<label>Postal Code: </label>" + postalCode;
    receipt += "<p></p>"
    receipt += "<label>Type of Planter: </label> Half Spherical";
    receipt += "<label>Dimensions: </label>" + radius + "<label>Volume: </label>" + volume.toFixed(2);
    receipt += "<label>Total Cost:</label>" + "$" + sphPrice.toFixed(2);

    document.getElementById('displayOrder').innerHTML= receipt;

}

function Cone() {
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var postalCode = document.getElementById('postalCode').value;

    var receipt = '';

    var radius1 = document.getElementById('radius1Co').value;
    var radius2 = document.getElementById('radius2Co').value;
    var height = document.getElementById('heightCo').value;

    var volume = 1/3 * 3.14159265359 *(radius1*radius1*radius1*radius2*radius2*radius2)*height;

    var conePrice = volume * 0.20;

    receipt += "<h2>Order Form</h2>";
    receipt += "<label>Full name: </label>"+ lName + ", " + fName;
    receipt += "<label>Address: </label>" + address;
    receipt += "<label>Postal Code: </label>" + postalCode;
    receipt += "<p></p>"
    receipt += "<label>Type of Planter: </label> Truncated Cone";
    receipt += "<label>Dimensions: </label>" + radius1 + "x" + radius2 + "x" + height + "<label>Volume: </label>" + volume.toFixed(2);
    receipt += "<label>Total Cost:</label>" + "$" + conePrice.toFixed(2);

    document.getElementById('displayOrder').innerHTML= receipt;


}