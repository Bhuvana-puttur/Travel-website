// packages and services array object
const packages = [
    {
        image: "images/italy.jpg",
        title: "Italy",
        subTitle: "Italy is great place to visit.",
        price: 200,
        rating: 3.7
    },
    {
        image: "images/singapore.jpeg",
        title: "Singapore",
        subTitle: "Singapore is great place to visit.",
        price: 190,
        rating: 2.2
    },
    {
        image: "images/dubai.jpg",
        title: "Dubai",
        subTitle: "Dubai is great place to visit.",
        price: 250,
        rating: 4.2
    },
    {
        image: "images/india.jpeg",
        title: "India",
        subTitle: "India is great place to visit.",
        price: 150,
        rating: 4.9
    },
    {
        image: "images/maldives.jpg",
        title: "Maldives",
        subTitle: "Maldives is great place to visit.",
        price: 350,
        rating: 4.7
    },
    {
        image: "images/thailand.jpg",
        title: "Thailand",
        subTitle: "Thailand is great place to visit.",
        price: 300,
        rating: 2.8
    },
    {
        image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Indonesia",
        subTitle: "Indonesia is great place to visit.",
        price: 310,
        rating: 3.9
    },
    {
        image: "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "United States",
        subTitle: "United States is great place to visit.",
        price: 460,
        rating: 4.0
    },
    {
        image: "https://images.pexels.com/photos/2915957/pexels-photo-2915957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "China",
        subTitle: "China is great place to visit.",
        price: 270,
        rating: 3.4
    },
]

const services = [
    {
        name: "Affordable Hotel",
        description: "Experience comfortable and affordable accommodation at our hotels."
    },
    {
        name: "Food & Drinks",
        description: "Enjoy a diverse range of delicious food and refreshing drinks at our establishments."
    },
    {
        name: "Safety Guide",
        description: "Ensuring your safety is our top priority. Follow our safety guides for a secure experience."
    },
    {
        name: "Adventure Tours",
        description: "Embark on thrilling adventures with our curated adventure tours."
    },
    {
        name: "Wellness Retreats",
        description: "Indulge in rejuvenating wellness retreats to refresh your mind and body."
    },
    {
        name: "Cultural Experiences",
        description: "Immerse yourself in rich cultural experiences offered by our expert guides."
    },
]



const galleryImages = [
    {
        imageUrl: "images/img3.jpg"
    },
    {
        imageUrl: "images/img6.jpg"
    },
    {
        imageUrl: "images/img5.jpg"
    },
    {
        imageUrl: "https://images.pexels.com/photos/19109585/pexels-photo-19109585/free-photo-of-victoria-memorial-museum-in-kolkata-seen-from-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        imageUrl: "images/img4.jpg"
    },
    {
        imageUrl: "images/img2.jpg"
    },
    {
        imageUrl: "images/img7.jpg"
    },
    {
        imageUrl: "images/img8.jpg"
    },
    
]

// package and service section reference.
const packageSection = document.getElementById('package-section');
const serviceSection = document.getElementById('services-section');
const gallerySection = document.getElementById('gallery-section');

const packageBookingBtn = document.getElementById('packageBookingBtn');

// form input elements reference.
const whereTo = document.getElementById('whereTo');
const persons = document.getElementById('persons');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const description = document.getElementById('description');

// error elements reference for input fields.
const whereToError = document.getElementById('whereToError');
const personsError = document.getElementById('personsError');
const startDateError = document.getElementById('startDateError');
const endDateError = document.getElementById('endDateError');
const descriptionError = document.getElementById('descriptionError');

// booking form reference
const bookingForm = document.getElementById('bookingForm');

