# DIGIFRET PWA APP

## Installation

Here's how to install and set up the project:

* in .env.production file add :
  
  The backend url : 
  REACT_APP_BACKEND_URL = "https://digifret-api-dev.onrender.com"
  
  The web site url to use it as redirect url for google and facebook auth : 
  REACT_APP_REDIRECT_URI = "https://mak-labs-digifrit.vercel.app"

  Create yu google map key api and copy it here:
  REACT_APP_GOOGLE_MAPS_API_KEY = "AIzaSyAcTv6LfnaFX8--nV1KiYfIqcClUIFI9aM"

  Add you your phone number for whatssap support : REACT_APP_PHONE_NUMBER = +XXXXXXXXXXXX
  
* Create a repo in your github or fork this repo
* and then use it in your own server (prefer to use vercel or netlify for react app deployment friendly)

  ## Static pages:
  * dashboard
  * Bilan carbon
  * and some information related to grage truck and trip
  * Trajet de retour not working
