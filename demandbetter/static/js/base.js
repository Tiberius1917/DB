/***********************************  SITEWIDE STYLING  ************************************/

/*****  Accessibility  *****/
/*  CODE CREDIT: SKIP TO MAIN ADAPTED FROM NC STATE UNIVERSITY ACCESSIBILITY GUIDELINES  */
/*  (https://accessibility.oit.ncsu.edu/it-accessibility-at-nc-state/developers/accessibility-handbook/mouse-and-keyboard-events/skip-to-main-content/)  */
#skip-to-main {
    left:-999px;
    position:absolute;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
    z-index:-999;
}
/*  END OF CODE CREDIT  */

/*----------------------------------  Global Variables  -----------------------------------*/

:root {
    --orange-peel: #ffa52c;
    --medium-aquamarine: #35db95;
    --fiery-rose: #fd636b;
    --maya-blue: #63bafd;
    --black-border: 1px solid black;
    --square-border: 0px;
}

/*----------------------------------  Sitewide Elements/Utilities  ------------------------*/

/* Square borders to overwrite default styles */
input:not(#flexSwitchCheckDefault), select, .input-group, .form-control, textarea {
    /* Not Bootstrap's toggle button */
    /* .input-group is crispy forms file upload */
    border-radius: var(--square-border) !important;
}

a, a:hover, .btn, .btn:hover {
    text-decoration: none;
    color: currentColor;
}

/* Tailoring Bootstrap's styling */
.btn {
    border: var(--black-border);
    border-radius: var(--square-border);
    text-transform: uppercase;
}


/* Custom button stles */
.btn-blue, .btn-blue:hover {
    background-color: var(--maya-blue);
    color: black;
}

.btn-green, .btn-green:hover {
    background-color: var(--medium-aquamarine);
    color: black;
}

.btn-orange, .btn-orange:hover {
    background-color: var(--orange-peel);
    color: black;
}

.btn-red, .btn-red:hover {
    background-color: var(--fiery-rose);
    color: black;
}

.btn-white, .btn-white:hover {
    background-color: white;
    color: black;
}

.btn-black, .btn-black:hover {
    background-color: black;
    color: white;
}

#btn-clear, #btn-clear:hover {
    background-color: transparent;
    color: black;
    border: none;
}

/* TRANSITION - INSPIRED BY POST BELOW */
/* https://css-tricks.com/snippets/css/scale-on-hover-with-webkit-transition/ */

/* First, make most anchors/buttons inline-block & set transition style*/
a:not(.dropdown-item):not(.article-img):not(.profile-img), .btn {
    display: inline-block;
    transition: transform 0.2s ease-in-out;
}

/* Second, scale these items up by 20% */
a:hover:not(.dropdown-item):not(.article-img):not(.profile-img), .btn:hover {
    transform: scale(1.125);
}

/* Third, remove the anchor backgrounds on non-buttons to avoid scaling the block background */
a:not(.btn) {
    background-color: transparent;
}
/* END OF TRANSITION */

.underline {
    text-decoration: underline;
}

.spacer {
    min-height: 90vh;
}

/*----------------------------------  Multi-Page Utilities  ------------------------*/

#header {
    color: #444444;
}

#main-content {
    min-height: 80vh;
    max-width: 90%;
}

.article-image, .profile-image {
    max-width: 100%;
    max-height: 70vh;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.article {
    background-color: #cccccc;
    color: black;
}

.proposal {
    background-color: #666666;
    color: white;
}

.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-body {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#responsive-table-box {
    max-height: 400px;
    overflow-y: auto;
}

#responsive-table {
    min-width: 800px;
}

/***********************************  PAGE-SPECIFIC STYLING  ************************************/

/*----------------------------------  Base Template  -----------------------------------*/

#search-btn-main, #search-btn-mobile, .form-control-custom {
    height: 35px;
    margin-top: 5px;
    border-radius: 0;
    color: white;
    border-color: white;
}

#magnifying-glass-main, #magnifying-glass-mobile {
    size: 200px;
}

#search-btn-main:hover, #search-btn-mobile:hover {
    color: black;
    background-color: white;
}

#logo-main {
    font-weight: 400;
    padding-left: 10px;
    margin-top: 5px;
}

#top-bar {
    background-color: black;
    height: 50px;
}

#shopping-bag-link-main, #shopping-bag-link-mobile, #main-register-link, #main-profile-link, #navbarDropdown, #main-logo-link, #footer-logo-link,
 #mobile-login-link, #mobile-register-link, #mobile-profile-link, #mobile-logout-link, #mobile-logo {
    color: white;
}

.dropdown-menu {
    border-radius: 0;
}

#navbarDropdown {
    text-align: center;
}

#bottom-bar {
    height: 50px;
    align-content: center;
    justify-content: center;
}

/*----------------------------------  Index  --------------------------------------*/

#banner {
    height: 1000px;
    background-image: url("../../media/banner-image.jpg");
    background-size: 100% 100%;
    background-attachment: fixed;
}

#welcome {
    width: 100%;
    height: 20%;
    opacity: 80%;
    background-color: white;
}

#begin {
    margin-top: 55px;
}

/*----------------------------------  Shopping Bag ----------------------------------------*/

.bag-img {
    width: 150px;
    height: 150px;
    object-fit: cover;
}

/*----------------------------------  Checkout Page --------------------------------*/

#login-box {
    border: 1px solid #cccccc;
}

#loading-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(13, 214, 181, 0.85);
    z-index: 9999;
}

.loading-spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 100%;
}

/*----------------------------------  CTA Includes (Articles App) ------------------------*/

#bottom-box {
    border: 1px solid #cccccc;
}


/*----------------------------------  Toast Includes (Main App) ----------------------------*/

.toast-container {
    position: fixed;
    z-index: 100;
}

.toast {
    overflow: visible;
}

.bag-item-wrapper {
    height: 150px;
    overflow-x: hidden;
    overflow-y: auto;
}

.bag-mini-img {
    width: 100px;
    height: 100px;
}

/*----------------------------------  AllAuth Forms ------------------------------------*/

.allauth-inner-content input {
    border-radius: var(--square-border);
}

/* Hide all labels on allauth forms except the remember checkbox */
.allauth-inner-content label:not([for="id_remember"]) {
    display: none;
}

/*----------------------------------  Crispy Forms -----------------------------------------*/
.asteriskField {
    display: none;
}

/***********************************  RESPONSIVE STYLING  ************************************/

/* Navbar */
@media screen and (max-width: 991px){
    #logo-main {
        font-size: 20px;
        padding-top: 2px;
    }
    #mobile-logo {
        font-size: 20px;
    }
    #banner {
        height: 90vh;
    }
    #welcome {
        height: 30%;
    }
}

@media screen and (min-width: 992px){
    #logo-main {
        font-size: 24px;
    }
}
