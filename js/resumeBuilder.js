var bio = {
    'name': 'Ian Claudius',
    'role': 'Book Designer',
    'contacts': {
        'mobile': '512-555-5555',
        'email': 'ian.claudius@gmail.com',
        'github': 'ianclaudius',
        'twitter': '@ianclaudius',
        'location': 'Austin'
    },
    'welcomeMessage': '“Design is how it works.”',
    'skills': ['Design', 'Code', 'Problem Solving'],
    'bioPic': 'images/ian.jpg',
    'display': function() {
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);

        $('#header').prepend(formattedName, formattedRole);
        $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
        $('#header').append(formattedBioPic, formattedWelcomeMessage, HTMLskillsStart);

        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace('%data%', skill);
            $('#skills').append(formattedSkills);
        });

        $('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    }
};

var education = {
    'schools': [{
        'name': 'University of Missouri',
        'location': 'Kansas City',
        'degree': 'None',
        'majors': 'Physics, Mathematics',
        'dates': '2005 – 2006',
        'url': 'http://www.umkc.edu'
    }, {
        'name': 'MTTI',
        'location': 'Kansas City',
        'degree': 'Diploma',
        'majors': 'Neuromuscular Therapy',
        'dates': '2003 – 2004',
        'url': 'http://wellspring.edu'
    }],
    'onlineCourses': [{
        'title': 'Front-end Nanodegree',
        'school': 'Udacity',
        'dates': '2016',
        'url': 'https://www.udacity.com'
    }, {
        'title': 'Remote Prep',
        'school': 'Hack Reactor',
        'dates': '2015',
        'url': 'http://www.hackreactor.com'
    }],
    'display': function() {
        $('#education').append(HTMLschoolStart);

        education.schools.forEach(function(school) {
            var formattedName = HTMLschoolName.replace('%data%', school.name);
            var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
            var formattedNameDegree = formattedName + formattedDegree;
            var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
            var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
            var formattedMajor = HTMLschoolMajor.replace('%data%', school.majors);

            $('.education-entry:last').append(formattedNameDegree, formattedDates, formattedLocation, formattedMajor);
        });

        $('#education').append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(course) {
            var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
            var formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            var formattedDates = HTMLonlineDates.replace('%data%', course.dates);
            var formattedURL = HTMLonlineURL.replace('%data%', course.url);

            $('.online-entry:last').append(formattedTitleSchool, formattedDates, formattedURL);
        });
    }
};

var work = {
    'jobs': [{
        'employer': 'Book In A Box',
        'title': 'Book Designer',
        'location': 'Austin',
        'dates': 'February 2016 – Current',
        'description': 'Short of setting metal type by hand, I am well-versed in just about every aspect of production. If it involves words, pages, or screens, chances are I can make it shine.'
    }, {
        'employer': 'Independent',
        'title': 'Publishing Consultant',
        'location': 'Austin',
        'dates': 'October 2013 – February 2016',
        'description': 'Book design and consulting for authors.'
    }, {
        'employer': 'Lioncrest',
        'title': 'Director of Publishing',
        'location': 'Austin',
        'dates': 'October 2012 – October 2013',
        'description': 'Created and managed a production pipeline for authors who wished to become self-published.'
    }, {
        'employer': 'Tropaion Publishing',
        'title': 'Founder and Chief Operating Officer',
        'location': 'Austin',
        'dates': 'September 2011 – October 2012',
        'description': 'Created and managed a production pipeline for a #1 Bestselling author to transition to self-publishing. Also created a new study guide series (Bookhacker).'
    }, ],
    'display': function() {
        $('#workExperience').append(HTMLworkStart);

        work.jobs.forEach(function(job) {
            var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
            var formattedDates = HTMLworkDates.replace('%data%', job.dates);
            var formattedDescription = HTMLworkDescription.replace('%data%', job.description);

            $('.work-entry:last').append(formattedEmployerTitle, formattedLocation, formattedDates, formattedDescription);
        });
    }
};

var projects = {
    'projects': [{
        'title': 'Mockup to Article',
        'dates': '2016',
        'description': 'Udacity Project demonstrating knowledge of HTML syntax',
        'images': 'images/project1.png',
    }, {
        'title': 'Animal Trading Cards',
        'dates': '2016',
        'description': 'Udacity Project demonstrating knowledge of CSS',
        'images': 'images/project2.png',
    }, {
        'title': 'Build a Portfolio Site',
        'dates': '2016',
        'description': 'Udacity Project demonstrating advanced HTML/CSS with responsive design',
        'images': 'images/project3.png',
    }],
    'display': function() {
        $('#projects').append(HTMLprojectStart);

        projects.projects.forEach(function(project) {
            var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
            var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
            var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
            var formattedImage = HTMLprojectImage.replace('%data%', project.images);
            $('.project-entry:last').append(formattedTitle, formattedDates, formattedDescription, formattedImage);
        });
    }
};

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);