// functions to validate the form input fields.
function validateNotEmpty(value, errorElement, errorMessage) {
    if (!value) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validatePositiveInteger(value, errorElement, errorMessage) {
    if (value < 1) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validateDateNotInPast(value, currentDateValue, errorElement, errorMessage) {
    if (value < currentDateValue) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validateEndDateAfterStartDate(endDateValue, startDateValue, errorElement, errorMessage) {
    if (endDateValue < startDateValue) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validateDescriptionLength(value, errorElement, errorMessage, minLength) {
    if (value.length < minLength) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

// function to handle booking form.
function handleFormSubmit(e) {
    var currentDate = new Date().toISOString().split('T')[0];

    var isValid = true;

    if (!whereTo.value || !persons.value || !startDate.value || !endDate.value || !description.value) {
        isValid &= validateNotEmpty(whereTo.value, whereToError, "Error: Complete this field.");
        isValid &= validateNotEmpty(persons.value, personsError, "Error: Complete this field.");
        isValid &= validateNotEmpty(startDate.value, startDateError, "Error: Complete this field.");
        isValid &= validateNotEmpty(endDate.value, endDateError, "Error: Complete this field.");
        isValid &= validateNotEmpty(description.value, descriptionError, "Error: Complete this field.");
    } else {
        isValid &= validatePositiveInteger(persons.value, personsError, "Error: Please add at least one person.");
        isValid &= validateDateNotInPast(startDate.value, currentDate, startDateError, "Error: Start Date cannot be in the past.");
        isValid &= validateDateNotInPast(endDate.value, currentDate, endDateError, "Error: End Date cannot be in the past.");
        isValid &= validateEndDateAfterStartDate(endDate.value, startDate.value, endDateError, "Error: End Date cannot be prior to Start Date.");
        isValid &= validateDescriptionLength(description.value, descriptionError, "Error: Description must be at least 50 characters.", 50);
    }

    if (isValid) {
        alert(`Thank You!\nYour package has been booked successfully for ${whereTo.value}.`);
        bookingForm.reset();
    }
    e.preventDefault();
}

// function to create HTML package card.
function createPackage() {
    packages.map((package) => {
        let packageCard = document.createElement('div');
        let packageCardContent = document.createElement('div');
        let image = document.createElement('img');
        let title = document.createElement('h3');
        let subTitle = document.createElement('p');
        let price = document.createElement('p');
        let rating = document.createElement('div');
        let button = document.createElement('button');

        image.src = package.image;
        image.alt = package.title;
        title.textContent = package.title;
        subTitle.textContent = package.subTitle;
        price.innerHTML = `$${package.price}`;
        button.textContent = 'Book';
        rating.style.marginBlock = '5px';
        price.classList.add('price');

        packageCard.classList.add('package-card');
        packageCardContent.classList.add('card-content');
        packageCardContent.appendChild(title);
        packageCardContent.appendChild(subTitle);
        packageCardContent.appendChild(price);
        packageCardContent.appendChild(rating);

        let stars = 5;
        for(let i=1; i<=Math.round(package.rating); i++) {
            let starIcon = document.createElement('i');
            starIcon.style.color = '#E5BD46';
            starIcon.style.paddingInline = '1px';
            starIcon.classList.add('bi');
            starIcon.classList.add('bi-star-fill');
            rating.appendChild(starIcon);
            stars -=1;
        }
        for(let i=1; i<=stars; i++) {
            let starIcon = document.createElement('i');
            starIcon.style.color = '#BFBFBF'
            starIcon.style.paddingInline = '1px';
            starIcon.classList.add('bi');
            starIcon.classList.add('bi-star-fill');
            rating.appendChild(starIcon);
        }

        packageCardContent.appendChild(button);
        button.classList.add('btn');
        button.classList.add('btn-warning');
        packageCard.appendChild(image);
        packageCard.appendChild(packageCardContent);
        packageSection.appendChild(packageCard)
    })
};

// function to create HTML service card.
function createService() {
    services.map((service) => {
        let serviceCard = document.createElement('div');
        serviceCard.classList.add('service-item');

        let serviceName = document.createElement('h3');
        serviceName.textContent = service.name;
        let serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;
        serviceCard.appendChild(serviceName);
        serviceCard.appendChild(serviceDescription);
        serviceSection.appendChild(serviceCard);
    })
};



// function to create HTML gallery card.
function createGallery() {
    galleryImages.map((image) => {
        let galleryCard = document.createElement('div');
        galleryCard.classList.add('box');

        let galleryImage = document.createElement('img');
        galleryImage.src = image.imageUrl;
        galleryCard.appendChild(galleryImage);
        gallerySection.appendChild(galleryCard);
    })
};

createPackage();
createService();
createGallery();

// event listener to submit the form on button click.
packageBookingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleFormSubmit();
});

// event listener to submit the form on form submit.
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmit();
    bookingForm.reset();
});

// Event listeners to remove the error message from input fields when value is updated.
document.getElementById('whereTo').addEventListener('input', function () {
    whereToError.textContent = "";
});

document.getElementById('persons').addEventListener('input', function () {
    personsError.textContent = "";
});

document.getElementById('startDate').addEventListener('input', function () {
    startDateError.textContent = "";
});

document.getElementById('endDate').addEventListener('input', function () {
    endDateError.textContent = "";
});

document.getElementById('description').addEventListener('input', function () {
    descriptionError.textContent = "";
});


// Back to Top 
document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.getElementById("back-to-top-btn");

    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});

