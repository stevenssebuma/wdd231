document.addEventListener('DOMContentLoaded', function() {
    // Handle the contact form submission
    const form = document.getElementById('contact-form');
    form?.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        form.reset();
        localStorage.setItem('formSubmission', 'Thank you for your message!');
    });

    // Handle the last modified in the footer
    const lastModified = document.querySelector('#lastModified');
    const lastModifiedDate = document.lastModified;
    lastModified.innerHTML = lastModifiedDate;
    localStorage.setItem('lastModified', lastModifiedDate);

    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('#year');
    yearElement.textContent = currentYear;
    localStorage.setItem('currentYear', currentYear);


    // Add images with captions to the About Us page
    const imageGallery = document.querySelector('.image-gallery');
    if (imageGallery) {
        const images = [
            { src: 'images/tech-support2.jpg', caption: 'The more in Artificial intellingence offered is just a click away.' },
            { src: 'images/tech-support.jpg', caption: 'Support is here to be offered at your contact' },
            { src: 'images/Tips-for-Choosing-Team-Members.jpeg', caption: 'Thank you for your collaboration and teamwork' }
        ];
        localStorage.setItem('images', JSON.stringify(images));
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.loading = 'lazy';
            const captionElement = document.createElement('div');
            captionElement.className = 'caption';
            captionElement.textContent = image.caption;
            const container = document.createElement('div');
            container.appendChild(imgElement);
            container.appendChild(captionElement);
            imageGallery.appendChild(container);
        });
    }

    // Activate the hamburger button
    const hamButton = document.querySelector("#hamburger");
    const ul = document.querySelector("ul");
    
    hamButton.addEventListener("click", () => {
        ul.classList.toggle("open-ul");
        hamButton.classList.toggle("open");
    });

    // Add course items to the Courses page
    const courseList = document.querySelector('.course-list');
    if (courseList) {
        const courses = [
            { title: 'Web Development', description: '<button class="btn" onclick="openModal(\'newsModal\')">Learn More</button>', imgSrc: 'images/homepage-pic2.jpg' },
            { title: 'Tech Soluctions', description: '<button class="btn" onclick="openModal(\'newsModal\')">Learn More</button>', imgSrc: 'images/homepage-pic3.jpg' },
            { title: 'Web Maintainance', description: '<button class="btn" onclick="openModal(\'newsModal\')">Learn More</button>', imgSrc: 'images/pexels-jessica-lewis-583848.jpg' },
        ];
        localStorage.setItem('courses', JSON.stringify(courses));
        courses.forEach(course => {
            const imgElement = document.createElement('img');
            imgElement.src = course.imgSrc;
            imgElement.alt = course.title;
            imgElement.loading = 'lazy'; // Set lazy loading

            const titleElement = document.createElement('h3');
            titleElement.textContent = course.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.innerHTML = course.description; // Use innerHTML to render HTML content

            const container = document.createElement('div');
            container.className = 'course-item';
            container.appendChild(imgElement);
            container.appendChild(titleElement);
            container.appendChild(descriptionElement);

            courseList.appendChild(container);
        });

        
        
    }

    

    // Add news items to the News page
    const newsList = document.querySelector('.news-list');
    if (newsList) {
        const newsItems = [
            { title: 'Get Discounts this holidya Season', description: 'Join us for the start of a new academic year.', date: 'April 1, 2025', imgSrc: 'images/page2-pic.jpg' },
            { title: 'Workshop on AI', description: 'Attend our workshop on artificial intelligence and machine learning.', date: 'June 10, 2025', imgSrc: 'images/where-is-ai-used-1024x683.jpg' },
            { imgSrc: 'images/pexels-serpstat-572056.jpg', title: 'Programming Class Offered', description: 'Join the scheme of learners in AI, Mordern Programming Principles & Creativity', date: 'July 15, 202' }
        ];
        localStorage.setItem('newsItems', JSON.stringify(newsItems));
        newsItems.forEach(news => {
            const imgElement = document.createElement('img');
            imgElement.src = news.imgSrc;
            imgElement.alt = news.title;
            imgElement.loading = 'lazy'; // Set lazy loading

            const titleElement = document.createElement('h3');
            titleElement.textContent = news.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = news.description;

            const dateElement = document.createElement('small');
            dateElement.textContent = news.date;

            const container = document.createElement('div');
            container.className = 'news-item';
            container.appendChild(imgElement);
            container.appendChild(titleElement);
            container.appendChild(descriptionElement);
            container.appendChild(dateElement);

            newsList.appendChild(container);
        });
    }
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

